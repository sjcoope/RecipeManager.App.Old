module.exports = function (gulp, config, helper, $, callback) {
    return function (callback) {
        helper.log('BUILD TASKS');

        var runSequence = require('run-sequence');
        runSequence('images', 'fonts', 'optimise-release', callback);
    };
};