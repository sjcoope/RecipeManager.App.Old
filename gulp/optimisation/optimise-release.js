module.exports = function (gulp, config, helper, $) {
    return function () {
        helper.log('Optimizing the JS, HTML and CSS');

        var concatenateAssets = $.useref({ searchPath: './' }); //List of assets in index.html to be concatenated
        var cssFilter = $.filter(['**/*.css'], { restore: true });
        var jsLibFilter = $.filter(['**/' + config.build.release.jsLibFile], { restore: true });
        var jsAppFilter = $.filter(['**/' + config.build.release.jsAppFile], { restore: true });
                
        return gulp
            .src(config.app.indexFile)
            .pipe($.plumber())
            // Inject template cache references into App.js (injection handled here as it's needed for build and not dev)
            .pipe($.inject(gulp.src( 
                config.build.dev.templates + config.templateCache.file,
                { read: false }),
                { starttag: '<!-- inject:templates:{{ext}} -->' }
            ))
            // Concatenate the assets in the index file
            .pipe(concatenateAssets)
            // CSS Optimization
            .pipe(cssFilter)
            .pipe($.csso())
            .pipe($.rev())
            .pipe(cssFilter.restore)
            // Lib Javascript Optimization
            .pipe(jsLibFilter)
            .pipe($.uglify())
            .pipe($.rev())
            .pipe(jsLibFilter.restore)
            // App Javascript Optimization
            .pipe(jsAppFilter)
            .pipe($.ngAnnotate())
            .pipe($.uglify())
            .pipe($.rev())
            .pipe(jsAppFilter.restore)
            // Update the CSS and JS refs in index after cache busting
            .pipe($.revReplace())
            // Write out build files
            .pipe(gulp.dest(config.build.release.root));       
    };
};