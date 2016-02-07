module.exports = function (gulp, config, helper, $) {
    return function () {
        helper.log('Cleaning image files');
        helper.clean(config.build.release.images + '/**/*.*');
    };
};