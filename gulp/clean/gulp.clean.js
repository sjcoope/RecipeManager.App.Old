/* jshint ignore: start */

var gulp = require('gulp');
var config = require('../gulp.config')();
var helper = require('../gulp.helpers')();
var $ = require('gulp-load-plugins')({lazy: true});

gulp.task('clean', function () {
    var toClean = [].concat(config.build.release.root, config.build.dev.root);
    helper.log('Cleaning: ' + $.util.colors.blue(toClean));
    helper.clean(toClean);
});

gulp.task('clean-styles', function () {
    helper.log('Cleaning styles files');
    helper.clean(config.build.dev.styles + '/**/*.*');
});

gulp.task('clean-fonts', function () {
    helper.log('Cleaning font files');
    helper.clean(config.build.release.fonts + '/**/*.*');
});

gulp.task('clean-images', function () {
    helper.log('Cleaning image files');
    helper.clean(config.build.release.images + '/**/*.*');
});

gulp.task('clean-code', function () {
    helper.log('Cleaning all code');
    helper.clean([
        config.build.release.root + '**/*.js',
        config.build.release.root + '**/*.html'
    ]);
});

gulp.task('clean-templates', function() {
    helper.log('Cleaning dev templates');
    helper.clean(config.build.dev.templates);
});