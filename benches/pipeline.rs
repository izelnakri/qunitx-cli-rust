// Criterion benchmarks for qunitx's pure-Rust pipeline stages.
//
// These cover the CPU-bound logic that runs on every test invocation and every
// watch-mode rebuild, isolated from browser startup, esbuild, and network I/O:
//
//   discover  — walkdir traversal + glob compilation + .ts/.js filtering
//   tap       — TAP/YAML formatting for passing, failing, and complex assertions
//   runner    — HTML template injection at varying bundle sizes, path helpers
//   config    — package.json location search at varying directory depths
//
// End-to-end comparison (qunitx vs qunitx-cli Node.js) lives in CI via
// hyperfine so it captures real browser-startup and esbuild wall time.

use std::hint::black_box;
use std::path::{Path, PathBuf};
use std::sync::Arc;

use criterion::{criterion_group, criterion_main, BenchmarkId, Criterion};
use tempfile::TempDir;
use tokio::runtime::Runtime;
use tokio::sync::mpsc;

use qunitx::{
    config::find_project_root,
    discover::find_test_files,
    runner::{build_html, normalize_path, rewrite_asset_paths, split_into_groups, DEFAULT_HTML},
    tap::{self, AssertionDetail, Counter, TestEndDetails},
};

// ── Fixtures ──────────────────────────────────────────────────────────────────

/// Build a temp tree of `n` .ts test files spread across `n/10` subdirectories,
/// with one non-test .json sibling per file to make filtering non-trivial.
fn make_test_tree(n: usize) -> TempDir {
    let dir = tempfile::tempdir().unwrap();
    for i in 0..n {
        let sub = dir.path().join(format!("module-{}", i / 10));
        std::fs::create_dir_all(&sub).unwrap();
        std::fs::write(
            sub.join(format!("test-{i}.ts")),
            format!(
                "import {{ test }} from 'qunitx';\ntest('case {i}', assert => assert.ok(true));"
            ),
        )
        .unwrap();
        std::fs::write(sub.join(format!("fixture-{i}.json")), b"{}").unwrap();
    }
    dir
}

/// Create a temp tree whose `package.json` sits at the root and a leaf
/// directory `depth` levels below it (simulates running from a nested subdir).
fn make_project_at_depth(depth: usize) -> (TempDir, PathBuf) {
    let dir = tempfile::tempdir().unwrap();
    std::fs::write(dir.path().join("package.json"), b"{}").unwrap();
    let mut leaf = dir.path().to_path_buf();
    for i in 0..depth {
        leaf = leaf.join(format!("sub-{i}"));
        std::fs::create_dir_all(&leaf).unwrap();
    }
    (dir, leaf)
}

// A real-world V8 stack trace as Chrome emits it in headless mode.
const SAMPLE_STACK: &str = concat!(
    "Error: Expected 0 to equal 3\n",
    "    at Object.<anonymous> (http://127.0.0.1:45231/tests.js:312:14)\n",
    "    at runTest (http://127.0.0.1:45231/node_modules/qunitx/vendor/qunit.js:3847:18)\n",
    "    at http://127.0.0.1:45231/node_modules/qunitx/vendor/qunit.js:4018:10\n",
    "    at processTicksAndRejections (node:internal/process/task_queues:95:5)"
);

// ── Helpers ───────────────────────────────────────────────────────────────────

fn make_failing_assertion(msg: &str) -> AssertionDetail {
    AssertionDetail {
        passed: false,
        actual: Some(serde_json::json!({"id": "b1", "stock": 0, "reserved": 3})),
        expected: Some(serde_json::json!({"id": "b1", "stock": 3, "reserved": 0})),
        message: Some(msg.to_owned()),
        stack: Some(SAMPLE_STACK.to_owned()),
        todo: None,
    }
}

// ── Discover ──────────────────────────────────────────────────────────────────
//
// Measures the full discovery hot-path: glob compilation, walkdir traversal,
// and the is_test_file extension filter.  Three input styles tested:
//   dir_scan    – the most common: pass a directory, recurse into it.
//   glob_pattern – explicit glob like "tests/**/*.ts".
//   direct_list – explicit file paths already known (no FS walk per path).

