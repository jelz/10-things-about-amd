#!/bin/sh
rm -rf built
r.js -o app/build.require.js
r.js -o app/build.almond.js