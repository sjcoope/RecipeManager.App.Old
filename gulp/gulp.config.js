module.exports = function () {
    'use strict';

    var config = {

        /* FILE PATHS
         -------------------*/

        allJSFiles: [
            './src/app/**/*.js',
            './*.js',
            './gulp/*.js'
        ],
        js: [
            './src/app/**/*.module.js',
            './src/app/**/*.js',
            '!./src/app/**/*.spec.js',
        ],
        client: './src/',
        index: './src/index.html',
        styles: {
            source: [
                './src/scripts/bootstrap-sass/assets/stylesheets/_bootstrap.scss',
                './src/content/sass/**/*.scss'
            ],
            dest: './src/content/css',
            destCss: './src/content/css/**/*.css',
            css: [
                './src/content/css/bootstrap.css',
                './src/content/css/custom.css',
            ]
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
            directory: './src/scripts/',
            ignorePath: '../..'
        }
    };

    return config;
};
