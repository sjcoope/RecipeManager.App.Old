/** 
--type=pre - will bump the prerelease version
--type=patch or no flag will bump the patch version
--type=minor will bump the minor version
--type=major will bump the major version
--version=1.2.3 will bump to the specific version and ignore the flags
*/

module.exports = function (gulp, config, helper, $) {
    return function () {
        var args = require('yargs').argv;
        var msg = 'Bumping versions';
        var type = args.type;
        var version = args.version;
        var options = {};

        if (version) {
            options.version = version;
            msg += ' to ' + version;
        } else {
            options.type = type;
            msg += ' for a ' + type;
        }

        helper.log(msg);

        return gulp
            .src(config.project.packages)
            .pipe($.bump(options))
            .pipe(gulp.dest(config.project.root));
    };
};