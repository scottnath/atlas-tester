---
layout: page
title: CSS Production Conversion
permalink: /architecture/css-production-conversion/
---

Tasks needed to be performed
* scss conversion should be run before this task
* concat all .css files
* minify single css file

## Options: Concat
~~* [gulp-concat-css](https://github.com/mariocasciaro/gulp-concat-css)~~
* Concatentation is done by Compass

## Options: Minify
* [css-condense](https://github.com/rstacruz/css-condense)
* [clean-css](https://github.com/jakubpawlowicz/clean-css)
  * [gulp-minify-css](https://github.com/jonathanepollack/gulp-minify-css) - gulp version of clean-css
* [UglifyCSS](https://github.com/fmarcia/UglifyCSS)

There's actually a ton of these, but since they all essentially do the same thing and even the [test benchmarks](http://goalsmashers.github.io/css-minification-benchmark/) don't show drastic differences - we're gonna need to go with convenience. In this case, that pushes for the gulp one because...it's a gulp version and we need that.

## Choice: [gulp-minify-css](https://github.com/jonathanepollack/gulp-minify-css)

## Process
1. Combine any non style.css scripts
2. Save into build folder 
3. Minify final css file in build folder
