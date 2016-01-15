/* jshint ignore: start */

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});

gulp.task('default', ['help']);

gulp.task('help', $.taskListing);