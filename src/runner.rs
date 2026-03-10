use std::{
    collections::HashSet,
    path::{Path, PathBuf},
    sync::Arc,
    time::Instant,
};
use tokio::sync::{broadcast, mpsc, oneshot, Mutex, RwLock};

use crate::{
    browser, bundler,
    config::Config,
    server::{self, GroupState},
    tap::{self, Counter},
};

pub async fn run(config: Config) -> i32 {
    // ── Find Chrome ──────────────────────────────────────────────────────────
    let chrome = match browser::find_chrome().await {
        Some(p) => p,
        None => {
            eprintln!(
                "Error: Chrome/Chromium not found. Install it or set CHROME_BIN env var.\n\
                 Tried: google-chrome-stable, google-chrome, chromium, chromium-browser"
            );
            return 1;
        }
    };

    if config.watch {
        return run_watch(config, chrome).await;
    }

    // ── Before hook ──────────────────────────────────────────────────────────
    if let Some(ref path) = config.before {
        if let Err(e) = run_hook(path).await {
            eprintln!("Before hook failed: {e}");
            return 1;
        }
    }

    // ── Split files into N groups (one per logical CPU) ───────────────────────
    let num_cpus = std::thread::available_parallelism()
        .map(|n| n.get())
        .unwrap_or(1);
    let num_groups = config.test_files.len().min(num_cpus);
    let groups = split_into_groups(&config.test_files, num_groups);

    // ── Shared TAP output channel ────────────────────────────────────────────
    let (tap_tx, mut tap_rx) = mpsc::unbounded_channel::<String>();
    let printer = tokio::spawn(async move {
        while let Some(line) = tap_rx.recv().await {
            println!("{line}");
        }
    });

    // ── Shared counter ───────────────────────────────────────────────────────
    let counter: Arc<Mutex<Counter>> = Arc::new(Mutex::new(Counter::default()));

    // ── Build all bundles concurrently ───────────────────────────────────────
    let output_base = config.output_dir();
    let build_start = Instant::now();

    let build_handles: Vec<_> = groups
        .iter()
        .enumerate()
        .map(|(i, files)| {
            let output_dir = group_output_dir(&output_base, i, num_groups);
            let files = files.clone();
            tokio::spawn(async move { bundler::build_bundle(&files, &output_dir).await })
        })
        .collect();

    let mut bundle_paths: Vec<PathBuf> = Vec::with_capacity(groups.len());
    for (i, handle) in build_handles.into_iter().enumerate() {
        match handle.await {
            Ok(Ok(bundle)) => bundle_paths.push(bundle),
            Ok(Err(e)) => {
                eprintln!("Bundle error (group {i}): {e}");
                return 1;
            }
            Err(e) => {
                eprintln!("Task panic (group {i}): {e}");
                return 1;
            }
        }
    }
    if config.debug {
        eprintln!(
            "# Bundled {} group(s) in {}ms",
            num_groups,
            build_start.elapsed().as_millis()
        );
    }

    // ── Load HTML template ───────────────────────────────────────────────────
    let html_template = load_html_template(&config).await;

    // ── Run all groups concurrently ──────────────────────────────────────────
    println!("TAP version 13");
    let run_start = Instant::now();
    let mut run_handles = Vec::with_capacity(groups.len());

    for (i, bundle_path) in bundle_paths.into_iter().enumerate() {
        let chrome = chrome.clone();
        let tap_tx = tap_tx.clone();
        let counter = Arc::clone(&counter);
        let html_template = html_template.clone();
        let output_dir = group_output_dir(&output_base, i, num_groups);
        let cfg = GroupRunConfig {
            timeout_ms: config.timeout_ms,
            fail_fast: config.fail_fast,
            debug: config.debug,
            project_root: config.project_root.clone(),
        };

        run_handles.push(tokio::spawn(async move {
            run_group(
                bundle_path,
                output_dir,
                html_template,
                chrome,
                tap_tx,
                counter,
                cfg,
            )
            .await
        }));
    }

    drop(tap_tx);

    let mut had_fatal = false;
    for handle in run_handles {
        match handle.await {
            Ok(Ok(())) => {}
            Ok(Err(e)) => {
                eprintln!("# Group error: {e}");
                had_fatal = true;
            }
            Err(e) => {
                eprintln!("# Task panic: {e}");
                had_fatal = true;
            }
        }
    }

    let _ = printer.await;

    let duration = run_start.elapsed().as_millis();
    let final_counter = counter.lock().await;
    tap::display_final_result(&final_counter, duration);

    // ── After hook ───────────────────────────────────────────────────────────
    if let Some(ref path) = config.after {
        if let Err(e) = run_hook(path).await {
            eprintln!("After hook failed: {e}");
            had_fatal = true;
        }
    }

    if final_counter.fail_count > 0 || had_fatal {
        1
    } else {
        0
    }
}

