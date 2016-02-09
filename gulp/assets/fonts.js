module.exports = function (gulp, config, helper, $) {
    return function () {
        helper.log('Copying fonts');

        return gulp
            .src(config.app.fontFiles)
            .pipe(gulp.dest(config.build.release.fonts));
    };
};