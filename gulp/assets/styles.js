/* jshint ignore: start */

module.exports = function (gulp, config, helper, $) {
    return function () {
        helper.log('Compiling SASS and prefixing styles');

        gulp
            .src(config.app.sassFiles)
            .pipe($.plumber()) // exit gracefully if something fails after this
            .pipe($.sass({
                outputStyle: 'compressed',
                sourceComments: 'map'
            }))
            .on('error', helper.errorLogger)
            .pipe($.autoprefixer({ browsers: ['last 2 version', '> 5%'] }))
            .pipe(gulp.dest(config.build.dev.styles));
    };
};