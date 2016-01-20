(function () {
    'use strict';

    angular
        .module('RecipeManager.App.Welcome')
        .controller('FeaturesCtrl', FeaturesCtrl);

    function FeaturesCtrl()
    {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;

        activate();

        function activate() {
        }
    }
})();