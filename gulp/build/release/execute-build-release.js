module.exports = function (gulp, config, helper, $, callback) {
    return function (callback) {
        helper.logHeader('BUILD TASKS COMPLETE!');
        callback();
    };
};