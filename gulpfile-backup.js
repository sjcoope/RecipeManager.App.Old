/* jshint ignore:start */
// jscs:disable

// Dependencies
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({
        lazy: false
});

/* TODO: Investigate why sass isn't pulled into loadPlugins */
plugins.sass = require('gulp-sass');

// Config
var config = {
    "paths": {
        "root": "./src/index.html",
        "app": "./src",
        "api": "/api",
        "html": ["./src/**/*.html"],
        "js": ["./src/app/**/*.js"],
        "sass": {
            "files": ["./src/scripts/bootstrap-sass/lib/**/*.scss", "./src/content/sass/**/*.scss", "./scr/scripts/flatify/"],
            "src": ["./src/scripts/bootstrap-sass/lib/", "./src/content/sass/"],
            "dest": "./src/content/css"
        }
    },
    "dev": {
        "browser": "chrome"
    },
    "server": {
        "url": "http://localhost:",
        "port": 8080
    }
};

// Operations
gulp.task('serve-dev', ['analyse', 'compile-sass', 'server', 'open-url', 'watch']);

// Tasks

/* Opens browser with application url */
gulp.task('open-url', function () {
    gulp.src(config.paths.root)
        .pipe(plugins.open("", {
            url: config.server.url + config.server.port,
            app: config.dev.browser
        }))
});

/* Configure and connect node web server */
gulp.task('server', function () {
    plugins.connect.server({
        root: config.paths.app,
        port: config.server.port,
        livereload: true
    });
});

/* Watches files for changes */
gulp.task('watch', function () {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js']);
    gulp.watch(config.paths.sass.files, ['sass']);
});

/* Watch task for JS */
gulp.task('js', ['analyse'], function () {
    gulp.src(config.paths.js)
        .pipe(plugins.connect.reload());
});

/* Watch task for HTML */
gulp.task('html', function () {
    gulp.src(config.paths.html)
        .pipe(plugins.connect.reload());
});

/* Watch task for SASS */
gulp.task('sass', ['compile-sass'], function() {
    gulp.src(config.paths.sass.files)
        .pipe(plugins.connect.reload());
});

/* Lints the JS Files */
gulp.task('analyse', function () {
    gulp.src(config.paths.js)
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('jshint-stylish'));
});

/* Compiles the sass */
gulp.task('compile-sass', function () {
    // Taking the path from the above object
    gulp.src(config.paths.sass.files)

    // Sass options - make the output compressed and add the source map
    // Also pull the include path from the paths object
    .pipe(plugins.sass({
        outputStyle: 'compressed',
        sourceComments: 'map',
        includePaths: [config.paths.sass.src]
    }))

    // Finally put the compiled sass into a css file
    .pipe(gulp.dest(config.paths.sass.dest))
});

/* jshint ignore:end */
// jscs:enable
