use globset::{Glob, GlobMatcher};
use std::path::{Path, PathBuf};
use walkdir::WalkDir;

pub fn find_test_files(inputs: &[String], project_root: &Path) -> Vec<PathBuf> {
    let mut files = Vec::new();
    let cwd = std::env::current_dir().unwrap_or_else(|_| project_root.to_owned());

    for input in inputs {
        if is_glob(input) {
            collect_glob(input, &cwd, &mut files);
        } else {
            let path = resolve_path(input, project_root);
            if path.is_dir() {
                collect_dir(&path, &mut files);
            } else if is_test_file(&path) {
                files.push(path);
            }
        }
    }

    // Stable order, no duplicates.
    files.sort();
    files.dedup();
    files
}

fn is_glob(s: &str) -> bool {
    s.contains('*') || s.contains('?') || s.contains('[')
}

fn resolve_path(input: &str, project_root: &Path) -> PathBuf {
    let p = Path::new(input);
    if p.is_absolute() {
        p.to_owned()
    } else {
        project_root.join(p)
    }
}

fn collect_dir(dir: &Path, out: &mut Vec<PathBuf>) {
    for entry in WalkDir::new(dir)
        .follow_links(true)
        .into_iter()
        .filter_map(|e| e.ok())
    {
        let path = entry.into_path();
        if path.is_file() && is_test_file(&path) {
            out.push(path);
        }
    }
}

fn collect_glob(pattern: &str, base: &Path, out: &mut Vec<PathBuf>) {
    let matcher: GlobMatcher = match Glob::new(pattern) {
        Ok(g) => g.compile_matcher(),
        Err(e) => {
            eprintln!("Warning: invalid glob pattern {pattern:?}: {e}");
            return;
        }
    };
    for entry in WalkDir::new(base)
        .follow_links(true)
        .into_iter()
        .filter_map(|e| e.ok())
    {
        let path = entry.into_path();
        if path.is_file() {
            // Match against the path relative to base for glob portability.
            let rel = path.strip_prefix(base).unwrap_or(&path);
            if matcher.is_match(rel) && is_test_file(&path) {
                out.push(path);
            }
        }
    }
}

fn is_test_file(path: &Path) -> bool {
    matches!(
        path.extension().and_then(|e| e.to_str()),
        Some("js" | "ts")
    )
}
