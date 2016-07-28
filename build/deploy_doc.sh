#!/usr/bin/env bash
rm -rf ../doc-build
webpack --progress --hide-modules --config ./build/webpack.build.doc.js
cd doc-build
git init
git add -A
git commit -m 'update doc'
git push -f git@github.com:x-front-team/x-vue.git master:gh-pages
