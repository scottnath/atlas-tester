---
layout: page
title: Taskrunner
permalink: /architecture/taskrunner/
---

The taskrunner keeps all the pieces of our application running as well as a system to receive commands that run on demand.

## Options
* [Grunt](http://gruntjs.com/)
*  [Gulp](http://gulpjs.com)

Research and [testing](https://github.com/scottnath/gulp-vs-grunt) had Gulp beat out Grunt, proving to be 5 times faster at running tasks.

## Choice: [Gulp](http://gulpjs.com)
### Features
* Faster task compilation (only writes to disc at end)
* Less code to write
* More javascript-like written instructions
