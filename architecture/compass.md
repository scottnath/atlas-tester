---
layout: page
title: Compass
permalink: /architecture/compass/
---

# Compass/SASS Compilation

* Alternative to Compass/SASS: LESS
* Reasons for Compass/SASS: used in all our systems, more extensive than LESS

Gulp will be running our Compass Watch task, which will re-write our main css file on any change of any watched .scss file. This task must also throw errors if the code is written incorrectly.

## Choice: [gulp-compass](https://github.com/appleboy/gulp-compass)

## Usage Requirements
* Compass Ruby Gem installed globally
* local config.rb
* sass & css directories
	* can be same directory
	* all sass files must have .scss filename extension
