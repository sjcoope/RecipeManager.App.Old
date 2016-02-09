module.exports = function (gulp, config, helper, $) {
    return function () {
        helper.log('POST BUILD TASKS');

        // Remove the dev build
        helper.clean(config.build.dev.root);
    };
};