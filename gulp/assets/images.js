module.exports = function (gulp, config, helper, $) {
    return function () {
        helper.log('Copying images');

        return gulp
            .src(config.app.imageFiles)
            .pipe($.imagemin({ optimizationLevel: 4 }))
            .pipe(gulp.dest(config.build.release.images));
    };
};