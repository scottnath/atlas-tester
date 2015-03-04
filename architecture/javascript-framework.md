---
layout: page
title: Javascript Framework 
permalink: /architecture/javascript-framework/
weight: 1
---

The framework we choose will be the workhorse of our application. This is what builds out pages, convert templates, pulls in data, and a million other things.

## Options
* [EmberJS](http://emberjs.com)
* [Backbone](http://backbonejs.org)
* [AngularJS](https://angularjs.org)

As of 2014, these are the top options available. We did extensive research of all three to determine what was best for our purposes. We took into account not just the ease of writing for a particular framework, but also community support, client-side weight, and internal knowledge. For our tests we had different developers create to-do applications with each framework and document ease-of-use, ability to find answers, satisfaction with end result, etc.

### Backbone?
**Backbone** was fairly easy to rule out. It relied heavily on jQuery, which, as an organization, we are trying to phase out due to how bloated it has become and how [easy its functions are to do with plain javascript](http://youmightnotneedjquery.com). It also does not have data-binding, or any built-in directives, or really any structure. Backbone would be requiring us to start from scratch on a lot of items - which includes creating and documenting our own structure/templates/etc. It also relies on the DOM for understanding your model, which can be error-prone. While backbone has been used by some large sites, it's community support is not massive. A search for "backbonejs" results in 879K google hits.

Third-Party Modules: ~230 [backplugs](http://backplug.io/)

### Angular?
**Angular** was already popular among many developers here. While it has a steep learning curve, once understood it can be quite powerful. It can be used to build full-scale applications or just single parts of an app - which means understanding of this framework can be translated into functionality in other non-angular systems. Angular proved so versatile that Google sponsors it as an open source project - which means it has full-time employees from a major tech company working to make it better every day. Angularjs has massive developer community and a search for "angularjs" results in 8.5 million google hits.

Third-Party Modules: ~800 [ngmodules](http://ngmodules.org)

### Ember?
**Ember** has some nice built in features like a router and it's own data layer. It has underdone a bunch of changes since it's inception, which makes a lot of online examples and answer-responses out-of-date and wrong. It was built for performance and it uses handlebars for templating - which gums up the HTML source code adds too much weight to the file size. It should be a contender, but it simply does not have a solid enough developer community for us to get the kind of open-source benefit we need. A search for "emberjs" results in 1.6 million google hits.

Third-Party Modules: ~20 [emberaddons](http://emberaddons.com/)

## Choice: [AngularJS](https://angularjs.org)
### Features
* Massive community
* Open source and backed by Google
* Extends HTML allowing definition of new elements, behaviors and attributes
    * this will allow non-js developers to understand the html Angular uses
* Two-way data binding
* Written with code-testing in mind
* Multiple unit testing options available