// ── Per-group runner ─────────────────────────────────────────────────────────

struct GroupRunConfig {
    timeout_ms: u64,
    fail_fast: bool,
    debug: bool,
    project_root: PathBuf,
}

async fn run_group(
    bundle_path: PathBuf,
    _output_dir: PathBuf,
    html_template: String,
    chrome: String,
    tap_tx: mpsc::UnboundedSender<String>,
    counter: Arc<Mutex<Counter>>,
    cfg: GroupRunConfig,
) -> Result<(), String> {
    let (acceptor, port) = server::bind().await?;
    let html = build_html(
        &html_template,
        port,
        cfg.timeout_ms,
        cfg.fail_fast,
        &bundle_path,
    )
    .await?;

    let (done_tx, done_rx) = oneshot::channel::<()>();
    let (broadcast_tx, _) = broadcast::channel::<String>(16);

    let state = Arc::new(GroupState {
        html: RwLock::new(html),
        bundle_path,
        project_root: cfg.project_root.clone(),
        done_tx: Mutex::new(Some(done_tx)),
        tap_tx,
        counter,
        debug: cfg.debug,
        broadcast_tx,
    });
    let shutdown_tx = server::serve(acceptor, state);

    let url = format!("http://127.0.0.1:{port}/");
    eprintln!("# qunitx: launching Chrome → {url}");

    let mut child = browser::spawn_chrome(&chrome, &url, cfg.debug)
        .map_err(|e| format!("Failed to launch Chrome: {e}"))?;

    let timeout_dur = tokio::time::Duration::from_millis(cfg.timeout_ms + 5000);
    let result = tokio::select! {
        res = done_rx => match res {
            Ok(()) => Ok(()),
            Err(_) => Err("Done channel closed unexpectedly".into()),
        },
        status = child.wait() => match status {
            Ok(s) => Err(format!(
                "Chrome exited with status {s} before tests completed.\n\
                 Try running with --debug to see browser output."
            )),
            Err(e) => Err(format!("Failed to wait for Chrome: {e}")),
        },
        _ = tokio::time::sleep(timeout_dur) => {
            Err(format!("Test suite timed out after {}ms", cfg.timeout_ms))
        }
    };

    let _ = child.kill().await;
    let _ = shutdown_tx.send(());
    result
}

// ── Watch mode ───────────────────────────────────────────────────────────────

async fn run_watch(config: Config, chrome_path: String) -> i32 {
    // Before hook runs once at start
    if let Some(ref path) = config.before {
        if let Err(e) = run_hook(path).await {
            eprintln!("Before hook failed: {e}");
            return 1;
        }
    }

    match run_watch_inner(&config, &chrome_path).await {
        Ok(exit_code) => {
            // After hook
            if let Some(ref path) = config.after {
                if let Err(e) = run_hook(path).await {
                    eprintln!("After hook failed: {e}");
                    return 1;
                }
            }
            exit_code
        }
        Err(e) => {
            eprintln!("# Watch mode error: {e}");
            1
        }
    }
}

