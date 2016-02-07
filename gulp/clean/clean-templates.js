module.exports = function (gulp, config, helper, $) {
    return function () {
        helper.log('Cleaning dev templates');
        helper.clean(config.build.dev.templates);
    };
};