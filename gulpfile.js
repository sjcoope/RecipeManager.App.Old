/*jshint strict:false */

var gulp = require('gulp');
var config = require('./gulp/gulp.config')();
var helper = require('./gulp/gulp.helpers')();
var args = require('yargs').argv;
var del = require('del');
var browserSync = require('browser-sync');

// Load plugins, includes fix for gulp-sass not initializing correctly.
var $ = require('gulp-load-plugins')({lazy: true});
$.sass = require('gulp-sass');

/* TASKS
 ---------------------------- */

gulp.task('analyse', function () {
    helper.log('Analysing source with JSHint and JSCS');

    gulp
        .src(config.allJSFiles)
        .pipe($.if(args.verbose, $.print()))
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
        .pipe($.jshint.reporter('fail'))
        .pipe($.jscs());
});

gulp.task('styles', ['clean-styles'], function () {
    helper.log('Compiling SASS and prefixing styles');

    gulp
        .src(config.styles.source)
        .pipe($.plumber()) // exit gracefully if something fails after this
        .pipe($.sass({
            outputStyle: 'compressed',
            sourceComments: 'map'
        }))
        .on('error', helper.errorLogger)
        .pipe($.autoprefixer({browsers: ['last 2 version', '> 5%']}))
        .pipe(gulp.dest(config.styles.dest));
});

gulp.task('clean-styles', function () {
    helper.log('Cleaning styles files');
    del(config.styles.destCss);
});

gulp.task('sass-watcher', function () {
    gulp.watch([config.styles.source], ['styles']);
});

gulp.task('wiredep', function () {
    helper.log('Injecting bower js and css and the app js into the page');

    var wiredep = require('wiredep').stream;

    return gulp
        .src(config.index)
        .pipe(wiredep({
            bowerJson: require(config.bower.json),
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        }))
        .pipe($.inject(gulp.src(config.js)))
        .pipe(gulp.dest(config.client));
});

gulp.task('inject', ['wiredep', 'styles'], function () {
    helper.log('injecting our custom css');

    return gulp
        .src(config.index)
        .pipe($.inject(gulp.src(config.styles.css)))
        .pipe(gulp.dest(config.client));
});

gulp.task('serve-dev', ['inject'], function () {

    return $.nodemon({
        script: config.nodeServer,
        delayTime: 1,
        env: {
            'PORT': config.defaultPort
        },
        watch: config.server
    })
        .on('restart', ['analyse'], function(ev) {
            helper.log('*** nodemon restarted');
            helper.log('files changed on restart:\n' + ev);
        })
        .on('start', function() {
            helper.log('*** nodemon started');

            if(browserSync.active)
            {
                return;
            }

            var options = {
                proxy: 'localhost:' + config.defaultPort,
                port: 3000,
                files: [
                    './src/**/*.*'
                ],
                ghostMode: {
                    clicks: true,
                    location: false,
                    forms: true,
                    scroll: true
                },
                injectChanges: true,
                logFileChanges: true,
                logLevel: 'debug',
                logPrefix: 'recipeManager',
                notify: true,
                reloadDelay: 0 //1000
            } ;

            browserSync(options);
        })
        .on('crash', function() {
            helper.log('*** nodemon crashed!!');
        })
        .on('exit', function() {
            helper.log('*** nodemon exited');
        });
});