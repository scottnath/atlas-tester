---
layout: page
title: Unit Testing
permalink: /architecture/unit-testing/
---

* [angularjs.org guide on unit testing](https://docs.angularjs.org/guide/unit-testing)
* [exhastive deep dive](http://quickleft.com/blog/angularjs-unit-testing-for-real-though)

## To-Do
* current: gallery-controller_test.js
* move unit-test.js into /gulp
* create wiredep gulp that puts karma.conf into /app (with correct urls)
* finish all unit tests


## Karma

[/karma-runner/karma](https://github.com/karma-runner/karma)

Karma is what performs our tests. To be more precise, Karma is a way to run javascript code in browsers.

Karma is spoofing the application itself by pulling in all the javascript files we would normally need to run our APP.

Atlas installs it locally, so no need to install it on your machine. If you also install [karma-cli](https://github.com/karma-runner/karma-cli), Karma's command line interface, globally you'll be able to do normal Karma commands, but using the local Atlas version of Karma:

```npm install -g karma-cli```

### karma.conf.js

This is Karma's configuration file.

#### files config

This is an array which contains the path to each of our javascript files. It can accept glob patterns, eg. *js/\*.js* or *test/\*\*/\*Spec.js*.

* needs to include all bower files
	* this is accomplished with wiredep:
	
	```gulp wiredep```
* needs to include templatecache file (/app/templates.js)
* in the long run...needs to include all APP .js files, including test files




# E2E Testing
Unit tests validate individual pieces of functionality. End-to-end tests are needed to make sure those modules work together properly. They are there to validate user stories. Modus will follow up with a full post on this topic

* [protractor](https://github.com/angular/protractor)
