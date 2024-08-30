#!/bin/bash

# Function that takes in a directory name and removes all of those directories
function removeDirectories {
  find . -name "$1" -type d -prune -exec rm -rf '{}' +
}

removeDirectories "node_modules"
removeDirectories ".turbo"
removeDirectories ".next"
removeDirectories "dist"

pnpm install
