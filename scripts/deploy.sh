#!/usr/bin/env bash
# Deploys the website by pushing main to GitHub — Vercel is connected to this
# repo and auto-builds/deploys on push to main. There is no separate Vercel
# CLI/project link; this script IS the deploy mechanism.
set -euo pipefail
cd "$(dirname "$0")/.."

branch=$(git rev-parse --abbrev-ref HEAD)
if [ "$branch" != "main" ]; then
  echo "Refusing to deploy from branch '$branch' (must be on main)." >&2
  exit 1
fi

if [ -n "$(git status --porcelain)" ]; then
  echo "Working tree has uncommitted changes. Commit or stash before deploying:" >&2
  git status --short >&2
  exit 1
fi

echo "Running production build to verify before deploy..."
npm run build

echo "Pushing main to origin (Vercel will auto-deploy)..."
git push origin main

echo "Pushed. Check the deploy at https://vercel.com or https://www.mraresearch.org"
