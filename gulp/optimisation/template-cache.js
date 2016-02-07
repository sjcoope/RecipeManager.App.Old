module.exports = function (gulp, config, helper, $) {
    return function () {
        helper.log('Creating AngularJS TemplateCache');

        return gulp
            .src(config.app.htmlFiles)
            .pipe($.minifyHtml({ empty: true }))
            .pipe($.angularTemplatecache(
                config.templateCache.file,
                config.templateCache.options
                ))
            .pipe(gulp.dest(config.build.dev.templates));
    };
};