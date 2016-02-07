module.exports = function (gulp, config, helper, $) {
    return function () {
        helper.log('Injecting bower js and css and the app js into the page');

        var wiredep = require('wiredep').stream;

        return gulp

            .src(config.app.indexFile)
            .pipe(wiredep({
                devDependencies: true,
                directory: config.bower.directory,
                bowerJson: require(config.bower.json),
                ignorePath: config.bower.ignorePath
            }))
            .pipe($.inject(gulp.src(config.app.jsFiles)))
            .pipe(gulp.dest(config.app.root));
    };
};