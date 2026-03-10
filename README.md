# qunitx

[![CI](https://github.com/izelnakri/qunitx-cli-rust/actions/workflows/ci.yml/badge.svg)](https://github.com/izelnakri/qunitx-cli-rust/actions/workflows/ci.yml)
[![Crates.io](https://img.shields.io/crates/v/qunitx)](https://crates.io/crates/qunitx)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

Browser-based test runner for [QUnitX](https://github.com/izelnakri/qunitx) — bundles your JS/TS tests
with esbuild, runs them in headless Chrome, and streams TAP output to the terminal.

Single static binary. No Node.js, no npm, no runtime dependencies.

## Features

- Runs `.js` and `.ts` test files in headless Chrome (esbuild + WebSocket)
- TypeScript works with zero configuration — esbuild handles transpilation
- Inline source maps for accurate stack traces pointing to original source files
- Streams TAP-formatted output to the terminal in real time
- Concurrent mode (default) splits test files across all CPU cores for fast parallel runs
- `--watch` mode re-runs affected tests on file change, with keyboard shortcuts
- `--failFast` stops the run after the first failing test
- `--debug` prints server diagnostics and pipes browser console to stdout
- `--before` / `--after` hook scripts for server setup and teardown
- `--timeout` controls the maximum ms to wait for the full suite to finish

## Installation

### cargo-binstall (recommended — downloads pre-built binary)

```sh
cargo binstall qunitx
```

### Pre-built binary

Download the latest release for your platform from the
[releases page](https://github.com/izelnakri/qunitx-cli-rust/releases).

### Nix

```sh
nix profile install github:izelnakri/qunitx-cli-rust
```

### Build from source

```sh
cargo install --git https://github.com/izelnakri/qunitx-cli-rust
```

## Usage

```sh
# Single file
qunitx test/my-test.js

# Multiple files / globs
qunitx test/**/*.js test/**/*.ts

# TypeScript — no tsconfig required
qunitx test/my-test.ts

# Watch mode: re-run on file changes
qunitx test/**/*.js --watch

# Stop on the first failure
qunitx test/**/*.js --failFast

# Print the server URL and pipe Chrome console to stdout
qunitx test/**/*.js --debug

# Custom timeout (ms)
qunitx test/**/*.js --timeout=30000

# Run a setup script before tests (Node.js, can be async)
qunitx test/**/*.js --before=scripts/start-server.js

# Run a teardown script after tests (Node.js, can be async)
qunitx test/**/*.js --after=scripts/stop-server.js
```

### Watch mode shortcuts

While in `--watch` mode, type a command and press Enter:

| Command | Action |
|---------|--------|
| `qa` | Run all tests |
| `qf` | Run last failing test files |
| `ql` | Repeat last run |
| `qq` | Quit watch mode |

## Writing Tests

qunitx runs [QUnitX](https://github.com/izelnakri/qunitx) tests — a superset of QUnit with async
hooks, concurrency control, and test metadata.

Migrating from QUnit? Change a single import:

```js
// before
import { module, test } from 'qunit';
// after
import { module, test } from 'qunitx';
```

Example test file — ES modules, npm imports, and nested modules all work out of the box:

```js
// some-test.js (TypeScript also supported)
import { module, test } from 'qunitx';

module('Basic sanity check', (hooks) => {
  test('it works', (assert) => {
    assert.equal(true, true);
  });

  module('More advanced cases', (hooks) => {
    test('deepEqual works', (assert) => {
      assert.deepEqual({ username: 'izelnakri' }, { username: 'izelnakri' });
    });
  });
});
```

## CLI Reference

```
Usage: qunitx [COMMAND] [OPTIONS] [FILES/FOLDERS/GLOBS...]

Commands:
  init               Bootstrap test/tests.html, tsconfig.json, and package.json qunitx config
  new <file>         Generate a test file with boilerplate  (aliases: generate, g, n)
  help               Show this help message

Options:
  --watch, -w        Re-run tests on file changes (keeps Chrome open)
  --debug            Show browser console output and server diagnostics
  --timeout=<ms>     Test timeout in ms                        [default: 20000]
  --output=<dir>     Bundle output directory                   [default: tmp]
  --failFast         Stop after first failing test
  --port=<n>         HTTP server port (OS-assigned in concurrent mode)
  --before=<file>    Run Node.js script before tests
  --after=<file>     Run Node.js script after tests
```

## Configuration

Place a `qunitx` key in your `package.json`:

```json
{
  "qunitx": {
    "inputs": ["test/"],
    "timeout": 20000,
    "failFast": false,
    "output": "tmp",
    "htmlPaths": ["test/tests.html"]
  }
}
```

## Development

```sh
make check                  # fmt check + clippy + tests (run before every commit)
make test                   # run tests only
make build                  # build debug binary
make release LEVEL=patch    # bump version, update CHANGELOG, tag, push
nix flake check             # run all CI checks (build, clippy, fmt, tests)
nix develop                 # enter dev shell (includes Node.js, Chromium, dev tools)
```

## License

MIT
