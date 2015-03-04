---
layout: page
title: Browser Reload/Server
permalink: /architecture/browser-reload/
---

## Task Requirements

* Reload browser(s) on file changes
* Triggered by Gulp Watch

## Options
* [Browser Sync](http://browsersync.io)
* [LiveReload](http://livereload.com)

LiveReload has long been the leader, but Shane Osbourne ([@shaneOsbourne](http://twitter.com/shaneOsbourne)) built BrowserSync due to LR's lack of support for older browsers and requirement for a browser plugin to be installed. You can see [details of his reasoning here](http://css-tricks.com/cross-browser-css-injection).

## Choice: [Browser Sync](http://browsersync.io)
### Features
* Injects CSS changes (not full DOM refresh)
* Refresh across not just browsers, but *devices* as well (via IP)
* No browser plugin required
* Syncs actions across all browsers/devices
	* Scroll position
	* Form Fields
	* Links (going to other pages)
* Built-in  server
