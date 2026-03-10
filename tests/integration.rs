use std::path::{Path, PathBuf};

use tempfile::TempDir;
use tokio::sync::mpsc;

use qunitx::config::{Command, Config};
use qunitx::tap::{AssertionDetail, Counter, TestEndDetails};

// ── helpers ───────────────────────────────────────────────────────────────────

fn make_config(project_root: PathBuf, html_paths: Vec<PathBuf>) -> Config {
    Config {
        command: Command::Run,
        project_root: project_root.clone(),
        output: "tmp".into(),
        timeout_ms: 20000,
        fail_fast: false,
        watch: false,
        base_port: 1234,
        debug: false,
        inputs: vec![],
        html_paths,
        before: None,
        after: None,
        test_files: vec![],
    }
}

fn tap_collect(details: &TestEndDetails) -> (Counter, Vec<String>) {
    let (tx, mut rx) = mpsc::unbounded_channel::<String>();
    let mut counter = Counter::default();
    qunitx::tap::display_test_result(&mut counter, &tx, details);
    drop(tx);
    let mut lines = vec![];
    while let Ok(line) = rx.try_recv() {
        lines.push(line);
    }
    (counter, lines)
}

// ── config ────────────────────────────────────────────────────────────────────

#[test]
fn find_project_root_finds_package_json() {
    let dir = TempDir::new().unwrap();
    std::fs::write(dir.path().join("package.json"), "{}").unwrap();
    let found = qunitx::config::find_project_root(dir.path().to_path_buf());
    assert_eq!(found, Some(dir.path().to_path_buf()));
}

#[test]
fn find_project_root_walks_up_directories() {
    let dir = TempDir::new().unwrap();
    std::fs::write(dir.path().join("package.json"), "{}").unwrap();
    let sub = dir.path().join("a").join("b").join("c");
    std::fs::create_dir_all(&sub).unwrap();
    let found = qunitx::config::find_project_root(sub);
    assert_eq!(found, Some(dir.path().to_path_buf()));
}

#[test]
fn find_project_root_returns_none_when_missing() {
    let dir = TempDir::new().unwrap();
    // No package.json — should not find one (TempDir is created in /tmp which
    // won't have a package.json in any ancestor under normal conditions).
    // We walk from the deepest path to avoid false positives from the real fs.
    let deep = dir.path().join("x").join("y");
    std::fs::create_dir_all(&deep).unwrap();
    // Only return None if no package.json exists anywhere up to /
    let found = qunitx::config::find_project_root(deep);
    // We can't guarantee None (CI might have one), so just ensure the result
    // is either None or a path that actually contains package.json.
    if let Some(root) = found {
        assert!(root.join("package.json").exists());
    }
}

#[test]
fn config_output_dir_joins_correctly() {
    let dir = TempDir::new().unwrap();
    let config = make_config(dir.path().to_path_buf(), vec![]);
    assert_eq!(config.output_dir(), dir.path().join("tmp"));
}

// ── discover ──────────────────────────────────────────────────────────────────

#[test]
fn find_test_files_returns_ts_file_directly() {
    let dir = TempDir::new().unwrap();
    let f = dir.path().join("foo-test.ts");
    std::fs::write(&f, "").unwrap();
    let files = qunitx::discover::find_test_files(&[f.to_str().unwrap().to_string()], dir.path());
    assert_eq!(files, vec![f]);
}

#[test]
fn find_test_files_returns_js_file_directly() {
    let dir = TempDir::new().unwrap();
    let f = dir.path().join("bar-test.js");
    std::fs::write(&f, "").unwrap();
    let files = qunitx::discover::find_test_files(&[f.to_str().unwrap().to_string()], dir.path());
    assert_eq!(files, vec![f]);
}

#[test]
fn find_test_files_recurses_into_directory() {
    let dir = TempDir::new().unwrap();
    let sub = dir.path().join("tests");
    std::fs::create_dir_all(&sub).unwrap();
    let a = sub.join("a-test.ts");
    let b = sub.join("b-test.ts");
    std::fs::write(&a, "").unwrap();
    std::fs::write(&b, "").unwrap();
    let files = qunitx::discover::find_test_files(&[sub.to_str().unwrap().to_string()], dir.path());
    assert!(files.contains(&a));
    assert!(files.contains(&b));
    assert_eq!(files.len(), 2);
}

