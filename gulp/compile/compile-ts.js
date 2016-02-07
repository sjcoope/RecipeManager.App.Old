module.exports = function (gulp, config, helper, $) {
    return function () {
        helper.log('Compiling Typescript...');
        
        var tsConfig = require('../../tsconfig.json');

        var tsResult = 
            gulp.src(config.project.tsFiles)
                .pipe($.sourcemaps.init())
                .pipe($.typescript(tsConfig.compilerOptions))
    
        return tsResult.js
            .pipe($.sourcemaps.write())
            .pipe(gulp.dest(config.project.jsFolder));

    };
};