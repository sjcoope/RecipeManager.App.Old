/* jshint ignore: start */

module.exports = function (gulp, config, helper, $) {
    return function () {    
        helper.log('Cleaning styles files');
        helper.clean(config.build.dev.styles + '/**/*.*');
    }
}