use std::path::{Path, PathBuf};
use tokio::process::Command;

/// Bundle `test_files` into `{output_dir}/tests.js` using the local esbuild binary.
/// Returns the path to the generated bundle.
pub async fn build_bundle(test_files: &[PathBuf], output_dir: &Path) -> Result<PathBuf, String> {
    tokio::fs::create_dir_all(output_dir)
        .await
        .map_err(|e| format!("Failed to create output dir {}: {e}", output_dir.display()))?;

    // Write an entry file that imports every test file by absolute path.
    // Absolute paths work in esbuild and avoid needing --resolve-dir.
    let entry_content: String = test_files
        .iter()
        .map(|f| format!("import \"{}\";\n", f.display()))
        .collect();

    let entry_path = output_dir.join("__entry.js");
    tokio::fs::write(&entry_path, &entry_content)
        .await
        .map_err(|e| format!("Failed to write bundle entry file: {e}"))?;

    let outfile = output_dir.join("tests.js");

    let status = Command::new(esbuild_bin())
        .args([
            entry_path.to_str().ok_or("entry path is not valid UTF-8")?,
            "--bundle",
            "--format=iife",
            "--log-level=error",
            "--keep-names",
            "--sourcemap=inline",
            &format!("--outfile={}", outfile.display()),
        ])
        .status()
        .await
        .map_err(|e| {
            format!("Failed to spawn esbuild: {e}\n  Hint: install it with `npm i -D esbuild`")
        })?;

    if !status.success() {
        return Err(format!(
            "esbuild exited with status {status} while bundling {} test file(s)",
            test_files.len()
        ));
    }

    // Clean up the temporary entry file.
    let _ = tokio::fs::remove_file(&entry_path).await;

    Ok(outfile)
}

fn esbuild_bin() -> &'static str {
    // Prefer the project-local binary so version matches what the project uses.
    if Path::new("node_modules/.bin/esbuild").exists() {
        "node_modules/.bin/esbuild"
    } else {
        "esbuild"
    }
}
