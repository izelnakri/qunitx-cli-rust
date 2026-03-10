use std::path::Path;

use crate::config::find_project_root;

const TESTS_HTML: &str = r#"<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>{{applicationName}} Tests</title>
    <link href="../node_modules/qunitx/vendor/qunit.css" rel="stylesheet">
  </head>
  <body>
    <div id="qunit"></div>
    <div id="qunit-fixture"></div>

    {{content}}
  </body>
</html>
"#;

const TSCONFIG: &str = r#"{
  "compilerOptions": {
    "target": "es2016",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
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
    let cwd = std::env::current_dir().map_err(|e| format!("Couldn't get current dir: {e}"))?;
    let project_root = find_project_root(cwd).ok_or("Couldn't find project's package.json")?;

    // Determine HTML paths from extra CLI args (e.g. `qunitx init test/custom.html`)
    let extra_args: Vec<String> = std::env::args().skip(2).collect();
    let html_paths: Vec<String> = if extra_args.is_empty() {
        vec!["test/tests.html".into()]
    } else {
        extra_args
            .into_iter()
            .filter(|a| a.ends_with(".html"))
            .collect()
    };

    let qunitx_config = serde_json::json!({
        "output": "tmp",
        "timeout": 20000,
        "failFast": false,
        "port": 1234,
        "htmlPaths": html_paths,
        "inputs": ["test/"]
    });

    // Write HTML files
    for html_path in &html_paths {
        let target = project_root.join(html_path);
        if target.exists() {
            println!("{html_path} already exists");
            continue;
        }
        if let Some(parent) = target.parent() {
            tokio::fs::create_dir_all(parent)
                .await
                .map_err(|e| format!("Error creating {}: {e}", parent.display()))?;
        }
        tokio::fs::write(&target, TESTS_HTML)
            .await
            .map_err(|e| format!("Error writing {}: {e}", target.display()))?;
        println!("{} written", target.display());
    }

    // Update package.json
    write_package_json(&project_root, qunitx_config).await?;

    // Write tsconfig.json if absent
    let tsconfig_path = project_root.join("tsconfig.json");
    if !tsconfig_path.exists() {
        tokio::fs::write(&tsconfig_path, TSCONFIG)
            .await
            .map_err(|e| format!("Error writing tsconfig.json: {e}"))?;
        println!("{} written", tsconfig_path.display());
    }

    Ok(())
}

async fn write_package_json(
    project_root: &Path,
    qunitx_config: serde_json::Value,
) -> Result<(), String> {
    let pkg_path = project_root.join("package.json");
    let content = tokio::fs::read_to_string(&pkg_path)
        .await
        .map_err(|e| format!("Error reading package.json: {e}"))?;
    let mut pkg: serde_json::Value =
        serde_json::from_str(&content).map_err(|e| format!("Error parsing package.json: {e}"))?;

    // Merge: existing qunitx config takes priority over defaults
    let merged = if let Some(existing) = pkg.get("qunitx").and_then(|v| v.as_object()) {
        let mut base = qunitx_config
            .as_object()
            .ok_or("internal: qunitx_config is not an object")?
            .clone();
        for (k, v) in existing {
            base.insert(k.clone(), v.clone());
        }
        serde_json::Value::Object(base)
    } else {
        qunitx_config
    };

    pkg["qunitx"] = merged;

    let new_content = serde_json::to_string_pretty(&pkg)
        .map_err(|e| format!("Error serializing package.json: {e}"))?;
    tokio::fs::write(&pkg_path, new_content + "\n")
        .await
        .map_err(|e| format!("Error writing package.json: {e}"))?;

    println!("package.json updated with qunitx config");
    Ok(())
}
