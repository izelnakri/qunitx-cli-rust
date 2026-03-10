# cargo-chef is pre-installed in this image — no source compilation needed.
# 0.1.75-rust-alpine3.23 is an immutable tag (pinned cargo-chef + Alpine version)
# so the chef and deps layers are never invalidated by a base image update.
# Bump the tag deliberately when upgrading Rust or cargo-chef.
FROM lukemathwalker/cargo-chef:0.1.75-rust-alpine3.23 AS chef
WORKDIR /app

# Planner: fast — inspects Cargo.toml/Cargo.lock and emits recipe.json.
FROM chef AS planner
COPY . .
RUN cargo chef prepare --recipe-path recipe.json

# Builder stage 1 — dependencies only.
# Cached until recipe.json changes (i.e. Cargo.lock / Cargo.toml change).
# LTO and codegen-units are overridden here: fat LTO + CU=1 cannot be
# layer-cached and would add 3+ min of link time on every push.
FROM chef AS builder
COPY --from=planner /app/recipe.json recipe.json
RUN CARGO_PROFILE_RELEASE_LTO=thin \
    CARGO_PROFILE_RELEASE_CODEGEN_UNITS=16 \
    cargo chef cook --release --recipe-path recipe.json

# Builder stage 2 — qunitx source only (~20-30 s on every push).
COPY . .
RUN CARGO_PROFILE_RELEASE_LTO=thin \
    CARGO_PROFILE_RELEASE_CODEGEN_UNITS=16 \
    cargo build --release

# Runtime base: Chromium for headless browser tests + esbuild for bundling.
# npm install -g esbuild downloads the correct platform binary (musl-aware).
FROM alpine:latest AS runtime
RUN apk add --no-cache chromium nodejs npm \
 && npm install -g esbuild \
 && rm -rf /root/.npm

# Pre-built stage: copies an already-compiled musl binary from the build context.
# Used by both ci.yml and release.yml (--target prebuilt) to skip all compilation.
# Local full build: `docker build .` uses the default stage below instead.
FROM runtime AS prebuilt
COPY qunitx /usr/local/bin/qunitx
ENTRYPOINT ["qunitx"]

# Default stage: compiled from source via the builder above (local docker build).
FROM runtime
COPY --from=builder /app/target/release/qunitx /usr/local/bin/qunitx
ENTRYPOINT ["qunitx"]
