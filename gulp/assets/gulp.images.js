/* jshint ignore: start */

var gulp = require('gulp');
var config = require('../gulp.config')();
var helper = require('../gulp.helpers')();
var $ = require('gulp-load-plugins')({lazy: true});

gulp.task('images', ['clean-images'], function () {
    helper.log('Copying images');

    return gulp
        .src(config.app.imageFiles)
        .pipe($.imagemin({optimizationLevel: 4}))
        .pipe(gulp.dest(config.build.release.images));
});