async fn run_watch_inner(config: &Config, chrome_path: &str) -> Result<i32, String> {
    let output_dir = config.output_dir();
    let html_template = load_html_template(config).await;

    // ── Initial bundle ───────────────────────────────────────────────────────
    let bundle_path = bundler::build_bundle(&config.test_files, &output_dir).await?;

    // ── Bind server (stays alive for the whole session) ──────────────────────
    let (acceptor, port) = server::bind().await?;
    let html = build_html(
        &html_template,
        port,
        config.timeout_ms,
        config.fail_fast,
        &bundle_path,
    )
    .await?;

    // ── Shared channels ──────────────────────────────────────────────────────
    let (tap_tx, mut tap_rx) = mpsc::unbounded_channel::<String>();
    let _printer = tokio::spawn(async move {
        while let Some(line) = tap_rx.recv().await {
            println!("{line}");
        }
    });

    let counter: Arc<Mutex<Counter>> = Arc::new(Mutex::new(Counter::default()));
    let (broadcast_tx, _) = broadcast::channel::<String>(16);

    // ── First done channel ───────────────────────────────────────────────────
    let (done_tx, first_done_rx) = oneshot::channel::<()>();

    let state = Arc::new(GroupState {
        html: RwLock::new(html),
        bundle_path: bundle_path.clone(),
        project_root: config.project_root.clone(),
        done_tx: Mutex::new(Some(done_tx)),
        tap_tx: tap_tx.clone(),
        counter: Arc::clone(&counter),
        debug: config.debug,
        broadcast_tx: broadcast_tx.clone(),
    });

    let _shutdown_tx = server::serve(acceptor, Arc::clone(&state));

    // ── Launch Chrome (stays open for the session) ────────────────────────────
    let url = format!("http://127.0.0.1:{port}/");
    eprintln!("# qunitx: launching Chrome → {url}");
    let mut child = browser::spawn_chrome(chrome_path, &url, config.debug)
        .map_err(|e| format!("Failed to launch Chrome: {e}"))?;

    // ── File watcher ─────────────────────────────────────────────────────────
    let (file_tx, mut file_rx) = mpsc::unbounded_channel::<notify::Event>();
    let mut watcher = {
        let file_tx = file_tx.clone();
        notify::recommended_watcher(move |res: Result<notify::Event, notify::Error>| {
            if let Ok(event) = res {
                let _ = file_tx.send(event);
            }
        })
        .map_err(|e| format!("File watcher error: {e}"))?
    };

    use notify::Watcher;
    for path in derive_watch_paths(config) {
        if let Err(e) = watcher.watch(&path, notify::RecursiveMode::Recursive) {
            eprintln!("# Warning: couldn't watch {}: {e}", path.display());
        }
    }

    // ── Keyboard input (raw mode) ─────────────────────────────────────────────
    let (key_tx, mut key_rx) = mpsc::unbounded_channel::<String>();
    start_keyboard_watcher(key_tx);

    eprintln!("# Watching files... Browse tests at http://localhost:{port}");
    eprintln!("# Shortcuts: qq=abort  qa=run all  qf=run last failing  ql=repeat last");

    let mut current_done_rx = first_done_rx;
    let mut last_failed_files: Vec<PathBuf> = vec![];
    let mut last_trigger_files: Vec<PathBuf> = config.test_files.clone();
    let mut run_number = 0u32;

    loop {
        run_number += 1;
        let run_start = Instant::now();
        let timeout_dur = tokio::time::Duration::from_millis(config.timeout_ms + 5000);

        // ── Phase 1: wait for run to complete ────────────────────────────────
        let timed_out = tokio::select! {
            _ = current_done_rx => false,
            _ = tokio::time::sleep(timeout_dur) => {
                eprintln!("# Test suite timed out after {}ms", config.timeout_ms);
                true
            },
            status = child.wait() => {
                match status {
                    Ok(s) => eprintln!("# Chrome exited with status {s}"),
                    Err(e) => eprintln!("# Chrome wait error: {e}"),
                }
                return Ok(if counter.lock().await.fail_count > 0 { 1 } else { 0 });
            },
            _ = tokio::signal::ctrl_c() => {
                eprintln!("\n# Interrupted");
                let _ = child.kill().await;
                return Ok(0);
            },
        };

        // ── Phase 2: print per-run summary ───────────────────────────────────
        {
            let c = counter.lock().await;
            let duration = run_start.elapsed().as_millis();
            eprintln!(
                "# run {run_number}: {} tests, {} passed, {} failed, {} skipped ({duration}ms)",
                c.test_count, c.pass_count, c.fail_count, c.skip_count
            );
            if c.fail_count > 0 {
                last_failed_files = last_trigger_files.clone();
            }
            if timed_out && c.test_count == 0 {
                eprintln!("# No tests ran — check browser console with --debug");
            }
        }

        // ── Phase 3: wait for a trigger (file change / keyboard / Ctrl-C) ────
        let trigger_files = 'trigger: loop {
            let output_to_ignore = config.output_dir();
            tokio::select! {
                Some(event) = file_rx.recv() => {
                    if should_trigger(&event, &output_to_ignore) {
                        print_change_banner(&event, &config.project_root);
                        break 'trigger config.test_files.clone();
                    }
                }
                Some(cmd) = key_rx.recv() => {
                    match cmd.as_str() {
                        "qq" => {
                            eprintln!("# Aborting watch mode");
                            let _ = child.kill().await;
                            return Ok(0);
                        }
                        "qa" => break 'trigger config.test_files.clone(),
                        "qf" => break 'trigger if last_failed_files.is_empty() {
                            eprintln!("# No failures recorded — repeating last run");
                            last_trigger_files.clone()
                        } else {
                            last_failed_files.clone()
                        },
                        "ql" => break 'trigger last_trigger_files.clone(),
                        _ => {}
                    }
                }
                _ = tokio::signal::ctrl_c() => {
                    eprintln!("\n# Interrupted");
                    let _ = child.kill().await;
                    return Ok(0);
                }
            }
        };

        last_trigger_files = trigger_files.clone();

        // ── Debounce: drain any stale file events queued during this run ──────
        // Editors emit 2-4 events per save (write, metadata, close, …).
        // A short pause lets them all arrive, then we discard them so they
        // don't each trigger their own re-run.
        tokio::time::sleep(tokio::time::Duration::from_millis(50)).await;
        while file_rx.try_recv().is_ok() {}

        // ── Phase 4: rebuild bundle ───────────────────────────────────────────
        match bundler::build_bundle(&trigger_files, &output_dir).await {
            Ok(new_bundle) => {
                match build_html(
                    &html_template,
                    port,
                    config.timeout_ms,
                    config.fail_fast,
                    &new_bundle,
                )
                .await
                {
                    Ok(new_html) => *state.html.write().await = new_html,
                    Err(e) => eprintln!("# HTML build error: {e}"),
                }
            }
            Err(e) => eprintln!("# Bundle error: {e}"),
        }

        // ── Phase 5: arm new done channel and refresh browser ─────────────────
        let (new_done_tx, new_done_rx) = oneshot::channel::<()>();
        *state.done_tx.lock().await = Some(new_done_tx);
        *counter.lock().await = Counter::default();
        current_done_rx = new_done_rx;

        broadcast_tx.send("refresh".into()).ok();
    }
}

