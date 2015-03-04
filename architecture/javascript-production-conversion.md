---
layout: page
title: Javascript Prod Conversion
permalink: /architecture/javascript-production-convertion/
---

Tasks needed to complete:
* concatenate bower (third-party) scripts into one
* minify bower scripts
* concatenate app scripts into one
* minify app scripts
* save new versions to production build/distribution folder

## Options for minification
* [uglifyjs2](https://github.com/mishoo/UglifyJS2)
    * [gulp-uglify](https://github.com/terinjokes/gulp-uglify) is the gulp version of uglifyjs2
    * [gulp-uglifyjs](https://github.com/craigjennings11/gulp-uglifyjs)

The main difference between gulp-uglify and gulp-uglifyjs is that the latter can glob files or pull in an array of files. Nice feature, but that can be handled by other scripts. Removing that extra code makes the former (gulp-uglify) a better choice as the developer is more active and its version of uglifyjs2 is more up-to-date with the latest version.

## Choice: [gulp-uglify](https://github.com/terinjokes/gulp-uglify)

## Processing files

We're going to set up some different functionality for if we're dealing with third-party scripts (like from Bower) or our own scripts. The breakdown happens inside of the main [Build Cleaning](#build-cleaning) task.

NATH: you need to change the two sections below for processing to reflect useref use.

### Process for Bower Files (NATH: Revisit)

1. Find all bower files and their dependencies
    * [gulp-filter](https://github.com/sindresorhus/gulp-filter) uses globbing to find all files of the type we need
    * [main-bower-files](https://github.com/ck86/main-bower-files) helps gulp narrow this to only the bower components we need
2. Concat and uglify js files
3. Concat css, and other assets into build/bower folder

### Process for App Scripts
1. We create a glob list to point to just our app's script files
    * ignores bower files
    * ignores test files (for now)
    * points to all other folders in /app
    * directly points to app.js
2. Combine all scripts into one
3. Minify single script