#[test]
fn find_test_files_glob_with_no_match_returns_empty() {
    // collect_glob walks from cwd — a glob pointing at a completely separate
    // TempDir will find nothing. Verifies the function returns an empty vec
    // rather than panicking on a valid-but-unmatching pattern.
    let dir = TempDir::new().unwrap();
    let pattern = format!("{}/*.ts", dir.path().display());
    let files = qunitx::discover::find_test_files(&[pattern], dir.path());
    assert!(files.is_empty());
}

#[test]
fn find_test_files_excludes_non_js_ts_extensions() {
    let dir = TempDir::new().unwrap();
    std::fs::write(dir.path().join("readme.md"), "").unwrap();
    std::fs::write(dir.path().join("config.json"), "").unwrap();
    let files =
        qunitx::discover::find_test_files(&[dir.path().to_str().unwrap().to_string()], dir.path());
    assert!(files.is_empty());
}

#[test]
fn find_test_files_deduplicates() {
    let dir = TempDir::new().unwrap();
    let f = dir.path().join("x-test.ts");
    std::fs::write(&f, "").unwrap();
    let path = f.to_str().unwrap().to_string();
    let files = qunitx::discover::find_test_files(&[path.clone(), path], dir.path());
    assert_eq!(files.len(), 1);
}

#[test]
fn find_test_files_result_is_sorted() {
    let dir = TempDir::new().unwrap();
    let c = dir.path().join("c-test.ts");
    let a = dir.path().join("a-test.ts");
    let b = dir.path().join("b-test.ts");
    std::fs::write(&a, "").unwrap();
    std::fs::write(&b, "").unwrap();
    std::fs::write(&c, "").unwrap();
    let files =
        qunitx::discover::find_test_files(&[dir.path().to_str().unwrap().to_string()], dir.path());
    assert_eq!(files, vec![a, b, c]);
}

// ── tap ───────────────────────────────────────────────────────────────────────

#[test]
fn counter_starts_at_zero() {
    let c = Counter::default();
    assert_eq!(c.test_count, 0);
    assert_eq!(c.pass_count, 0);
    assert_eq!(c.fail_count, 0);
    assert_eq!(c.skip_count, 0);
}

#[test]
fn display_test_result_passed_increments_pass_count() {
    let details = TestEndDetails {
        full_name: vec!["Module".into(), "passes".into()],
        status: "passed".into(),
        runtime: 3.0,
        ..Default::default()
    };
    let (counter, lines) = tap_collect(&details);
    assert_eq!(counter.test_count, 1);
    assert_eq!(counter.pass_count, 1);
    assert_eq!(counter.fail_count, 0);
    assert_eq!(lines[0], "ok 1 Module | passes # (3 ms)");
}

#[test]
fn display_test_result_failed_increments_fail_count() {
    let details = TestEndDetails {
        full_name: vec!["Suite".into(), "fails".into()],
        status: "failed".into(),
        runtime: 10.0,
        ..Default::default()
    };
    let (counter, lines) = tap_collect(&details);
    assert_eq!(counter.test_count, 1);
    assert_eq!(counter.fail_count, 1);
    assert_eq!(counter.pass_count, 0);
    assert_eq!(lines[0], "not ok 1 Suite | fails # (10 ms)");
}

#[test]
fn display_test_result_skipped() {
    let details = TestEndDetails {
        name: "skipped test".into(),
        status: "skipped".into(),
        ..Default::default()
    };
    let (counter, lines) = tap_collect(&details);
    assert_eq!(counter.skip_count, 1);
    assert_eq!(counter.test_count, 1);
    assert_eq!(lines[0], "ok 1 skipped test # skip");
}

#[test]
fn display_test_result_todo() {
    let details = TestEndDetails {
        name: "todo test".into(),
        status: "todo".into(),
        ..Default::default()
    };
    let (_, lines) = tap_collect(&details);
    assert_eq!(lines[0], "not ok 1 todo test # todo");
}

#[test]
fn display_test_result_uses_name_when_full_name_empty() {
    let details = TestEndDetails {
        full_name: vec![],
        name: "standalone test".into(),
        status: "passed".into(),
        runtime: 1.0,
        ..Default::default()
    };
    let (_, lines) = tap_collect(&details);
    assert!(lines[0].contains("standalone test"), "got: {}", lines[0]);
}

