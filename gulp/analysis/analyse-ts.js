module.exports = function (gulp, config, helper, $) {
    return function () {
        helper.log('Analysing Typscript source with TSLint');
        
        return gulp.src('./src/app/**/*.ts')
            .pipe($.tslint())
            .pipe($.tslint.report($.tslintStylish, {
                emitError: false,
                sort: true,
                bell: true,
                fullPath: true
            })
        );
    };
};