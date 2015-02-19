(function () {
    'use strict';

    angular
        .module('RecipeManager.App.Welcome')
        .controller('WelcomeCtrl', WelcomeCtrl);

    function WelcomeCtrl($q)
    {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;

        activate();

        function activate() {
        }
    }
})();