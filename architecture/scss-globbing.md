---
layout: page
title: SCSS Globbing
permalink: /architecture/scss-globbing/
---

## Task Requirements
* Find all scss files in our APP system
* Add these files to our main SASS file (`SETTINGS.src.scssMain`) as @imports
* Refresh this import list whenever new files are added, even with dev server running

## Choice: [gulp-css-globbing](https://github.com/jsahlen/gulp-css-globbing)

Scott Nath has been contributing back to this excellent script to get the extra functionality we needed. It now fulfills all our requirements for globbing our APP scss files into one file for Compass to work properly in our system.
