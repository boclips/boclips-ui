#!/usr/bin/env bash

if [[ -z "$1" ]]
then
  echo "No component(s) specified"
  exit 1
fi

lerna version --force-git-tag --force-publish=$1
