---
layout: page
title: HTML Production Conversion
permalink: /architecture/html-production-conversion/
---

Tasks needed to be performed
* Gather all html template files, concat together
* minify
* convert to Javascript files
* add to Angular cache

## Options
* [gulp-minify-html](https://github.com/jonathanepollack/gulp-minify-html)
* [gulp-ng-html2js](https://github.com/marklagendijk/gulp-ng-html2js)
* [gulp-angular-templatecache](https://github.com/miickel/gulp-angular-templatecache)

ng-html2js converts html files into javascript and puts them in modules. This is meant to cut down on http request by not making the system call each individula html file. *gulp-angular-templatecache* performs the same function, with the added bonus that it will create a *single* module, which can then easily be added as a dependancy of our main app - in the case of the prototype that's the main angularApp module with config routing.

## Choice: [gulp-angular-templatecache](https://github.com/miickel/gulp-angular-templatecache)

This app doesn't have built-in minification, but extensive testing proved that having GAT produce a single module worked without the bugs we ran into with nb-html2js. Minification is handled by [Javascript Production Conversion](#js-prod) because the html templates are now javascripts.
