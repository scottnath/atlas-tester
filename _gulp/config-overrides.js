/**
 *  @fileOverview Application's Gulpjs configuration override file
 *
 *  @author       Scott Nath
 *
 */
'use strict';

/*********************************************
* Global settings override
* either override individual settings or the entire object
*/
var config = require('../../gulp/config');

// config.scss.foo = 'bar';

var jekyllFolder = 'tester';

config.browsersync.development.config.server.baseDir = './build';

config.browsersync.development.dependencies = config.browsersync.development.dependencies.push('jekyll');

config.watch.dependencies = config.watch.dependencies.push('jekyll-watch');

config.scss.src.unshift('!' + jekyllFolder + '/_sass/_base.scss');
config.scss.src.unshift('!' + jekyllFolder + '/_sass/_layout.scss');
config.scss.src.unshift('!' + jekyllFolder + '/_sass/_syntax-highlighting.scss');

config.browsersync.development.config.files = [
  jekyllFolder + '/build/css/*.css',
  jekyllFolder + '/build/js/*.js',
  jekyllFolder + '/build/images/**',
  jekyllFolder + '/build/fonts/*'
];

config.jekyll = {
  src: jekyllFolder,
  dest: './build',
  config: jekyllFolder + '/_config.yml',
  watch: [
    jekyllFolder + '/_config.yml',
    jekyllFolder + '/_config.build.yml',
    jekyllFolder + '/_data/**/*.{json,yml,csv}',
    jekyllFolder + '/_includes/**/*.{html,xml}',
    jekyllFolder + '/_layouts/*.html',
    jekyllFolder + '/_locales/*.yml',
    jekyllFolder + '/_plugins/*.rb',
    jekyllFolder + '/_posts/*.{markdown,md}',
    jekyllFolder + '/**/*.{html,markdown,md,yml,json,txt,xml}',
    jekyllFolder + '/**/*.{scss,sass}',
    jekyllFolder + '/*'
  ]
};

module.exports = config;
