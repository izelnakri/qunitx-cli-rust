#!/usr/bin/env node
import { spawn } from 'child_process';

const isWindows = process.platform === 'win32';
const binPath   = new URL(isWindows ? 'qunitx.exe' : 'qunitx', import.meta.url).pathname;

const child = spawn(binPath, process.argv.slice(2), { stdio: 'inherit' });

child.on('close', (code) => process.exit(code ?? 1));
child.on('error', (err) => {
  console.error(`[qunitx] failed to start: ${err.message}`);
  console.error('[qunitx] try reinstalling: npm install qunitx-cli-rust');
  process.exit(1);
});
