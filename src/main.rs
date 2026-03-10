mod browser;
mod bundler;
mod config;
mod discover;
mod generate;
mod init;
mod runner;
mod server;
mod tap;

use config::{Command, Config};

#[tokio::main]
async fn main() {
    let config = match Config::from_args() {
        Ok(c) => c,
        Err(e) => {
            eprintln!("Error: {e}");
            std::process::exit(1);
        }
    };

    let exit_code = match config.command {
        Command::Help => { print_help(); 0 }
        Command::Init => init::run().await,
        Command::Generate => generate::run().await,
        Command::Run => runner::run(config).await,
    };

    std::process::exit(exit_code);
}

fn print_help() {
    println!("qunitx — Fast QUnit/QUnitX browser test runner");
    println!();
    println!("USAGE:");
    println!("  qunitx [COMMAND] [OPTIONS] [FILES/FOLDERS/GLOBS...]");
    println!();
    println!("COMMANDS:");
    println!("  init               Bootstrap test/tests.html, tsconfig.json, and package.json qunitx config");
    println!("  new <file>         Generate a test file with boilerplate  (aliases: generate, g, n)");
    println!("  help               Show this help message");
    println!();
    println!("OPTIONS:");
    println!("  --watch, -w        Re-run tests on file changes (keeps Chrome open)");
    println!("  --debug            Show browser console output and server diagnostics");
    println!("  --timeout=<ms>     Test timeout in ms (default: 20000)");
    println!("  --output=<dir>     Bundle output directory (default: tmp)");
    println!("  --failFast         Stop after first failing test");
    println!("  --port=<n>         HTTP server port (default: 1234, OS-assigned in concurrent mode)");
    println!("  --before=<file>    Run Node.js script before tests");
    println!("  --after=<file>     Run Node.js script after tests");
    println!();
    println!("WATCH SHORTCUTS:");
    println!("  qq   Abort current test run");
    println!("  qa   Run all tests again");
    println!("  qf   Run last failing test files");
    println!("  ql   Repeat last test run");
    println!();
    println!("EXAMPLES:");
    println!("  qunitx test/");
    println!("  qunitx test/**/*.ts --failFast");
    println!("  qunitx --watch test/");
    println!("  qunitx init");
    println!("  qunitx new test/checkout-test.ts");
    println!();
    println!("CONFIG (package.json `qunitx` field):");
    println!("  {{ \"inputs\": [\"test/\"], \"timeout\": 20000, \"failFast\": false, \"port\": 1234 }}");
}
