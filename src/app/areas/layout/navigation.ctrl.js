(function () {
    'use strict';

    angular
        .module('RecipeManager.App.Layout')
        .controller('NavigationCtrl', NavigationCtrl);

    function NavigationCtrl() {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;

        activate();

        function activate() {
        }
    }
})();