// ── Watch helpers ─────────────────────────────────────────────────────────────

fn derive_watch_paths(config: &Config) -> Vec<PathBuf> {
    let mut dirs: HashSet<PathBuf> = HashSet::new();
    for file in &config.test_files {
        // Walk up until we find one of the input dirs (or use the immediate parent)
        if let Some(parent) = file.parent() {
            dirs.insert(parent.to_path_buf());
        }
    }
    // Also include any input paths that are directories themselves
    for input in &config.inputs {
        let candidate = config.project_root.join(input);
        if candidate.is_dir() {
            dirs.insert(candidate);
        } else {
            // Strip glob portion: take the longest existing-directory prefix
            let mut p = Path::new(input);
            loop {
                let full = config.project_root.join(p);
                if full.is_dir() {
                    dirs.insert(full);
                    break;
                }
                match p.parent() {
                    Some(parent) if parent != p => p = parent,
                    _ => break,
                }
            }
        }
    }
    if dirs.is_empty() {
        dirs.insert(config.project_root.clone());
    }
    dirs.into_iter().collect()
}

pub fn should_trigger(event: &notify::Event, output_dir: &Path) -> bool {
    use notify::event::EventKind;
    matches!(
        event.kind,
        EventKind::Create(_) | EventKind::Modify(_) | EventKind::Remove(_)
    ) && event.paths.iter().any(|p| {
        let ext = p.extension().and_then(|e| e.to_str()).unwrap_or("");
        matches!(ext, "js" | "ts") && !p.starts_with(output_dir)
    })
}

fn print_change_banner(event: &notify::Event, project_root: &Path) {
    use notify::event::EventKind;
    let label = match event.kind {
        EventKind::Create(_) => "ADDED",
        EventKind::Remove(_) => "REMOVED",
        _ => "CHANGED",
    };
    let path_str = event
        .paths
        .first()
        .and_then(|p| p.strip_prefix(project_root).ok())
        .map(|p| p.display().to_string())
        .unwrap_or_default();
    eprintln!("# ================================================================");
    eprintln!("# {label}: {path_str}");
    eprintln!("# ================================================================");
}

