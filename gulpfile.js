/* jshint ignore: start */

var gulp = require('gulp');
var config = require('./gulp/config')();
var helper = require('./gulp/helpers')();
var $ = require('gulp-load-plugins')({ lazy: true });

function task(taskName) {
    return require('./gulp/' + taskName)(gulp, config, helper, $);
}

/* General
---------------------*/
gulp.task('default', ['help']);
gulp.task('help', $.taskListing);

/* Cleaning
--------------------*/
gulp.task('clean', task('clean/clean'));
gulp.task('clean-code', task('clean/clean-code'));
gulp.task('clean-fonts', task('clean/clean-fonts'));
gulp.task('clean-images', task('clean/clean-images'));
gulp.task('clean-styles', task('clean/clean-styles'));
gulp.task('clean-templates', task('clean/clean-templates'));
gulp.task('clean-js', task('clean/clean-js'));

/* Assets
--------------------*/
gulp.task('fonts', ['clean-fonts'], task('assets/fonts'));
gulp.task('images', ['clean-images'], task('assets/images'));
gulp.task('styles', ['clean-styles'], task('assets/styles'));

/* Code Analysis
--------------------*/
gulp.task('analyse-js', task('analysis/analyse-js'));
gulp.task('analyse-ts', task('analysis/analyse-ts'));

/* Build
--------------------*/
gulp.task('build', ['clean-code', 'optimise', 'bump-version', 'images', 'fonts'], task('build/build'));
gulp.task('bump-version', task('build/bump-version'));
gulp.task('inject', ['wire-dep', 'styles', 'template-cache'], task('build/inject'));
gulp.task('wire-dep', task('build/wire-dep'));
gulp.task('serve-dev', ['analyse-ts', 'inject'], task('build/serve-dev'));
gulp.task('serve-build', ['analyse-ts', 'build'], task('build/serve-build'));
gulp.task('ts-compile', task('build/ts-compile'));

/* Optimisation
--------------------*/
gulp.task('optimise', ['inject'], task('optimisation/optimise'));
gulp.task('template-cache', ['clean-templates'], task('optimisation/template-cache'));

/* Testing
--------------------*/
gulp.task('test', ['analyse-ts', 'templatecache'], task('test/test'));