module.exports = function (gulp, config, helper, $) {
    return function () {
        return helper.serve(false);
    };
};