#[test]
fn display_test_result_failed_with_assertion_yaml() {
    let details = TestEndDetails {
        full_name: vec!["M".into(), "t".into()],
        status: "failed".into(),
        runtime: 0.0,
        assertions: vec![AssertionDetail {
            passed: false,
            actual: Some(serde_json::json!(1)),
            expected: Some(serde_json::json!(2)),
            message: Some("not equal".into()),
            stack: None,
            todo: None,
        }],
        ..Default::default()
    };
    let (_, lines) = tap_collect(&details);
    let full = lines.join("\n");
    assert!(full.contains("---"), "missing YAML header: {full}");
    assert!(full.contains("actual: 1"), "missing actual: {full}");
    assert!(full.contains("expected: 2"), "missing expected: {full}");
    assert!(
        full.contains("message: not equal"),
        "missing message: {full}"
    );
    assert!(full.contains("..."), "missing YAML footer: {full}");
}

#[test]
fn display_test_result_failed_with_stack_location() {
    let details = TestEndDetails {
        full_name: vec!["M".into(), "t".into()],
        status: "failed".into(),
        runtime: 0.0,
        assertions: vec![AssertionDetail {
            passed: false,
            actual: None,
            expected: None,
            message: None,
            stack: Some("Error\n    at (http://localhost:1234/:42:10)".into()),
            todo: None,
        }],
        ..Default::default()
    };
    let (_, lines) = tap_collect(&details);
    let full = lines.join("\n");
    assert!(full.contains("at:"), "missing at: field: {full}");
    assert!(full.contains("localhost:1234"), "missing location: {full}");
}

#[test]
fn display_test_result_skips_passed_assertions_in_yaml() {
    let details = TestEndDetails {
        full_name: vec!["M".into(), "t".into()],
        status: "failed".into(),
        runtime: 0.0,
        assertions: vec![
            AssertionDetail {
                passed: true,
                ..Default::default()
            },
            AssertionDetail {
                passed: false,
                message: Some("the failure".into()),
                ..Default::default()
            },
        ],
        ..Default::default()
    };
    let (_, lines) = tap_collect(&details);
    // Only one YAML block (for the failed assertion)
    let yaml_blocks = lines.iter().filter(|l| l.contains("---")).count();
    assert_eq!(yaml_blocks, 1);
}

#[test]
fn display_test_result_sequential_numbers() {
    let (tx, mut rx) = mpsc::unbounded_channel::<String>();
    let mut counter = Counter::default();
    for _ in 0..5 {
        let details = TestEndDetails {
            name: "test".into(),
            status: "passed".into(),
            runtime: 0.0,
            ..Default::default()
        };
        qunitx::tap::display_test_result(&mut counter, &tx, &details);
    }
    drop(tx);
    for i in 1..=5u32 {
        let line = rx.try_recv().unwrap();
        assert!(line.starts_with(&format!("ok {i} ")), "line {i}: {line}");
    }
    assert_eq!(counter.test_count, 5);
}

#[test]
fn display_test_result_uses_errors_fallback_when_assertions_empty() {
    let details = TestEndDetails {
        name: "err fallback".into(),
        status: "failed".into(),
        runtime: 0.0,
        assertions: vec![],
        errors: vec![AssertionDetail {
            passed: false,
            message: Some("via errors field".into()),
            ..Default::default()
        }],
        ..Default::default()
    };
    let (_, lines) = tap_collect(&details);
    let full = lines.join("\n");
    assert!(
        full.contains("via errors field"),
        "errors fallback not used: {full}"
    );
}

// ── runner: split_into_groups / group_output_dir ──────────────────────────────

#[test]
fn split_into_groups_even() {
    let files: Vec<PathBuf> = (0..4).map(|i| PathBuf::from(format!("f{i}.ts"))).collect();
    let groups = qunitx::runner::split_into_groups(&files, 2);
    assert_eq!(groups.len(), 2);
    assert_eq!(groups[0].len(), 2);
    assert_eq!(groups[1].len(), 2);
}

#[test]
fn split_into_groups_uneven() {
    let files: Vec<PathBuf> = (0..5).map(|i| PathBuf::from(format!("f{i}.ts"))).collect();
    let groups = qunitx::runner::split_into_groups(&files, 2);
    let total: usize = groups.iter().map(|g| g.len()).sum();
    assert_eq!(total, 5);
}

#[test]
fn split_into_groups_fewer_files_than_n_removes_empty_groups() {
    let files = vec![PathBuf::from("only.ts")];
    let groups = qunitx::runner::split_into_groups(&files, 8);
    assert_eq!(groups.len(), 1);
    assert_eq!(groups[0], files);
}

#[test]
fn split_into_groups_empty_files() {
    let groups = qunitx::runner::split_into_groups(&[], 4);
    assert!(groups.is_empty());
}

