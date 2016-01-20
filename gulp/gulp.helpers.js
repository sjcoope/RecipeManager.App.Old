/* jshint ignore: start */

module.exports = function () {

    'use strict';

    // Dependencies
    var util = require('gulp-util');
    var del = require('del');
    var nodemon = require('gulp-nodemon');
    var browserSync = require('browser-sync');
    var config = require('./gulp.config')();

    function log(msg) {
        if (typeof(msg) === 'object') {
            for (var item in msg) {
                if (msg.hasOwnProperty(item)) {
                    util.log(util.colors.green(msg[item]));
                }
            }
        } else {
            util.log(util.colors.green(msg));
        }
    }

    var helpers = {
        clean: function (path) {
            del(path, {force: true});
        },
        errorLogger: function (error) {
            util.log(util.colors.red('*** Start of Error ***'));
            util.log(util.colors.red(error));
            util.log(util.colors.red('*** End of Error ***'));
            this.emit('end');
        },
        log: log,
        serve: function (isDev) {
            return nodemon({
                script: config.nodeServer,
                delayTime: 1,
                env: {
                    'PORT': config.defaultPort,
                    'NODE_ENV': isDev ? 'dev' : 'build'
                },
                watch: config.server
            })
                .on('restart', ['analyse'], function (ev) {
                    log('*** nodemon restarted');
                    log('files changed on restart:\n' + ev);
                })
                .on('start', function () {
                    log('*** nodemon started');

                    if (browserSync.active) {
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
                    };

                    browserSync(options);
                })
                .on('crash', function () {
                    log('*** nodemon crashed!!');
                })
                .on('exit', function () {
                    log('*** nodemon exited');
                });
        },
//         startTests: function(singleRun) {
//             var karma = require('karma').server;
//             var excludeFiles = [];
//             // TODO: DO I need to use config.karma.serverIntegrationSpecs;?
// 
//             karma.start({
//                 configFile:__dirname + '/../karma.conf.js',
//                 singleRun: !!singleRun,
//                 exclude: excludeFiles
//             });
//         }
    };

    return helpers;
};
