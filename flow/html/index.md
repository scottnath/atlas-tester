---
layout: page
title: HTML Templates
permalink: /flow/html/
---

# How HTML Templates get into our app

![HTML Flow Diagram]({{ site.baseurl }}/flow/html/flow-html.png)

---

1. APP .html file saved
2. `gulp watch` detects .html change
3. trigger: html to javascript conversion (tech: [HTML Production Conversion](/#/architecture/html-production-conversion))
	1. `angular-templatecache` converts changed html to angularjs javascript template
	2. `angular-templatecache` saves js template to templates.js file
4. `browsersync` reloads only saved .js file
