# qunitx demo — full tutorial
# Run via: make demo

Output demo/demo.gif

Set Shell bash
Set FontSize 15
Set Width 900
Set Height 600
Set Theme "Dracula"
Set Padding 20
Set Framerate 24
Set TypingSpeed 45ms

Env FORCE_COLOR "1"
Env PS1 "\033[1;34m[qunitx]\033[0m $ "

# ── 1. Inspect the test file ──────────────────────────────────────────────────
Type "# 1/7  TypeScript test file — no tsconfig needed"
Enter
Sleep 400ms
Type "cat demo/example-test.ts"
Enter
Sleep 4000ms

# ── 2. Run tests — all green, concurrent across CPU cores ────────────────────
Type "# 2/7  Run tests — concurrent across all CPU cores"
Enter
Sleep 400ms
Type "qunitx demo/example-test.ts"
Enter
Sleep 8000ms

# ── 3. --debug: pipe Chrome's console.log to your terminal ───────────────────
Type "# 3/7  --debug: print server URL + pipe Chrome console output"
Enter
Sleep 400ms
Type "qunitx demo/example-test.ts --debug"
Enter
Sleep 8000ms

# ── 4. --failFast: stop immediately on the first failure ─────────────────────
Type "# 4/7  --failFast: stop on the first failure"
Enter
Sleep 400ms
Type "qunitx demo/failing-test.ts --failFast"
Enter
Sleep 7000ms

# ── 5. TAP output — full failure details with YAML diagnostics ───────────────
Type "# 5/7  Full TAP output — failure YAML with actual/expected/stack"
Enter
Sleep 400ms
Type "qunitx demo/failing-test.ts"
Enter
Sleep 7000ms

# ── 6. --watch: stay alive, re-run on every file save ────────────────────────
Type "# 6/7  --watch: re-run on every file save"
Enter
Sleep 400ms
Type "qunitx demo/example-test.ts --watch"
Enter
Sleep 6000ms

# Simulate typing the keyboard shortcuts without leaving watch mode
Type "qa"
Enter
Sleep 5000ms
Type "ql"
Enter
Sleep 5000ms

# ── 7. Quit watch mode with qq ────────────────────────────────────────────────
Type "# 7/7  qq to quit watch mode"
Enter
Sleep 400ms
Type "qq"
Enter
Sleep 2000ms
