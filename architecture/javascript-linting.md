---
layout: page
title: JavaScript Linting
permalink: /architecture/javascript-linting/
---

## Task Requirements

* Static JS code analysis
* Code quality testing
* Enforce style guidelines

## Options

* [JSHint](http://www.jshint.com)
* [JSLint](http://www.jslint.com)
* [ESLint](https://github.com/eslint/eslint)

JSLint was the original JS code-quality tool. It was usurped by [unhappy developers in 2011](http://badassjs.com/post/3364925033/jshint-an-community-driven-fork-of-jslint) because of it's rigid choices as to *how* it determines that JS should be written. They created JSHint.
Then in '13 [ESLint came around](http://www.nczonline.net/blog/2013/07/16/introducing-eslint/) due to a desire to make rules pluggable and generally have a more versatile and customizable tool.

## Choice: [ESLint](https://github.com/eslint/eslint)

### Features
* Create custom linting rules
* No preconceived rules - we can create exactly what we want
* Configuration easily included in app
* Rules can be pluggable
	* Each rule can exist in its own file ([discussed here](http://ncona.com/2014/05/using-eslint-to-enforce-js-coding-conventions/))
	* Create a rule repository
