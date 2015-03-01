/* jshint strict: false */

var gulp = require('gulp');
var config = require('./gulp/gulp.config')();
var helper = require('./gulp/gulp.helpers')();
var args = require('yargs').argv;

// Load plugins, includes fix for gulp-sass not initializing correctly.
var $ = require('gulp-load-plugins')({lazy: true});
$.sass = require('gulp-sass');

/* TASKS
 ----------------------------
 ----------------------------*/

gulp.task('default', ['help']);

gulp.task('help', $.taskListing);

gulp.task('analyse', function () {
    helper.log('Analysing source with JSHint and JSCS');

    gulp
        .src(config.project.jsFiles)
        .pipe($.if(args.verbose, $.print()))
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
        .pipe($.jshint.reporter('fail'))
        .pipe($.jscs());
});

gulp.task('styles', ['clean-styles'], function () {
    helper.log('Compiling SASS and prefixing styles');

    gulp
        .src(config.app.sassFiles)
        .pipe($.plumber()) // exit gracefully if something fails after this
        .pipe($.sass({
            outputStyle: 'compressed',
            sourceComments: 'map'
        }))
        .on('error', helper.errorLogger)
        .pipe($.autoprefixer({browsers: ['last 2 version', '> 5%']}))
        .pipe(gulp.dest(config.build.dev.styles));
});

gulp.task('fonts', ['clean-fonts'], function () {
    helper.log('Copying fonts');

    return gulp
        .src(config.app.fontFiles)
        .pipe(gulp.dest(config.build.release.fonts));

    //return gulp
    //    .src(config.app.fontFiles)
    //    .pipe(gulp.dest(config.build.release.fonts));
});

gulp.task('images', ['clean-images'], function () {
    helper.log('Copying images');

    return gulp
        .src(config.app.imageFiles)
        .pipe($.imagemin({optimizationLevel: 4}))
        .pipe(gulp.dest(config.build.release.images));
});

/* Cleaning Tasks
 * ------------------*/

gulp.task('clean', function () {
    var toClean = [].concat(config.build.release.root, config.build.dev.root);
    helper.log('Cleaning: ' + $.util.colors.blue(toClean));
    helper.clean(toClean);
});

gulp.task('clean-styles', function () {
    helper.log('Cleaning styles files');
    helper.clean(config.build.dev.styles + '/**/*.*');
});

gulp.task('clean-fonts', function () {
    helper.log('Cleaning font files');
    helper.clean(config.build.release.fonts + '/**/*.*');
});

gulp.task('clean-images', function () {
    helper.log('Cleaning image files');
    helper.clean(config.build.release.images + '/**/*.*');
});

gulp.task('clean-code', function () {
    helper.log('Cleaning all code');
    helper.clean([
        config.build.dev.root + '**/*.js',
        config.build.release + '**/*.html'
    ]);
});

gulp.task('clean-templates', function() {
    helper.log('Cleaning dev templates');
    helper.clean(config.build.dev.templates);
})

/* Injection Tasks
 --------------------------*/

gulp.task('wiredep', function () {
    helper.log('Injecting bower js and css and the app js into the page');

    var wiredep = require('wiredep').stream;

    return gulp

        .src(config.app.indexFile)
        .pipe(wiredep({
            directory: config.bower.directory,
            bowerJson: require(config.bower.json),
            ignorePath: config.bower.ignorePath
        }))
        .pipe($.inject(gulp.src(config.app.jsFiles)))
        .pipe(gulp.dest(config.app.root));
});

gulp.task('inject', ['wiredep', 'styles', 'templatecache'], function () {
    helper.log('injecting our custom css and template cache');

    return gulp
        .src(config.app.indexFile)
        .pipe($.inject(gulp.src(config.build.dev.styles + '/*.css')))
        .pipe(gulp.dest(config.app.root));
});

/* Optimising Tasks
 ------------------------*/

gulp.task('templatecache', ['clean-templates'], function () {
    helper.log('Creating AngularJS TemplateCache');

    return gulp
        .src(config.app.htmlFiles)
        .pipe($.minifyHtml({empty: true}))
        .pipe($.angularTemplatecache(
            config.templateCache.file,
            config.templateCache.options
        ))
        .pipe(gulp.dest(config.build.dev.templates));
});

gulp.task('optimise', ['inject'], function () {
    helper.log('Optimizing the JS, HTML and CSS');

    var assets = $.useref.assets({searchPath: './'});
    var cssFilter = $.filter('**/*.css');
    //var jsFilter = $.filter('**/*.js');
    var jsLibFilter = $.filter('**/' + config.build.release.jsLibFile);
    var jsAppFilter = $.filter('**/' + config.build.release.jsAppFile);

    return gulp
        .src(config.app.indexFile)
        .pipe($.plumber())
        .pipe($.inject(gulp.src( // Injection handled here as it's only needed on build (not for DEV as we need templates to debug)
            config.build.dev.templates + config.templateCache.file,
            {read: false}),
            {starttag: '<!-- inject:templates:{{ext}} -->'}
        ))
        .pipe(assets)
        // CSS Optimization
        .pipe(cssFilter)
        .pipe($.csso())
        .pipe(cssFilter.restore())
        // Lib Javascript Optimization
        .pipe(jsLibFilter)
        .pipe($.uglify())
        .pipe(jsLibFilter.restore())
        // App Javascript Optimization
        .pipe(jsAppFilter)
        .pipe($.ngAnnotate())
        .pipe($.uglify())
        .pipe(jsAppFilter.restore())
        // File Name Versioning
        .pipe($.rev())
        .pipe(assets.restore())
        .pipe($.useref())
        // Rename Versioned Files
        .pipe($.revReplace())
        .pipe(gulp.dest(config.build.release.root));
});

gulp.task('build', ['clean-code', 'optimise', 'images', 'fonts'], function () {
    helper.log('Building release.');

    // Remove the dev build
    helper.clean(config.build.dev.root);
});

/* Versioning Tasks
--------------------*/
/**
 * Bump the version
 * --type=pre will bump the prerelease version *.*.*-x
 * --type=patch or no flag will bump the patch version *.*.x
 * --type=minor will bump the minor version *.x.*
 * --type=major will bump the major version x.*.*
 * --version=1.2.3 will bump to a specific version and ignore other flags
 */
gulp.task('increment-version', function() {
    var msg = 'Incrementing versions';
    var type = args.type;
    var version = args.version;
    var options = {};
    if (version) {
        options.version = version;
        msg += ' to ' + version;
    } else {
        options.type = type;
        msg += ' for a ' + type;
    }
    helper.log(msg);

    return gulp
        .src(config.project.packages)
        .pipe($.print())
        .pipe($.bump(options))
        .pipe(gulp.dest(config.project.root));
});

/* Testing Tasks
--------------------*/

gulp.task('test', ['analyse', 'templatecache'], function(done) {
    helper.startTests(true /* singleRun */, done);
});

/* Serve Tasks
 ----------------*/

gulp.task('serve-dev', ['inject'], function () {
    return helper.serve(true);
});

gulp.task('serve-build', ['build'], function () {
    return helper.serve(false);
});