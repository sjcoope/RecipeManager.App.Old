/* jshint ignore: start */

module.exports = function (gulp, config, helper, $) {
    return function () {
        helper.log('Cleaning font files');
        helper.clean(config.build.release.fonts + '/**/*.*');
    };
};