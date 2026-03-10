{
  description = "Fast QUnit/QUnitX browser test runner";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
    crane.url = "github:ipetkov/crane";
    rust-overlay = {
      url = "github:oxalica/rust-overlay";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs = { self, nixpkgs, flake-utils, crane, rust-overlay }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        overlays = [ (import rust-overlay) ];
        pkgs = import nixpkgs { inherit system overlays; };

        # Pin to the exact version declared in rust-toolchain.toml — same as CI.
        # Dev shell adds rust-src + rust-analyzer on top for IDE support.
        rustToolchain = (pkgs.rust-bin.fromRustupToolchainFile ./rust-toolchain.toml).override {
          extensions = [ "rust-src" "rust-analyzer" ];
        };

        craneLib = (crane.mkLib pkgs).overrideToolchain rustToolchain;

        src = craneLib.cleanCargoSource ./.;

        commonArgs = {
          inherit src;
          strictDeps = true;
        };

        # Build dependencies only — cached separately from source changes.
        cargoArtifacts = craneLib.buildDepsOnly commonArgs;

        # Build-only package: tests live in checks.tests below and still run
        # on `nix flake check`, but `nix build` and `nix run` stay fast.
        qunitx = craneLib.buildPackage (commonArgs // {
          inherit cargoArtifacts;
          doCheck = false;

          meta = with pkgs.lib; {
            description = "Fast QUnit/QUnitX browser test runner";
            homepage = "https://github.com/izelnakri/qunitx-cli-rust";
            license = licenses.mit;
            mainProgram = "qunitx";
          };
        });
      in
      {
        packages = {
          default = qunitx;
          qunitx = qunitx;
        };

        apps.default = flake-utils.lib.mkApp {
          drv = qunitx;
        };

        devShells.default = pkgs.mkShell {
          packages = [
            rustToolchain
            pkgs.nodejs
            pkgs.chromium
            pkgs.cargo-watch
            pkgs.cargo-edit
            pkgs.git-cliff
            pkgs.cargo-release
            pkgs.cargo-nextest
            pkgs.vhs
          ];

          RUST_SRC_PATH = "${rustToolchain}/lib/rustlib/src/rust/library";
          # Let qunitx find the Nix-managed Chromium without PATH scanning.
          CHROME_BIN = "${pkgs.chromium}/bin/chromium";
        };

        checks = {
          inherit qunitx;

          tests = craneLib.cargoNextest (commonArgs // {
            inherit cargoArtifacts;
          });

          clippy = craneLib.cargoClippy (commonArgs // {
            inherit cargoArtifacts;
            cargoClippyExtraArgs = "--all-targets -- -D warnings";
          });

          fmt = craneLib.cargoFmt {
            inherit src;
          };
        };
      }
    ) // {
      overlays.default = final: prev: {
        qunitx = self.packages.${prev.stdenv.hostPlatform.system}.default;
      };
    };
}
