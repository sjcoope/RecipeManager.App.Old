/* jshint ignore: start */

var gulp = require('gulp');
var helper = require('../gulp.helpers')();

gulp.task('test', ['analyse', 'templatecache'], function() {
    helper.startTests(true /* singleRun */);
});