module.exports = function (gulp, config, helper, $) {
    return function () {
        helper.log('BUILDING...');

        var runSequence = require('run-sequence');
        runSequence('pre-build-dev', 'execute-build-dev');
    };
};