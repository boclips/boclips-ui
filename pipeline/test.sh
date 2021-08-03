#!/usr/bin/env bash

set -e

app=source
(
cd ${app}

npm ci
npx lerna bootstrap
npx lerna run build
npm run lint
npm run test
)
