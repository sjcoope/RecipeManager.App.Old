module.exports = function () {
    'use strict';

    var releaseRoot = './build/release/';
    var devRoot = './build/dev/';
    var srcRoot = './src/';
    var appRoot = srcRoot + 'app/';

    var config = {

        /* FILE PATHS
         -------------------*/
        build: {
            dev: {
                root: devRoot,
                templates: devRoot + 'templates/',
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
            file: 'templates.js',
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
            json: './bower.json',
            directory: './bower_components/',
            ignorePath: '..' // Gets absolute path for bower components.
        }
    };

    return config;
};
