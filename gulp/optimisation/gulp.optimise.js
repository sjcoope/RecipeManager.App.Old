/* jshint ignore: start */

var gulp = require('gulp');
var config = require('../gulp.config')();
var helper = require('../gulp.helpers')();
var $ = require('gulp-load-plugins')({lazy: true});

gulp.task('optimise', ['inject'], function () {
    helper.log('Optimizing the JS, HTML and CSS');

    var cssFilter = $.filter(['**/*.css'], { restore: true });
    var jsLibFilter = $.filter(['**/' + config.build.release.jsLibFile], { restore: true });
    var jsAppFilter = $.filter(['**/' + config.build.release.jsAppFile], { restore: true });

    return gulp
        .src(config.app.indexFile)
        .pipe($.plumber())
        .pipe($.inject(gulp.src( // Injection handled here as it's only needed on build (not for DEV as we need templates to debug)
            config.build.dev.templates + config.templateCache.file,
            {read: false}),
            {starttag: '<!-- inject:templates:{{ext}} -->'}
        ))
        .pipe($.useref({searchPath: config.project.root}))
        // CSS Optimization
        .pipe(cssFilter)
        .pipe($.csso())
        .pipe(cssFilter.restore)
        // Lib Javascript Optimization
        .pipe(jsLibFilter)
        .pipe($.uglify())
        .pipe(jsLibFilter.restore)
        // App Javascript Optimization
        .pipe(jsAppFilter)
        .pipe($.ngAnnotate())
        .pipe($.uglify())
        .pipe(jsAppFilter.restore)
        // File Name Versioning
        .pipe($.rev())
        .pipe($.useref())
        // Rename Versioned Files
        .pipe($.revReplace())
        .pipe(gulp.dest(config.build.release.root));
});