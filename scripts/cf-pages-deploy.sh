#!/usr/bin/env sh
# Cloudflare Pages "Deploy command": use this path if you keep a non-empty deploy step.
# Bare `wrangler` is not on PATH in that step; this prepends the project bin dir.
set -eu
ROOT=$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)
export PATH="$ROOT/node_modules/.bin:$PATH"
exec wrangler pages deploy out "$@"
