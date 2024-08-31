#!/bin/bash

# Check if version argument is passed
if [ -z "$1" ]; then
  echo "Please provide a version number as an argument"
  exit
fi

# Update version of all packages (keeping them in sync for now)
VERSION=$1
./scripts/update-package-json-versions.sh $VERSION

pnpm --filter js build
pnpm --filter js publish --access public --no-git-checks

pnpm --filter react build
pnpm --filter react publish --access public --no-git-checks

pnpm --filter nextjs build
pnpm --filter nextjs publish --access public --no-git-checks
