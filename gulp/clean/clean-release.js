module.exports = function (gulp, config, helper, $) {
    return function () {
        helper.log('Cleaning all code');
        helper.clean([
            config.build.release.root + '**/*.js',
            config.build.release.root + '**/*.html'
        ]);
    };
};