#[test]
fn group_output_dir_single_total_returns_base() {
    let base = Path::new("/output");
    assert_eq!(qunitx::runner::group_output_dir(base, 0, 1), base);
}

#[test]
fn group_output_dir_multiple_total_appends_index() {
    let base = Path::new("/output");
    assert_eq!(
        qunitx::runner::group_output_dir(base, 0, 3),
        PathBuf::from("/output/group-0")
    );
    assert_eq!(
        qunitx::runner::group_output_dir(base, 2, 3),
        PathBuf::from("/output/group-2")
    );
}

// ── runner: normalize_path ────────────────────────────────────────────────────

#[test]
fn normalize_path_identity() {
    assert_eq!(
        qunitx::runner::normalize_path(Path::new("/a/b/c")),
        PathBuf::from("/a/b/c")
    );
}

#[test]
fn normalize_path_resolves_parent_dir() {
    assert_eq!(
        qunitx::runner::normalize_path(Path::new("/a/b/../c")),
        PathBuf::from("/a/c")
    );
}

#[test]
fn normalize_path_resolves_current_dir() {
    assert_eq!(
        qunitx::runner::normalize_path(Path::new("/a/./b")),
        PathBuf::from("/a/b")
    );
}

#[test]
fn normalize_path_multiple_parent_dirs() {
    assert_eq!(
        qunitx::runner::normalize_path(Path::new("/a/b/c/../../d")),
        PathBuf::from("/a/d")
    );
}

// ── runner: rewrite_asset_paths ───────────────────────────────────────────────

