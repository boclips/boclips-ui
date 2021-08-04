#!/usr/bin/env bash

set -e

app=release-candidate-source
(
cd ${app}

echo //registry.npmjs.org/:_authToken=${NPM_TOKEN} > .npmrc

npm ci
npx lerna bootstrap
npx lerna run build
npx lerna publish from-git --yes --no-git-tag-version --no-push
)
