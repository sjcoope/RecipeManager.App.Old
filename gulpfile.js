/*jshint strict:false */

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

gulp.task('default', ['serve-dev']);

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
        config.build.release + '**/*.html',
        config.build.release + 'js/**/*.html', // TODO: Is this required?
    ]);
});

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
    helper.log('injecting our custom css');

    return gulp
        .src(config.app.indexFile)
        .pipe($.inject(gulp.src(config.build.dev.styles + '/*.css')))
        .pipe(gulp.dest(config.app.root));
});

/* Optimising Tasks
 ------------------------*/

// TODO: Handle cleaning before build and optimizing.
gulp.task('templatecache', ['clean-code'], function () {
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
    var jsFilter = $.filter('**/*.js');

    return gulp
        .src(config.app.indexFile)
        .pipe($.plumber())
        .pipe($.inject(gulp.src( // TODO: Shouldn't this be moved to inject?
            config.build.dev.templates + config.templateCache.file,
            {read: false}),
            { starttag: '<!-- inject:templates:{{ext}} -->'}
        ))
        .pipe(assets)
        // CSS Optimization
        .pipe(cssFilter)
        .pipe($.csso())
        .pipe(cssFilter.restore())
        // Javascript Optimization
        .pipe(jsFilter)
        .pipe($.uglify())
        .pipe(jsFilter.restore())
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe(gulp.dest(config.build.release.root))
});

gulp.task('build', ['optimise', 'images', 'fonts'], function () {
    helper.log('Building release.');

    // Remove the dev build
    helper.clean(config.build.dev.root);
});

/* Serve Tasks
 ----------------*/

var browserSync = require('browser-sync');
gulp.task('serve-dev', ['inject'], function () {
    return helper.serve(true);
});

gulp.task('serve-build', ['build'], function () {
    return helper.serve(false);
});