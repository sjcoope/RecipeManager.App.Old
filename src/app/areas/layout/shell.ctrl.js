(function () {
    'use strict';

    angular
        .module('RecipeManager.App.Layout')
        .controller('ShellCtrl', ShellCtrl);

    function ShellCtrl()
    {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;

        activate();

        function activate() {
        }
    }
})();