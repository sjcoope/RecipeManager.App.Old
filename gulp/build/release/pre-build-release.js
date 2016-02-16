module.exports = function (gulp, config, helper, $) {
    return function (callback) {
        helper.logHeader('PRE BUILD TASKS COMPLETE!');
        callback();
    };
};