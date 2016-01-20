(function () {
    'use strict';

    angular
        .module('RecipeManager.App.Layout')
        .controller('HeaderCtrl', HeaderCtrl);

    function HeaderCtrl() {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;

        activate();

        function activate() {
        }
    }
})();