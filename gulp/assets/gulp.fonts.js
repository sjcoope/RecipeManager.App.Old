/* jshint ignore: start */

var gulp = require('gulp');
var config = require('../gulp.config')();
var helper = require('../gulp.helpers')();
var $ = require('gulp-load-plugins')({lazy: true});

gulp.task('fonts', ['clean-fonts'], function () {
    helper.log('Copying fonts');

    return gulp
        .src(config.app.fontFiles)
        .pipe(gulp.dest(config.build.release.fonts));
});