fn bench_discover(c: &mut Criterion) {
    let mut group = c.benchmark_group("discover");

    for &n in &[10usize, 100, 1_000] {
        let tree = make_test_tree(n);
        let root = tree.path().to_path_buf();
        let dir_str = root.to_str().unwrap().to_owned();

        // Directory traversal: every file touched by walkdir
        group.bench_with_input(BenchmarkId::new("dir_scan", n), &n, |b, _| {
            b.iter(|| {
                black_box(find_test_files(
                    black_box(&[dir_str.clone()]),
                    black_box(&root),
                ))
            });
        });

        // Glob pattern: adds Glob::new + compile_matcher overhead
        let glob = format!("{dir_str}/**/*.ts");
        group.bench_with_input(BenchmarkId::new("glob_pattern", n), &n, |b, _| {
            b.iter(|| {
                black_box(find_test_files(
                    black_box(&[glob.clone()]),
                    black_box(&root),
                ))
            });
        });
    }

    // Direct file list: skip traversal, just resolve + filter
    {
        let tree = make_test_tree(100);
        let root = tree.path().to_path_buf();
        let files: Vec<String> = (0..100)
            .map(|i| {
                root.join(format!("module-{}/test-{i}.ts", i / 10))
                    .to_str()
                    .unwrap()
                    .to_owned()
            })
            .collect();
        group.bench_function("direct_file_list_100", |b| {
            b.iter(|| black_box(find_test_files(black_box(&files), black_box(&root))));
        });
    }

    group.finish();
}

// ── TAP output ────────────────────────────────────────────────────────────────
//
// Measures YAML serialisation, string formatting, and stack-trace extraction.
// The three scenarios span the full range of per-test output volume:
//   passing          – single "ok N name # (T ms)" line, no YAML block
//   failing_simple   – one YAML block, primitive actual/expected values
//   failing_complex  – five YAML blocks each with JSON object diffs and a
//                      multi-frame V8 stack trace (worst-case TAP verbosity)

fn bench_tap(c: &mut Criterion) {
    let mut group = c.benchmark_group("tap");

    let passing = TestEndDetails {
        full_name: vec![
            "BookCatalog".into(),
            "adds and retrieves a book by id".into(),
        ],
        name: "adds and retrieves a book by id".into(),
        status: "passed".into(),
        runtime: 4.0,
        assertions: vec![],
        errors: vec![],
    };

    let failing_simple = TestEndDetails {
        full_name: vec![
            "BookCatalog".into(),
            "returns undefined for missing book".into(),
        ],
        name: "returns undefined for missing book".into(),
        status: "failed".into(),
        runtime: 7.0,
        assertions: vec![AssertionDetail {
            passed: false,
            actual: Some(serde_json::Value::String("null".into())),
            expected: Some(serde_json::Value::String("undefined".into())),
            message: Some("book should not exist".into()),
            stack: Some(SAMPLE_STACK.into()),
            todo: None,
        }],
        errors: vec![],
    };

    let failing_complex = TestEndDetails {
        full_name: vec!["Inventory".into(), "complex reservation scenario".into()],
        name: "complex reservation scenario".into(),
        status: "failed".into(),
        runtime: 18.0,
        assertions: (0..5)
            .map(|i| make_failing_assertion(&format!("stock mismatch at step {i}")))
            .collect(),
        errors: vec![],
    };

    // Channel created once; messages accumulate harmlessly (unbounded).
    let (tx, _rx) = mpsc::unbounded_channel::<String>();

    for (label, details) in [
        ("passing", &passing),
        ("failing_simple_1_assertion", &failing_simple),
        ("failing_complex_5_assertions", &failing_complex),
    ] {
        group.bench_function(label, |b| {
            b.iter(|| {
                let mut counter = Counter::default();
                tap::display_test_result(black_box(&mut counter), &tx, black_box(details));
                black_box(counter)
            });
        });
    }

    group.finish();
}

// ── HTML generation ───────────────────────────────────────────────────────────
//
// Measures the RUNTIME_TEMPLATE string replacement and </script> escaping,
// which is O(bundle_size).  Three sizes represent real-world test suites:
//   10 KB  – a single small test file
//  100 KB  – a medium suite importing a few modules
//  500 KB  – a large monorepo suite with many deep imports

fn bench_build_html(c: &mut Criterion) {
    let rt = Runtime::new().unwrap();
    let tmpdir = tempfile::tempdir().unwrap();

    for &size_kb in &[10usize, 100, 500] {
        let bundle_path = tmpdir.path().join(format!("bundle-{size_kb}kb.js"));
        // Realistic JS token variety (identifiers, literals, braces, semicolons)
        // rather than a single repeated character so string scanning isn't trivially
        // optimised away by the CPU's branch predictor.
        let line = "var _x0=1,_x1=2;function f(a,b){return a+b;} // generated\n";
        let reps = (size_kb * 1024) / line.len() + 1;
        std::fs::write(&bundle_path, line.repeat(reps)).unwrap();

        c.bench_with_input(
            BenchmarkId::new("build_html", format!("{size_kb}kb")),
            &size_kb,
            |b, _| {
                b.iter(|| {
                    rt.block_on(build_html(
                        black_box(DEFAULT_HTML),
                        black_box(8080u16),
                        black_box(20_000u64),
                        black_box(false),
                        black_box(&bundle_path),
                    ))
                    .unwrap()
                });
            },
        );
    }
}

