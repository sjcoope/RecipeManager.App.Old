/* jshint ignore: start */

module.exports = function () {
    'use strict';

    // Paths
    var releaseRoot = './build/release/';
    var devRoot = './build/dev/';
    var srcRoot = './src/';
    var jsRoot = srcRoot + 'js/';
    var appRoot = srcRoot + 'app/';
    var testRoot = srcRoot + 'test/';
    var reportRoot = './report/';

    // Settings with multiple uses
    var devTemplatesPath = devRoot + 'templates/';
    var templateFileName = 'templates.js';
    
    // Karma files - includes test files and their dependencies.
    var wiredep = require('wiredep');
    var karmaFiles = wiredep({devDependencies: true}).js;
    karmaFiles.push(jsRoot + '**/*.module.js');
    karmaFiles.push(jsRoot + '**/*.js');
    karmaFiles.push(devTemplatesPath + templateFileName);

    var config = {

        /* FILE PATHS
         -------------------*/
        build: {
            dev: {
                root: devRoot,
                templates: devTemplatesPath,
                styles: devRoot + 'styles/'
            },
            release: {
                root: releaseRoot,
                fonts: releaseRoot + 'content/fonts/',
                images: releaseRoot + 'content/images/',
                jsFiles: releaseRoot + 'js/**/*.*',
                cssFiles: releaseRoot + 'content**/*.*',
                jsLibFile: 'lib.js',
                jsAppFile: 'app.js'
            }
        },
        app: {
            root: srcRoot,
            jsFiles: [
                jsRoot + '**/*.module.js',
                jsRoot + '**/*.js',
                '!' + jsRoot + '**/*.test.js',
            ],
            fontFiles: './bower_components/bootstrap/fonts/*.*',
            imageFiles: srcRoot + 'content/images/**/*.*',
            indexFile: srcRoot + 'index.html',
            htmlFiles: appRoot + '**/*.html',
            sassFiles: [
                srcRoot + 'content/sass/**/*.scss'
            ]
        },
        project: {
            root: './',
            packages: ['./package.json', './bower.json'],
            jsFolder: jsRoot,
            jsFiles: [
                jsRoot + '**/*.js',
            ],
            tsFiles: [
                appRoot + '**/*.ts',
                './typings/**/*.ts',
                testRoot + '**/*.ts'
            ],
            tsConfig: './tsconfig.json'
        },
        //client: './src/',

        /* TEMPLATE CACHE
         ------------------*/
        templateCache: {
            file: templateFileName,
            options: {
                module: 'RecipeManager.App.Core',
                standAlone: false,
                root: './src/app/'
            }
        },

        /* SERVER SETTINGS
         ------------------*/
        server: {
            root: './server/',
            nodeServer: './server/server.js',
            defaultPort: '7203',
        },

        /* BOWER INFO
         -------------------*/
        bower: {
            json: '../../bower.json', // Path from where wiredep called, not from root.
            directory: './bower_components/',
            ignorePath: '..' // Gets absolute path for bower components.
        },
        
        /* KARMA SETTINGS
        ----------------------*/
        karma: {
          files: karmaFiles,
          exclude: [],
          coverage: {
                dir: reportRoot + 'coverage',
                reporters: [
                    {type: 'html', subdir: 'report-html'},
                    {type: 'lcov', subdir: 'report-lcov'},
                    {type: 'text-summary'},
                    {type: 'teamcity'}
                ]
            },
          preprocessors: {}[srcRoot + '**/!(*.test)+(.js)'] = ['coverage'],
        }
    };

    return config;
};
