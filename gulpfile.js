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
gulp.task('clean-build', task('clean/clean-build'));
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
gulp.task('build-release', task('build/release/build-release'));
gulp.task('pre-build-release', ['compile-ts', 'clean-build'], task('build/release/pre-build-release'));
gulp.task('execute-build-release', task('build/release/execute-build-release'));
gulp.task('post-build-release', ['bump-version'], task('build/release/post-build-release'));

gulp.task('build-dev', task('build/dev/build-dev'));
gulp.task('pre-build-dev', ['clean-build', 'compile-ts'], task('build/dev/pre-build-dev'));
gulp.task('execute-build-dev', ['inject'], task('build/dev/execute-build-dev'));

gulp.task('bump-version', task('build/bump-version'));
gulp.task('inject', ['wire-dep', 'styles', 'template-cache'], task('build/inject'));
gulp.task('wire-dep', task('build/wire-dep'));
gulp.task('compile-ts', ['analyse-ts'], task('build/compile-ts'));

/* Serve
---------------------*/
gulp.task('serve-dev', ['build-dev'], task('serve/serve-dev'));
gulp.task('serve-release', ['build-release'], task('serve/serve-release'));

/* Optimisation
--------------------*/
gulp.task('optimise-release', ['inject'], task('optimisation/optimise-release'));
gulp.task('template-cache', ['clean-templates'], task('optimisation/template-cache'));

/* Testing
--------------------*/
gulp.task('test', ['analyse-ts', 'compile-ts', 'template-cache'], task('test/test'));