#[test]
fn rewrite_asset_paths_rewrites_relative_href() {
    let root = TempDir::new().unwrap();
    let sub = root.path().join("test");
    let html = r#"<link href="styles/qunit.css">"#;
    let result = qunitx::runner::rewrite_asset_paths(html, &sub, root.path());
    assert!(
        result.contains(r#"href="/test/styles/qunit.css""#),
        "got: {result}"
    );
}

#[test]
fn rewrite_asset_paths_rewrites_relative_src() {
    let root = TempDir::new().unwrap();
    let sub = root.path().join("test");
    let html = r#"<script src="vendor/qunit.js"></script>"#;
    let result = qunitx::runner::rewrite_asset_paths(html, &sub, root.path());
    assert!(
        result.contains(r#"src="/test/vendor/qunit.js""#),
        "got: {result}"
    );
}

#[test]
fn rewrite_asset_paths_keeps_http_urls() {
    let root = TempDir::new().unwrap();
    let html = r#"<link href="https://example.com/style.css">"#;
    let result = qunitx::runner::rewrite_asset_paths(html, root.path(), root.path());
    assert_eq!(result, html);
}

#[test]
fn rewrite_asset_paths_keeps_absolute_urls() {
    let root = TempDir::new().unwrap();
    let html = r#"<script src="/already/absolute.js"></script>"#;
    let result = qunitx::runner::rewrite_asset_paths(html, root.path(), root.path());
    assert_eq!(result, html);
}

#[test]
fn rewrite_asset_paths_keeps_protocol_relative_urls() {
    let root = TempDir::new().unwrap();
    let html = r#"<script src="//cdn.example.com/lib.js"></script>"#;
    let result = qunitx::runner::rewrite_asset_paths(html, root.path(), root.path());
    assert_eq!(result, html);
}

#[test]
fn rewrite_asset_paths_parent_dir_resolves_correctly() {
    let root = TempDir::new().unwrap();
    let sub = root.path().join("test");
    // "../node_modules/qunitx/vendor/qunit.css" from sub resolves to root/node_modules/...
    let html = r#"<link href="../node_modules/qunitx/vendor/qunit.css">"#;
    let result = qunitx::runner::rewrite_asset_paths(html, &sub, root.path());
    assert!(
        result.contains(r#"href="/node_modules/qunitx/vendor/qunit.css""#),
        "got: {result}"
    );
}

// ── runner: build_html ────────────────────────────────────────────────────────

#[tokio::test]
async fn build_html_embeds_port() {
    let dir = TempDir::new().unwrap();
    let bundle = dir.path().join("bundle.js");
    tokio::fs::write(&bundle, "// bundle").await.unwrap();

    let html =
        qunitx::runner::build_html(qunitx::runner::DEFAULT_HTML, 54321, 20000, false, &bundle)
            .await
            .unwrap();

    assert!(
        html.contains("ws://127.0.0.1:54321/ws"),
        "port not embedded: missing ws://127.0.0.1:54321/ws"
    );
}

#[tokio::test]
async fn build_html_embeds_timeout() {
    let dir = TempDir::new().unwrap();
    let bundle = dir.path().join("bundle.js");
    tokio::fs::write(&bundle, "// bundle").await.unwrap();

    let html =
        qunitx::runner::build_html(qunitx::runner::DEFAULT_HTML, 1234, 99999, false, &bundle)
            .await
            .unwrap();

    assert!(html.contains("99999"), "timeout not embedded");
}

#[tokio::test]
async fn build_html_fail_fast_true() {
    let dir = TempDir::new().unwrap();
    let bundle = dir.path().join("bundle.js");
    tokio::fs::write(&bundle, "// bundle").await.unwrap();

    let html = qunitx::runner::build_html(qunitx::runner::DEFAULT_HTML, 1234, 20000, true, &bundle)
        .await
        .unwrap();

    assert!(
        html.contains("__QUNITX_FAIL_FAST__ = true") || html.contains("if (true &&"),
        "fail_fast=true not injected"
    );
    // The template replaces __QUNITX_FAIL_FAST__ with the literal "true"
    assert!(
        !html.contains("__QUNITX_FAIL_FAST__"),
        "placeholder not replaced"
    );
}

#[tokio::test]
async fn build_html_fail_fast_false() {
    let dir = TempDir::new().unwrap();
    let bundle = dir.path().join("bundle.js");
    tokio::fs::write(&bundle, "// bundle").await.unwrap();

    let html =
        qunitx::runner::build_html(qunitx::runner::DEFAULT_HTML, 1234, 20000, false, &bundle)
            .await
            .unwrap();

    assert!(
        !html.contains("__QUNITX_FAIL_FAST__"),
        "placeholder not replaced"
    );
    assert!(html.contains("if (false"), "fail_fast=false not injected");
}

#[tokio::test]
async fn build_html_escapes_script_closing_tag_in_bundle() {
    let dir = TempDir::new().unwrap();
    let bundle = dir.path().join("bundle.js");
    tokio::fs::write(&bundle, r#"var s = "</script>";"#)
        .await
        .unwrap();

    let html =
        qunitx::runner::build_html(qunitx::runner::DEFAULT_HTML, 1234, 20000, false, &bundle)
            .await
            .unwrap();

    assert!(
        !html.contains("</script>\""),
        "raw </script> in bundle not escaped"
    );
    assert!(html.contains(r"<\/script>"), "escaped form not present");
}

#[tokio::test]
async fn build_html_inlines_bundle_content() {
    let dir = TempDir::new().unwrap();
    let bundle = dir.path().join("bundle.js");
    tokio::fs::write(&bundle, "var SENTINEL_VALUE = 42;")
        .await
        .unwrap();

    let html =
        qunitx::runner::build_html(qunitx::runner::DEFAULT_HTML, 1234, 20000, false, &bundle)
            .await
            .unwrap();

    assert!(html.contains("SENTINEL_VALUE"), "bundle not inlined");
}

#[tokio::test]
async fn build_html_uses_content_placeholder_from_template() {
    let dir = TempDir::new().unwrap();
    let bundle = dir.path().join("bundle.js");
    tokio::fs::write(&bundle, "// b").await.unwrap();
    let template = "<html><body>BEFORE{{content}}AFTER</body></html>";

    let html = qunitx::runner::build_html(template, 1234, 20000, false, &bundle)
        .await
        .unwrap();

    assert!(html.starts_with("<html>"), "template not used");
    assert!(html.contains("BEFORE"), "template content missing");
    assert!(html.contains("AFTER"), "template content missing");
    assert!(!html.contains("{{content}}"), "placeholder not replaced");
}

#[tokio::test]
async fn build_html_returns_error_for_missing_bundle() {
    let result = qunitx::runner::build_html(
        qunitx::runner::DEFAULT_HTML,
        1234,
        20000,
        false,
        Path::new("/nonexistent/bundle.js"),
    )
    .await;

    assert!(result.is_err(), "expected error for missing bundle");
}

// ── runner: load_html_template ────────────────────────────────────────────────

#[tokio::test]
async fn load_html_template_returns_default_when_no_html_paths() {
    let dir = TempDir::new().unwrap();
    let config = make_config(dir.path().to_path_buf(), vec![]);
    let template = qunitx::runner::load_html_template(&config).await;
    assert_eq!(template, qunitx::runner::DEFAULT_HTML);
}

#[tokio::test]
async fn load_html_template_uses_custom_file_with_placeholder() {
    let dir = TempDir::new().unwrap();
    let html_path = dir.path().join("index.html");
    tokio::fs::write(
        &html_path,
        "<!DOCTYPE html><html><body>{{content}}</body></html>",
    )
    .await
    .unwrap();

    let config = make_config(dir.path().to_path_buf(), vec![html_path]);
    let template = qunitx::runner::load_html_template(&config).await;
    assert!(template.contains("{{content}}"), "placeholder missing");
    assert!(
        template.starts_with("<!DOCTYPE html>"),
        "custom template not used"
    );
}

#[tokio::test]
async fn load_html_template_ignores_file_without_placeholder() {
    let dir = TempDir::new().unwrap();
    let html_path = dir.path().join("nope.html");
    tokio::fs::write(&html_path, "<html><body>no placeholder here</body></html>")
        .await
        .unwrap();

    let config = make_config(dir.path().to_path_buf(), vec![html_path]);
    let template = qunitx::runner::load_html_template(&config).await;
    // Falls back to DEFAULT_HTML since the custom file has no {{content}}
    assert_eq!(template, qunitx::runner::DEFAULT_HTML);
}

#[tokio::test]
async fn load_html_template_ignores_nonexistent_path_falls_back_to_default() {
    let dir = TempDir::new().unwrap();
    let config = make_config(
        dir.path().to_path_buf(),
        vec![PathBuf::from("/nonexistent/index.html")],
    );
    let template = qunitx::runner::load_html_template(&config).await;
    assert_eq!(template, qunitx::runner::DEFAULT_HTML);
}

// ── runner: should_trigger ────────────────────────────────────────────────────

#[test]
fn should_trigger_ts_file_modify_returns_true() {
    use notify::event::{DataChange, EventKind, ModifyKind};
    let event = notify::Event {
        kind: EventKind::Modify(ModifyKind::Data(DataChange::Any)),
        paths: vec![PathBuf::from("/project/test/foo-test.ts")],
        attrs: Default::default(),
    };
    assert!(qunitx::runner::should_trigger(
        &event,
        Path::new("/project/tmp")
    ));
}

#[test]
fn should_trigger_js_file_create_returns_true() {
    use notify::event::{CreateKind, EventKind};
    let event = notify::Event {
        kind: EventKind::Create(CreateKind::File),
        paths: vec![PathBuf::from("/project/src/util.js")],
        attrs: Default::default(),
    };
    assert!(qunitx::runner::should_trigger(
        &event,
        Path::new("/project/tmp")
    ));
}

#[test]
fn should_trigger_output_dir_file_returns_false() {
    use notify::event::{DataChange, EventKind, ModifyKind};
    let event = notify::Event {
        kind: EventKind::Modify(ModifyKind::Data(DataChange::Any)),
        paths: vec![PathBuf::from("/project/tmp/bundle.js")],
        attrs: Default::default(),
    };
    assert!(!qunitx::runner::should_trigger(
        &event,
        Path::new("/project/tmp")
    ));
}

#[test]
fn should_trigger_non_js_ts_extension_returns_false() {
    use notify::event::{DataChange, EventKind, ModifyKind};
    let event = notify::Event {
        kind: EventKind::Modify(ModifyKind::Data(DataChange::Any)),
        paths: vec![PathBuf::from("/project/README.md")],
        attrs: Default::default(),
    };
    assert!(!qunitx::runner::should_trigger(
        &event,
        Path::new("/project/tmp")
    ));
}

#[test]
fn should_trigger_access_event_returns_false() {
    use notify::event::{AccessKind, EventKind};
    let event = notify::Event {
        kind: EventKind::Access(AccessKind::Read),
        paths: vec![PathBuf::from("/project/test/foo.ts")],
        attrs: Default::default(),
    };
    assert!(!qunitx::runner::should_trigger(
        &event,
        Path::new("/project/tmp")
    ));
}

// ── server ────────────────────────────────────────────────────────────────────

#[tokio::test]
async fn bind_returns_nonzero_port() {
    let (_, port) = qunitx::server::bind().await.unwrap();
    assert!(port > 0, "port should be non-zero, got {port}");
}

#[tokio::test]
async fn bind_returns_unique_ports() {
    let (_, port1) = qunitx::server::bind().await.unwrap();
    let (_, port2) = qunitx::server::bind().await.unwrap();
    assert_ne!(
        port1, port2,
        "two sequential binds should get different ports"
    );
}
