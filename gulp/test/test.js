module.exports = function (gulp, config, helper, $) {
    return function () {
       helper.startTests(true /* singleRun */);
    };
};