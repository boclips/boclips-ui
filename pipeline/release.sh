#!/usr/bin/env bash

set -e

app=source
(
cd ${app}

echo //registry.npmjs.org/:_authToken=${NPM_TOKEN} > .npmrc

npm ci
npx lerna bootstrap
npx lerna build
npx lerna publish from-git --yes
)
