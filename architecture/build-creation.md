---
layout: page
title: Build Creation
permalink: /architecture/build-creation/
---

## Task Requirements
* Clean out all or part of the /build folder
* Minify css
* Minify & Concat app javascript
* Minify JS-based HTML templates
* Minify & Concat Bower components' parts (scripts and css)
* Revisioning of each new file
* Save files to /build folder
* Create build html which points to /build versions


## Clean out build folder
* [del](https://github.com/sindresorhus/del)
	* [gulp-rimraf](https://github.com/robrich/gulp-rimraf) replacement, DEL is the node leader for file/folder removing. [Gulp use instructions](https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md)

## Concatenation
* CSS: Concatenated when compass is comiled during development
* JS: [gulp-useref](https://github.com/jonkemp/gulp-useref)
* HTML: converted to js scripts, see [HTML Production Conversion](#html-convert)

## Minification
* [CSS Production Conversion](/#/architecture/css-production-conversion)
* [Javascript Production Conversion](/#/architecture/javascript-production-conversion)
* [HTML Production Conversion](/#/architecture/html-production-conversion)

## File Revisioning

see: [Cache buster/Revisions](/#/architecture/file-revisioning)

## Save new files/create build html
* [gulp-useref](https://github.com/jonkemp/gulp-useref)
	* Parses build blocks in HTML files to replace references to non-optimized scripts or stylesheets
	
[Anatomy of a complete build](/#/flow/build)

