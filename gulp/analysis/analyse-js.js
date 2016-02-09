module.exports = function (gulp, config, helper, $) {
    return function () {
       helper.log('Analysing JavaScript source with JSHint and JSCS');
       
       var args = require('yargs').argv;
       
       gulp
        .src(config.project.jsFiles)
        .pipe($.if(args.verbose, $.print()))
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
        .pipe($.jshint.reporter('fail'))
        .pipe($.jscs());
    };
};