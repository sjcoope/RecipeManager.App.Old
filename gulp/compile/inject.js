module.exports = function (gulp, config, helper, $) {
    return function () {
        helper.log('injecting our custom css and template cache');

        return gulp
            .src(config.app.indexFile)
            .pipe($.inject(gulp.src(config.build.dev.styles + '/*.css')))
            .pipe(gulp.dest(config.app.root));
    };
};