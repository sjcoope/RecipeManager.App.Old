/* jshint ignore: start */

var gulp = require('gulp');
var config = require('../gulp.config')();
var helper = require('../gulp.helpers')();
var $ = require('gulp-load-plugins')({lazy: true});

gulp.task('templatecache', ['clean-templates'], function () {
    helper.log('Creating AngularJS TemplateCache');

    return gulp
        .src(config.app.htmlFiles)
        .pipe($.minifyHtml({empty: true}))
        .pipe($.angularTemplatecache(
            config.templateCache.file,
            config.templateCache.options
        ))
        .pipe(gulp.dest(config.build.dev.templates));
});