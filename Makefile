.DEFAULT_GOAL := help

LEVEL ?= patch

.PHONY: help fix check fmt test build doc demo release

help:
	@echo "Usage: make <target> [LEVEL=patch|minor|major]"
	@echo ""
	@echo "  fix      Auto-fix formatting and clippy lints"
	@echo "  check    Fmt check + clippy + tests (validation)"
	@echo "  fmt      Format source code"
	@echo "  test     Run all tests"
	@echo "  build    Build the project"
	@echo "  doc      Build and open API documentation"
	@echo "  demo     Re-record demo/demo.gif via VHS"
	@echo "  release  Preview changelog, confirm, then generate CHANGELOG and publish (LEVEL=patch)"

fix:
	cargo fmt
	cargo clippy --fix --allow-dirty --allow-staged --all-targets

check:
	cargo fmt -- --check
	cargo clippy --all-targets -- -D warnings
	@cargo nextest --version >/dev/null 2>&1 && cargo nextest run || cargo test

fmt:
	cargo fmt

test:
	@cargo nextest --version >/dev/null 2>&1 && cargo nextest run || cargo test

build:
	cargo build

doc:
	cargo doc --no-deps --open

demo:
	vhs demo/demo.tape

# Preview the changelog, confirm, then tag + publish.
# Requires git-cliff and cargo-release (available via `nix develop`).
release:
	@if [ -z "$$IN_NIX_SHELL" ]; then \
		echo "==> Entering nix develop (git-cliff, cargo-release)..."; \
		exec nix develop --command $(MAKE) release LEVEL=$(LEVEL); \
	fi
	$(MAKE) check
	@printf "\n=== Release Preview (level: $(LEVEL)) ===\n\n"
	@git-cliff --bump --unreleased 2>/dev/null || true
	@printf "\nProceed with $(LEVEL) release? [y/N] " > /dev/tty
	@read confirm < /dev/tty; \
	case "$$confirm" in \
		[yY]*) \
			cargo release $(LEVEL) --execute; \
			TAG=$$(git describe --tags --abbrev=0); \
			awk '/^## \[/{if(found) exit; found=1} found' CHANGELOG.md > /tmp/release-notes.md; \
			gh release create "$$TAG" --title "$$TAG" --notes-file /tmp/release-notes.md; \
			rm -f /tmp/release-notes.md \
		;; \
		*) printf "Aborted.\n"; exit 1 ;; \
	esac
