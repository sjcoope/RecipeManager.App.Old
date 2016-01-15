/* jshint ignore: start */

var gulp = require('gulp');
var config = require('../gulp.config')();
var helper = require('../gulp.helpers')();
var $ = require('gulp-load-plugins')({lazy: true});
var args = require('yargs').argv;

gulp.task('analyse', function () {
    helper.log('Analysing source with JSHint and JSCS');

    gulp
        .src(config.project.jsFiles)
        .pipe($.if(args.verbose, $.print()))
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
        .pipe($.jshint.reporter('fail'))
        .pipe($.jscs());
});