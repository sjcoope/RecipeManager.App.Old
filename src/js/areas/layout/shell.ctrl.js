var RecipeManager;
(function (RecipeManager) {
    var App;
    (function (App) {
        var Areas;
        (function (Areas) {
            var Layout;
            (function (Layout) {
                'use strict';
                var ShellCtrl = (function () {
                    function ShellCtrl() {
                        console.log('ShellCtrl Loaded...');
                    }
                    return ShellCtrl;
                })();
                angular
                    .module('RecipeManager.App.Areas.Layout')
                    .controller('ShellCtrl', ShellCtrl);
            })(Layout = Areas.Layout || (Areas.Layout = {}));
        })(Areas = App.Areas || (App.Areas = {}));
    })(App = RecipeManager.App || (RecipeManager.App = {}));
})(RecipeManager || (RecipeManager = {}));
