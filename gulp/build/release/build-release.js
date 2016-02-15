module.exports = function (gulp, config, helper, $) {
    return function () {
        helper.logHeader('BUILDING RELEASE BUILD...');

        var runSequence = require('run-sequence');
        runSequence('pre-build-release', 'execute-build-release', 'post-build-release');
    };
};