module.exports = function (gulp, config, helper, $) {
    return function (callback) {
        helper.logHeader('BUILDING RELEASE BUILD...');

        var runSequence = require('run-sequence');
        return runSequence('pre-build-release', 'execute-build-release', 'post-build-release', callback);
    };
};