module.exports = function (gulp, config, helper, $) {
    return function () {
        helper.log('Cleaning Javascript');
        helper.clean(config.project.jsFolder + '*');
    };
};