fn start_keyboard_watcher(tx: mpsc::UnboundedSender<String>) {
    // Read stdin line-by-line (cooked mode) so raw mode never interferes with
    // stdout formatting or Ctrl-C signal delivery. Users type the command and
    // press Enter: "qq", "qa", "qf", or "ql".
    tokio::spawn(async move {
        use tokio::io::{AsyncBufReadExt, BufReader};
        let mut reader = BufReader::new(tokio::io::stdin());
        let mut line = String::new();
        loop {
            line.clear();
            match reader.read_line(&mut line).await {
                Ok(0) | Err(_) => break,
                Ok(_) => {
                    let cmd = line.trim().to_string();
                    if !cmd.is_empty() && tx.send(cmd).is_err() {
                        break;
                    }
                }
            }
        }
    });
}

// ── HTML generation ──────────────────────────────────────────────────────────

pub const DEFAULT_HTML: &str = r#"<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>QUnitX Tests</title>
    <link rel="stylesheet" href="../node_modules/qunitx/vendor/qunit.css">
  </head>
  <body>
    <div id="qunit"></div>
    <div id="qunit-fixture"></div>
    {{content}}
  </body>
</html>
"#;

const RUNTIME_TEMPLATE: &str = r#"<script>
  window.IS_PUPPETEER = true;
  window.testTimeout = 0;
  setInterval(function() { window.testTimeout += 1000; }, 1000);

  (function() {
    var wsRetryCount = 0;
    var WS_MAX_RETRIES = 50;

    function setupWebSocket() {
      try {
        window.socket = new WebSocket('ws://127.0.0.1:__QUNITX_PORT__/ws');
      } catch (err) {
        console.log(err);
        retryOrFail();
        return;
      }
      window.socket.addEventListener('open', function() { setupQUnit(); });
      window.socket.addEventListener('error', function() { retryOrFail(); });
      window.socket.addEventListener('message', function(e) {
        if (e.data === 'abort') {
          window.abortQUnit = true;
          window.QUnit.config.queue.length = 0;
          window.socket.send(JSON.stringify({ event: 'abort' }));
        } else if (e.data === 'refresh') {
          window.location.reload();
        }
      });
    }

    function retryOrFail() {
      wsRetryCount++;
      if (wsRetryCount > WS_MAX_RETRIES) {
        console.log('WebSocket connection failed after ' + WS_MAX_RETRIES + ' retries');
        window.testTimeout = __QUNITX_TIMEOUT__;
        return;
      }
      window.setTimeout(setupWebSocket, 10);
    }

    setupWebSocket();
  })();

__QUNITX_BUNDLE__

  function getCircularReplacer() {
    var seen = [];
    return function(key, value) {
      if (typeof value !== 'object' || value === null) { return value; }
      if (seen.indexOf(value) !== -1) { return '[Circular]'; }
      seen.push(value);
      return value;
    };
  }

  function setupQUnit() {
    window.QUNIT_RESULT = { totalTests: 0, finishedTests: 0, currentTest: '' };
    if (!window.QUnit) {
      console.log('QUnit not found after WebSocket connected');
      window.testTimeout = __QUNITX_TIMEOUT__;
      return;
    }

    window.QUnit.begin(function() {
      window.socket.send(JSON.stringify({ event: 'connection' }));
    });
    window.QUnit.moduleStart(function(details) {
      window.socket.send(JSON.stringify({ event: 'moduleStart', details: details }, getCircularReplacer()));
    });
    window.QUnit.on('testStart', function(details) {
      window.QUNIT_RESULT.totalTests++;
      window.QUNIT_RESULT.currentTest = details.fullName.join(' | ');
    });
    window.QUnit.on('testEnd', function(details) {
      window.testTimeout = 0;
      window.QUNIT_RESULT.finishedTests++;
      window.QUNIT_RESULT.currentTest = null;
      var sanitized = {
        fullName: details.fullName,
        name: details.name,
        status: details.status,
        runtime: details.runtime,
        assertions: (details.assertions || []).map(function(a) {
          return {
            passed: a.passed,
            actual: a.actual,
            expected: a.expected,
            message: a.message,
            stack: a.stack,
            todo: a.todo
          };
        })
      };
      window.socket.send(JSON.stringify(
        { event: 'testEnd', details: sanitized, abort: window.abortQUnit },
        getCircularReplacer()
      ));
      if (__QUNITX_FAIL_FAST__ && details.status === 'failed') {
        window.QUnit.config.queue.length = 0;
      }
    });
    window.QUnit.done(function(details) {
      window.setTimeout(function() {
        window.socket.send(JSON.stringify(
          { event: 'done', details: details, abort: window.abortQUnit },
          getCircularReplacer()
        ));
      }, 50);
      window.setTimeout(function() {
        window.testTimeout = __QUNITX_TIMEOUT__;
      }, 75);
    });

    window.setTimeout(function() { window.QUnit.start(); }, 25);
  }
