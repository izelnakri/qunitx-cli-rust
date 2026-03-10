use std::path::{Path, PathBuf};

pub enum Command {
    Help,
    Init,
    Generate,
    Run,
}

#[allow(dead_code)]
pub struct Config {
    pub command: Command,
    pub project_root: PathBuf,
    pub output: String,
    pub timeout_ms: u64,
    pub fail_fast: bool,
    pub watch: bool,
    pub base_port: u16,
    pub debug: bool,
    pub inputs: Vec<String>,
    pub html_paths: Vec<PathBuf>,
    pub before: Option<String>,
    pub after: Option<String>,
    pub test_files: Vec<PathBuf>,
}

impl Config {
    pub fn output_dir(&self) -> PathBuf {
        self.project_root.join(&self.output)
    }

    pub fn from_args() -> Result<Self, String> {
        let args: Vec<String> = std::env::args().skip(1).collect();

        if args.is_empty()
            || args
                .iter()
                .any(|a| matches!(a.as_str(), "help" | "h" | "p" | "print" | "-h" | "--help"))
        {
            return Ok(Self::simple(Command::Help));
        }

        match args[0].as_str() {
            "init" => return Ok(Self::simple(Command::Init)),
            "new" | "n" | "g" | "generate" => return Ok(Self::simple(Command::Generate)),
            _ => {}
        }

        let project_root = find_project_root(
            std::env::current_dir().map_err(|e| format!("Couldn't get current dir: {e}"))?,
        )
        .ok_or("Couldn't find project's package.json")?;

        let pkg = read_pkg_config(&project_root)?;
        let cli = CliArgs::parse(&args);

        let mut inputs = cli.inputs.clone();
        if let Some(pkg_inputs) = pkg.inputs {
            inputs.extend(pkg_inputs);
        }

        let html_paths: Vec<PathBuf> = pkg
            .html_paths
            .unwrap_or_default()
            .into_iter()
            .map(|p| project_root.join(p))
            .collect();

        let test_files = crate::discover::find_test_files(&inputs, &project_root);
        if test_files.is_empty() {
            return Err(format!("No test files found for inputs: {inputs:?}"));
        }

        Ok(Config {
            command: Command::Run,
            output: cli.output.or(pkg.output).unwrap_or_else(|| "tmp".into()),
            timeout_ms: cli.timeout.or(pkg.timeout).unwrap_or(20000),
            fail_fast: cli.fail_fast || pkg.fail_fast.unwrap_or(false),
            watch: cli.watch || pkg.watch.unwrap_or(false),
            base_port: cli.port.or(pkg.port).unwrap_or(1234),
            debug: cli.debug,
            before: cli.before.or(pkg.before),
            after: cli.after.or(pkg.after),
            inputs,
            html_paths,
            test_files,
            project_root,
        })
    }

    fn simple(command: Command) -> Self {
        Config {
            command,
            project_root: std::env::current_dir()
                .ok()
                .and_then(find_project_root)
                .unwrap_or_default(),
            output: "tmp".into(),
            timeout_ms: 20000,
            fail_fast: false,
            watch: false,
            base_port: 1234,
            debug: false,
            inputs: vec![],
            html_paths: vec![],
            before: None,
            after: None,
            test_files: vec![],
        }
    }
}

// ── CLI arg parsing ──────────────────────────────────────────────────────────

#[derive(Default)]
struct CliArgs {
    debug: bool,
    timeout: Option<u64>,
    output: Option<String>,
    fail_fast: bool,
    watch: bool,
    port: Option<u16>,
    before: Option<String>,
    after: Option<String>,
    inputs: Vec<String>,
}

impl CliArgs {
    fn parse(args: &[String]) -> Self {
        let mut a = CliArgs::default();
        for arg in args {
            if arg == "--debug" {
                a.debug = true;
            } else if arg == "--watch" || arg == "-w" {
                a.watch = true;
            } else if arg == "--failFast" || arg == "--fail-fast" {
                a.fail_fast = true;
            } else if let Some(v) = arg.strip_prefix("--timeout=") {
                a.timeout = v.parse().ok();
            } else if let Some(v) = arg.strip_prefix("--output=") {
                a.output = Some(v.into());
            } else if let Some(v) = arg.strip_prefix("--port=") {
                a.port = v.parse().ok();
            } else if let Some(v) = arg.strip_prefix("--before=") {
                a.before = Some(v.into());
            } else if let Some(v) = arg.strip_prefix("--after=") {
                a.after = Some(v.into());
            } else if !arg.starts_with("--") {
                a.inputs.push(arg.clone());
            }
        }
        a
    }
}

// ── package.json config ──────────────────────────────────────────────────────

#[derive(Default, serde::Deserialize)]
#[serde(rename_all = "camelCase", default)]
struct PkgQunitxConfig {
    output: Option<String>,
    timeout: Option<u64>,
    fail_fast: Option<bool>,
    watch: Option<bool>,
    port: Option<u16>,
    html_paths: Option<Vec<String>>,
    inputs: Option<Vec<String>>,
    before: Option<String>,
    after: Option<String>,
}

fn read_pkg_config(project_root: &Path) -> Result<PkgQunitxConfig, String> {
    let content = std::fs::read_to_string(project_root.join("package.json"))
        .map_err(|e| format!("Failed to read package.json: {e}"))?;
    let json: serde_json::Value =
        serde_json::from_str(&content).map_err(|e| format!("Invalid package.json: {e}"))?;

    match json.get("qunitx") {
        Some(v) => serde_json::from_value(v.clone())
            .map_err(|e| format!("Invalid qunitx config in package.json: {e}")),
        None => Ok(PkgQunitxConfig::default()),
    }
}

pub fn find_project_root(start: PathBuf) -> Option<PathBuf> {
    let mut dir = start;
    loop {
        if dir.join("package.json").exists() {
            return Some(dir);
        }
        if !dir.pop() {
            return None;
        }
    }
}