// ── Runner helpers ────────────────────────────────────────────────────────────
//
// split_into_groups: round-robin file distribution used before parallel Chrome
// launches.  Scales with file count × group count.
//
// normalize_path: resolves .. components; called on every HTML asset URL.
//
// rewrite_asset_paths: rewrites relative href/src in custom HTML templates;
// touches every character in the HTML string, so scales with template size.

fn bench_runner_helpers(c: &mut Criterion) {
    // ── split_into_groups ────────────────────────────────────────────────────
    {
        let mut group = c.benchmark_group("split_into_groups");
        for &(n, g) in &[(10, 4), (100, 4), (1_000, 8), (1_000, 16)] {
            let files: Vec<PathBuf> = (0..n)
                .map(|i| PathBuf::from(format!("/project/test/suite-{i:04}.ts")))
                .collect();
            group.bench_with_input(
                BenchmarkId::new(format!("{n}files"), g),
                &g,
                |b, &groups| {
                    b.iter(|| black_box(split_into_groups(black_box(&files), groups)));
                },
            );
        }
        group.finish();
    }

    // ── normalize_path ───────────────────────────────────────────────────────
    {
        let mut group = c.benchmark_group("normalize_path");

        let shallow = Path::new("/project/src/test.ts");
        group.bench_function("shallow_4_segments", |b| {
            b.iter(|| black_box(normalize_path(black_box(shallow))));
        });

        let deep = Path::new("/project/a/b/c/d/e/f/g/h/i/j/test.ts");
        group.bench_function("deep_14_segments", |b| {
            b.iter(|| black_box(normalize_path(black_box(deep))));
        });

        // Typical case: custom HTML template in a subdirectory referencing
        // shared assets two levels up.
        let dotdot = Path::new("/project/tests/browser/../../assets/../assets/qunit.css");
        group.bench_function("dotdot_resolution", |b| {
            b.iter(|| black_box(normalize_path(black_box(dotdot))));
        });

        group.finish();
    }

    // ── rewrite_asset_paths ──────────────────────────────────────────────────
    {
        let project_root = Path::new("/project");
        let html_dir = Path::new("/project/tests");

        let make_html = |n: usize| -> String {
            let links: String = (0..n)
                .map(|i| {
                    format!(
                        "<link rel=\"stylesheet\" href=\"../assets/theme-{i}.css\">\n\
                         <script src=\"../assets/module-{i}.js\"></script>"
                    )
                })
                .collect::<Vec<_>>()
                .join("\n");
            format!("<!DOCTYPE html><html><head>{links}</head><body></body></html>")
        };

        let mut group = c.benchmark_group("rewrite_asset_paths");
        for n in [0usize, 10, 30] {
            let html = Arc::new(make_html(n));
            group.bench_with_input(BenchmarkId::new("n_assets", n), &n, |b, _| {
                b.iter(|| {
                    black_box(rewrite_asset_paths(
                        black_box(&html),
                        black_box(html_dir),
                        black_box(project_root),
                    ))
                });
            });
        }
        group.finish();
    }
}

// ── Config ────────────────────────────────────────────────────────────────────
//
// find_project_root: walks ancestor dirs checking for package.json.
// Depth simulates running qunitx from inside a deeply nested source subdir.
// We keep all TempDirs alive for the entire benchmark group so the directories
// remain on disk while we're iterating.

fn bench_config(c: &mut Criterion) {
    let mut group = c.benchmark_group("find_project_root");

    let fixtures: Vec<(TempDir, PathBuf)> = [1usize, 5, 10]
        .iter()
        .map(|&d| make_project_at_depth(d))
        .collect();

    for (depth, (_, leaf)) in [1, 5, 10].iter().zip(fixtures.iter()) {
        group.bench_with_input(BenchmarkId::new("depth", depth), leaf, |b, leaf| {
            b.iter(|| black_box(find_project_root(black_box(leaf.clone()))));
        });
    }

    group.finish();
}

// ── Wire up ───────────────────────────────────────────────────────────────────

criterion_group!(
    benches,
    bench_discover,
    bench_tap,
    bench_build_html,
    bench_runner_helpers,
    bench_config,
);
criterion_main!(benches);
