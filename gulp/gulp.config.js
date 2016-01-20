/* jshint ignore: start */

module.exports = function () {
    'use strict';

    // Paths
    var releaseRoot = './build/release/';
    var devRoot = './build/dev/';
    var srcRoot = './src/';
    var jsRoot = srcRoot + 'js/';
    var appRoot = srcRoot + 'app/';


    // Settings with multiple uses
    var devTemplatesPath = devRoot + 'templates/';
    var templateFileName = 'templates.js';

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
            jsFiles: [
                jsRoot + '**/*.js',
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

        /* NODE SETTINGS
         ------------------*/
        server: './server/',
        nodeServer: './server/server.js',
        defaultPort: '7203',

        /* BOWER INFO
         -------------------*/
        bower: {
            json: '../../bower.json',
            directory: './bower_components/',
            ignorePath: '..' // Gets absolute path for bower components.
        }
    };

    return config;
};
