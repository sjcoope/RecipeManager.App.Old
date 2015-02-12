module.exports = function () {
    'use strict';

    var util = require('gulp-util');

    var helpers = {
        log: function(msg) {
            if (typeof(msg) === 'object') {
                for (var item in msg) {
                    if (msg.hasOwnProperty(item)) {
                        util.log(util.colors.green(msg[item]));
                    }
                }
            } else {
                util.log(util.colors.green(msg));
            }
        },
        errorLogger: function (error) {
            util.log(util.colors.red('*** Start of Error ***'));
            util.log(util.colors.red(error));
            util.log(util.colors.red('*** End of Error ***'));
            this.emit('end');
        }
    };

    return helpers;
};
