/* jshint ignore: start */

var gulp = require('gulp');
var config = require('../gulp.config')();
var helper = require('../gulp.helpers')();
var $ = require('gulp-load-plugins')({lazy: true});

gulp.task('styles', ['clean-styles'], function () {
    helper.log('Compiling SASS and prefixing styles');

    gulp
        .src(config.app.sassFiles)
        .pipe($.plumber()) // exit gracefully if something fails after this
        .pipe($.sass({
            outputStyle: 'compressed',
            sourceComments: 'map'
        }))
        .on('error', helper.errorLogger)
        .pipe($.autoprefixer({browsers: ['last 2 version', '> 5%']}))
        .pipe(gulp.dest(config.build.dev.styles));
});