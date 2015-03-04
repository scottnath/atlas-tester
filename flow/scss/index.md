---
layout: page
title: SCSS
permalink: /flow/scss/
---

# How SASS files become our css

![SASS Flow Diagram]({{ site.baseurl }}/flow/scss/flow-scss.png)

---

1. .scss file saved
2. `gulp watch` detects .scss change
3. trigger: compass (tech: [Compass/SASS Compilation](/#/architecture/compass))
	1. trigger: scss globbing (tech: [SCSS Globbing](/#/architecture/css-globbing))
		1. `gulp-css-globbing` finds all APP .scss
		2. `gulp-css-globbing` writes @import line for each APP .scss into styles.scss
	1. trigger: sass/compass linting (tech: [SCSS Linting](/#/architecture/scss-linting))
		* `gulp-scss-lint` lints only saved file via `gulp-cached`
		* any negative results to terminal
	1. `gulp-compass` converts all .scss to plain css
	1. `gulp-compass` writes changes to styles.css
	1. `browsersync` reloads only styles.css
