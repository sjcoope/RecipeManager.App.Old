module.exports = function (gulp, config, helper, $) {
    return function () {
        helper.log('Building release.');

        // Remove the dev build
        helper.clean(config.build.dev.root);
    };
};