---
layout: page
title: Javascript
permalink: /flow/javascript/
---

# How an APP JS gets saved

![Javascript Flow Diagram]({{ site.baseurl }}/flow/javascript/flow-javascript.png)

---

1. APP .js file saved
2. `gulp watch` detects .js change
3. trigger: JS globbing (tech: [Javascript Globbing](/#/architecture/javascript-globbing))
	1. `gulp-inject` updates mainHtml adding all-NON-bower-js as individual `<script>`
	12. `browsersync` reloads mainHtml
4. trigger: JS linting (tech: [Javascript Linting](/#/architecture/javascript-linting))
	1. `gulp-eslint` lints only saved file `gulp-cached`
		* any negative results to terminal
	2. `browsersync` reloads only saved .js file
