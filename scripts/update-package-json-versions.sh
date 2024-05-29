#!/bin/bash

# Check if jq is installed
if ! command -v jq &>/dev/null; then
  echo "jq could not be found, please install it first"
  exit
fi

# Check if version argument is passed
if [ -z "$1" ]; then
  echo "Please provide a version number as an argument"
  exit
fi

# Get the version from the argument
VERSION=$1

# Hardcoded list of directories
DIRS=(
  "./packages/cloudterms-js"
  "./packages/cloudterms-react"
  "./packages/cloudterms-nextjs"
)

# Loop over all directories
for dir in "${DIRS[@]}"; do
  # Path to the package.json file
  PACKAGE_JSON="$dir/package.json"

  # Check if the package.json file exists
  if [ ! -f "$PACKAGE_JSON" ]; then
    echo "No package.json file found in directory $dir"
    continue
  fi

  # Update the version field in the package.json file
  jq --arg version "$VERSION" '.version = $version' $PACKAGE_JSON >"temp.json" && mv "temp.json" $PACKAGE_JSON

  echo "Version updated to $VERSION in $PACKAGE_JSON"
done
