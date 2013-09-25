#!/bin/sh
rm -f bundle.js
browserify app/main.js -o bundle.js
