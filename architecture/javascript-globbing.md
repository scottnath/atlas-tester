---
layout: page
title: Javascript Globbing
permalink: /architecture/javascript-globbing/
---

## Task Requirements
* Find all non-bower javascript files in our /app system
* Add these files to the main /app index.html file
* Refresh the main html file

## Choice: [gulp-inject](https://github.com/klei/gulp-inject)

Gulp-Inject allows us to inject a list we choose into any type of file. This basic script is a perfect one-job system to cover this requirement.
