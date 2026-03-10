use tokio::process::{Child, Command};

const CANDIDATES: &[&str] = &[
    "google-chrome-stable",
    "google-chrome",
    "chromium",
    "chromium-browser",
];

/// Return the path to a usable Chrome/Chromium binary, or `None` if not found.
pub async fn find_chrome() -> Option<String> {
    if let Ok(bin) = std::env::var("CHROME_BIN") {
        return Some(bin);
    }
    for name in CANDIDATES {
        if let Ok(out) = Command::new("which").arg(name).output().await {
            if out.status.success() {
                let path = String::from_utf8_lossy(&out.stdout).trim().to_owned();
                if !path.is_empty() {
                    return Some(path);
                }
            }
        }
    }
    None
}

/// Launch a headless Chrome process pointing at `url`.
pub fn spawn_chrome(chrome: &str, url: &str, debug: bool) -> std::io::Result<Child> {
    let stdio = || {
        if debug {
            std::process::Stdio::inherit()
        } else {
            std::process::Stdio::null()
        }
    };

    Command::new(chrome)
        .args([
            "--headless",
            "--no-sandbox",
            "--disable-gpu",
            // Prevents crashes on systems with limited /dev/shm (Docker, CI, etc.).
            "--disable-dev-shm-usage",
            // Suppress first-run UI and telemetry that can delay startup.
            "--no-first-run",
            "--disable-extensions",
            "--disable-default-apps",
            "--disable-background-networking",
            "--disable-sync",
            "--metrics-recording-only",
            "--mute-audio",
            "--window-size=1440,900",
            url,
        ])
        .stdout(stdio())
        .stderr(stdio())
        .spawn()
}
