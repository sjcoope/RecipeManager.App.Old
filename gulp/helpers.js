module.exports = function() {

    'use strict';

    // Dependencies
    var gulp = require('gulp');
    var util = require('gulp-util');
    var del = require('del');
    var nodemon = require('gulp-nodemon');
    var browserSync = require('browser-sync');
    var config = require('./config')();

    function log(msg, color) {
        if (!color) { color = util.colors.green; }
        if (typeof (msg) === 'object') {
            for (var item in msg) {
                if (msg.hasOwnProperty(item)) {
                    util.log(color(msg[item]));
                }
            }
        } else {
            util.log(color(msg));
        }
    }

    function logHeader(msg) {
        log(msg, util.colors.yellow);
    }

    function setWatches() {
        gulp.watch(config.app.sassFiles, ['styles'])
            .on('change', function() {
                log('SASS changes made!');
            });

        gulp.watch(config.app.htmlFiles, ['template-cache'])
            .on('change', function() {
                log('HTML changes made...');
            });

        gulp.watch(config.app.tsFiles, ['compile-ts'])
            .on('change', function() {
                log('Typescript changes made...');
            });
    }

    function activateBrowserSync(isDev) {
        browserSync({
            proxy: 'localhost:' + config.server.defaultPort,
            port: 3000,
            files: isDev ? [
                './src/**/*.*'
            ] : [],
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
            reloadDelay: 500
        });
    }

    var helpers = {
        clean: function(path) {
            del(path, { force: true });
        },
        errorLogger: function(error) {
            util.log(util.colors.red('*** Start of Error ***'));
            util.log(util.colors.red(error));
            util.log(util.colors.red('*** End of Error ***'));
            this.emit('end');
        },
        log: log,
        logHeader: logHeader,
        serve: function(isDev) {
            return nodemon({
                script: config.server.nodeServer,
                delayTime: 1,
                env: {
                    'PORT': config.server.defaultPort,
                    'NODE_ENV': isDev ? 'dev' : 'build'
                },
                watch: config.server.root
            })
                .on('restart', function(ev) {
                    log('*** nodemon restarted');
                    log('files changed on restart:\n' + ev);
                })
                .on('start', function() {
                    log('*** nodemon started');

                    setWatches();

                    if (!browserSync.active) {
                        activateBrowserSync(isDev);
                    }
                })
                .on('crash', function() {
                    log('*** nodemon crashed!!');
                })
                .on('exit', function() {
                    log('*** nodemon exited');
                });
        },
        startTests: function(singleRun) {
            var karma = require('karma').server;
            var excludeFiles = [];
            // TODO: DO I need to use config.karma.serverIntegrationSpecs;?

            karma.start({
                configFile: __dirname + '/../karma.conf.js',
                singleRun: !!singleRun,
                exclude: excludeFiles
            });
        }
    };

    return helpers;
};
