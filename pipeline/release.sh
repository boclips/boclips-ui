#!/usr/bin/env bash

set -e

(
cd source

echo //registry.npmjs.org/:_authToken=${NPM_TOKEN} > .npmrc
echo "about to run npm ci"
npm ci
echo "about to bootstrap components"
npx lerna bootstrap --ci
echo "about to build components"
npx lerna run build
echo "about to publish changed components"
npx lerna publish from-git --yes --no-git-tag-version --no-push
)
