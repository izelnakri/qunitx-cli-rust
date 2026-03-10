use crate::config::find_project_root;

const TEST_TEMPLATE: &str = r#"import { module, test } from 'qunitx';

module('{{moduleName}}', function (hooks) {
  test('assert true works', function (assert) {
    assert.expect(3);
    assert.ok(true);
    assert.equal(true, true);
    assert.deepEqual({}, {});
  });

  test('async test finishes', async function (assert) {
    assert.expect(2);

    const wait = () => new Promise((resolve) => setTimeout(() => resolve(true), 50));
    const result = await wait();

    assert.ok(result);
    assert.equal(true, result);
  });
});
"#;

pub async fn run() -> i32 {
    match run_inner().await {
        Ok(()) => 0,
        Err(e) => {
            eprintln!("Error: {e}");
            1
        }
    }
}

async fn run_inner() -> Result<(), String> {
    let name = std::env::args().nth(2).ok_or(
        "Usage: qunitx new <test-file-path>\n  Example: qunitx new test/my-feature-test.ts",
    )?;

    let cwd = std::env::current_dir().map_err(|e| format!("Couldn't get current dir: {e}"))?;
    let project_root = find_project_root(cwd).ok_or("Couldn't find project's package.json")?;

    let path = if name.ends_with(".js") || name.ends_with(".ts") {
        project_root.join(&name)
    } else {
        project_root.join(format!("{name}.js"))
    };

    if path.exists() {
        return Err(format!("{} already exists", path.display()));
    }

    if let Some(parent) = path.parent() {
        tokio::fs::create_dir_all(parent)
            .await
            .map_err(|e| format!("Error creating {}: {e}", parent.display()))?;
    }

    let module_name = path
        .file_stem()
        .and_then(|s| s.to_str())
        .unwrap_or(&name);
    let content = TEST_TEMPLATE.replace("{{moduleName}}", module_name);

    tokio::fs::write(&path, content)
        .await
        .map_err(|e| format!("Error writing {}: {e}", path.display()))?;

    println!("{} written", path.display());
    Ok(())
}
