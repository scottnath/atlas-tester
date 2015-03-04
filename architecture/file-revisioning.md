---
layout: page
title: File Revisioning 
permalink: /architecture/file-revisioning/
---

## Tasks
* add hash to url for static asset revisioning
* make sure our build's html file is pointing to the new revision-named file

We use file revisioning to give files unique names to essentially create a cache-buster to get the end user the latest version of our code.

## Options
* [gulp-rev](https://github.com/sindresorhus/gulp-rev)
* [gulp-rev-replace](https://github.com/jamesknelson/gulp-rev-replace)

Not really a competition here. We use **gulp-rev** to create unique revision names for the files created by UseRef (see [Build Creation](#build-creation)), then **gulp-rev-replace** to replace the URL inside of our html file to point to the newly revision-named files.
