module.exports = function (gulp, config, helper, $) {
    return function (callback) {
        helper.logHeader('POST BUILD TASKS COMPLETE!');
        callback();
    };
};