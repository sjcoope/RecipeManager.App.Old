module.exports = function () {
    'use strict';

    // Paths
    var releaseRoot = './build/release/';
    var devRoot = './build/dev/';
    var srcRoot = './src/';
    var appRoot = srcRoot + 'app/';
    var reportRoot = './report/';
    var testsRoot = srcRoot + 'tests/';

    // Bower settings
    var wiredep = require('wiredep');
    var bowerFiles = wiredep({devDependencies: true}).js;

    // Settings with multiple uses
    var devTemplatesPath = devRoot + 'templates/';
    var templateFileName = 'templates.js';
    var serverIntegrationTests = [testsRoot + '**/*.test.js'];

    // Karma Settings
    var karmaFiles = bowerFiles;
    karmaFiles.push(testsRoot + '/helpers/**/*.js');
    karmaFiles.push(appRoot + '**/*.module.js');
    karmaFiles.push(appRoot + '**/*.js');
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
                jsLibFile: 'lib.js',
                jsAppFile: 'app.js'
            }
        },
        app: {
            root: srcRoot,
            jsFiles: [
                appRoot + '**/*.module.js',
                appRoot + '**/*.js',
                '!' + appRoot + '**/*.spec.js',
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
            packages: [
                './package.json',
                './bower.json'
            ],
            jsFiles: [
                appRoot + '**/*.js',
                './*.js',
                './gulp/*.js'
            ]
        },
        //client: './src/',

        /* TEMPLATE CACHE
         ------------------*/
        templateCache: {
            file: templateFileName,
            options: {
                module: 'RecipeManager.App.Core',
                standAlone: false,
                root: 'app/'
            }
        },

        /* KARMA & TESTING SETTINGS
        -------------------*/
        // bowerFiles,

        karma: {
            configFile: './karma.conf.js',
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
            serverIntegrationSpecs: serverIntegrationTests
        },

        /* NODE SETTINGS
         ------------------*/
        server: './server/',
        nodeServer: './server/server.js',
        defaultPort: '7203',

        /* BOWER INFO
         -------------------*/
        bower: {
            json: './bower.json',
            directory: './bower_components/',
            ignorePath: '..' // Gets absolute path for bower components.
        }
    };

    return config;
};
