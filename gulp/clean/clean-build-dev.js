module.exports = function (gulp, config, helper, $) {
    return function () {
        var toClean = [].concat(config.build.dev.root);
        helper.log('Cleaning: ' + $.util.colors.blue(toClean));
        helper.clean(toClean);
    };
};