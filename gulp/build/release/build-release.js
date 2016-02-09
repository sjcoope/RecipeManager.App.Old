module.exports = function (gulp, config, helper, $) {
    return function () {
        helper.log('BUILDING...');

        var runSequence = require('run-sequence');
        runSequence('pre-build-release', 'execute-build-release', 'post-build-release');
    };
};