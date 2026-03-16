#!/usr/bin/env node
// Postinstall script — downloads the correct pre-built qunitx binary from
// GitHub Releases and places it in bin/.  Runs automatically on `npm install`.
//
// Non-fatal: any failure prints a helpful message and exits 0 so it never
// blocks the install.  Alternative install paths:
//   cargo binstall qunitx
//   cargo install qunitx

import os from 'os';
import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { version: VERSION } = require('./package.json');
const REPO = 'izelnakri/qunitx-cli-rust';

// Maps `${process.platform}-${os.arch()}` to the GitHub release asset name.
const TARGETS = {
  'linux-x64':    { target: 'x86_64-unknown-linux-gnu',   ext: 'tar.gz' },
  'linux-arm64':  { target: 'aarch64-unknown-linux-musl',  ext: 'tar.gz' },
  'darwin-arm64': { target: 'aarch64-apple-darwin',        ext: 'tar.gz' },
  'darwin-x64':   { target: 'x86_64-apple-darwin',         ext: 'tar.gz' },
  'win32-x64':    { target: 'x86_64-pc-windows-msvc',      ext: 'zip'    },
};

const isWindows   = process.platform === 'win32';
const platformKey = `${process.platform}-${os.arch()}`;
const entry       = TARGETS[platformKey];

const binDir  = path.dirname(new URL('bin/qunitx', import.meta.url).pathname);
const binName = isWindows ? 'qunitx.exe' : 'qunitx';
const binDest = path.join(binDir, binName);

function fail(msg) {
  console.warn(`\n[qunitx] ${msg}`);
  console.warn('[qunitx] install manually:  cargo binstall qunitx  or  cargo install qunitx\n');
  process.exit(0); // non-fatal
}

function extract(archivePath, destDir) {
  const [cmd, args] = entry.ext === 'tar.gz'
    ? ['tar', ['xzf', archivePath, '-C', destDir, binName]]
    : ['powershell', ['-NoProfile', '-Command', `Expand-Archive -Path '${archivePath}' -DestinationPath '${destDir}' -Force`]];

  return new Promise((resolve, reject) => {
    spawn(cmd, args, { stdio: 'inherit' })
      .on('close', (code) => code === 0 ? resolve() : reject(new Error(`${cmd} exited with code ${code}`)))
      .on('error', reject);
  });
}

if (!entry) fail(`no pre-built binary for platform "${platformKey}".`);
if (await fs.promises.access(binDest).then(() => true, () => false)) process.exit(0);

await fs.promises.mkdir(binDir, { recursive: true });

const archive     = `qunitx-${entry.target}.${entry.ext}`;
const downloadUrl = `https://github.com/${REPO}/releases/download/v${VERSION}/${archive}`;
const tmpPath     = path.join(os.tmpdir(), archive);

console.log(`[qunitx] downloading ${downloadUrl}`);

try {
  const res = await fetch(downloadUrl);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);

  await fs.promises.writeFile(tmpPath, Buffer.from(await res.arrayBuffer()));
  await extract(tmpPath, binDir);

  if (!isWindows) await fs.promises.chmod(binDest, 0o755);
  await fs.promises.rm(tmpPath, { force: true });

  console.log(`[qunitx] ready → ${binDest}`);
} catch (err) {
  fail(`download/extract failed: ${err.message}`);
}
