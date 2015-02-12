(function () {
    'use strict';

    angular
        .module('RecipeManager.App.Welcome')
        .controller('AboutCtrl', AboutCtrl);

    function AboutCtrl()
    {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;

        activate();

        function activate() {
        }
    }
})();