</script>"#;

pub async fn load_html_template(config: &Config) -> String {
    for path in &config.html_paths {
        if let Ok(content) = tokio::fs::read_to_string(path).await {
            if content.contains("{{content}}") {
                return rewrite_asset_paths(
                    &content,
                    path.parent().unwrap_or(&config.project_root),
                    &config.project_root,
                );
            }
        }
    }
    DEFAULT_HTML.to_owned()
}

pub async fn build_html(
    template: &str,
    port: u16,
    timeout_ms: u64,
    fail_fast: bool,
    bundle_path: &Path,
) -> Result<String, String> {
    let bundle_content = tokio::fs::read_to_string(bundle_path)
        .await
        .map_err(|e| format!("Failed to read bundle: {e}"))?;

    let escaped_bundle = bundle_content.replace("</script>", r"<\/script>");

    let runtime = RUNTIME_TEMPLATE
        .replace("__QUNITX_PORT__", &port.to_string())
        .replace("__QUNITX_TIMEOUT__", &timeout_ms.to_string())
        .replace(
            "__QUNITX_FAIL_FAST__",
            if fail_fast { "true" } else { "false" },
        )
        .replace("__QUNITX_BUNDLE__", &escaped_bundle);

    Ok(template
        .replace("{{content}}", &runtime)
        .replace("{{applicationName}}", "QUnitX"))
}

pub fn rewrite_asset_paths(html: &str, html_dir: &Path, project_root: &Path) -> String {
    let mut result = html.to_owned();
    for attr_prefix in &[r#"href=""#, r#"src=""#] {
        let mut offset = 0;
        loop {
            let Some(found) = result[offset..].find(attr_prefix) else {
                break;
            };
            let val_start = offset + found + attr_prefix.len();
            let Some(val_end_rel) = result[val_start..].find('"') else {
                break;
            };
            let val = result[val_start..val_start + val_end_rel].to_owned();

            if val.starts_with("http://")
                || val.starts_with("https://")
                || val.starts_with("//")
                || val.starts_with('/')
                || val.is_empty()
            {
                offset = val_start + val_end_rel + 1;
                continue;
            }

            let abs = normalize_path(&html_dir.join(&val));
            if let Ok(rel) = abs.strip_prefix(project_root) {
                let new_val = format!("/{}", rel.display());
                let old = format!("{attr_prefix}{val}\"");
                let new = format!("{attr_prefix}{new_val}\"");
                result = result.replacen(&old, &new, 1);
                offset = val_start + new_val.len() + 1;
            } else {
                offset = val_start + val_end_rel + 1;
            }
        }
    }
    result
}

pub fn normalize_path(path: &Path) -> PathBuf {
    let mut out = PathBuf::new();
    for c in path.components() {
        match c {
            std::path::Component::ParentDir => {
                out.pop();
            }
            std::path::Component::CurDir => {}
            other => out.push(other),
        }
    }
    out
}

// ── Group helpers ────────────────────────────────────────────────────────────

pub fn split_into_groups(files: &[PathBuf], n: usize) -> Vec<Vec<PathBuf>> {
    let mut groups: Vec<Vec<PathBuf>> = (0..n).map(|_| Vec::new()).collect();
    for (i, file) in files.iter().enumerate() {
        groups[i % n].push(file.clone());
    }
    groups.retain(|g| !g.is_empty());
    groups
}

pub fn group_output_dir(base: &Path, index: usize, total: usize) -> PathBuf {
    if total == 1 {
        base.to_path_buf()
    } else {
        base.join(format!("group-{index}"))
    }
}

async fn run_hook(path: &str) -> Result<(), String> {
    let status = tokio::process::Command::new("node")
        .arg(path)
        .status()
        .await
        .map_err(|e| format!("Failed to run hook {path}: {e}"))?;

    if status.success() {
        Ok(())
    } else {
        Err(format!("Hook {path} exited with status {status}"))
    }
}
