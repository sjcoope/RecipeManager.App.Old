var RecipeManager;
(function (RecipeManager) {
    var App;
    (function (App) {
        var Areas;
        (function (Areas) {
            var Layout;
            (function (Layout) {
                'use strict';
                var NavigationCtrl = (function () {
                    function NavigationCtrl() {
                        console.log('NavigationCtrl Loaded...');
                    }
                    return NavigationCtrl;
                })();
                angular
                    .module('RecipeManager.App.Areas.Layout')
                    .controller('NavigationCtrl', NavigationCtrl);
            })(Layout = Areas.Layout || (Areas.Layout = {}));
        })(Areas = App.Areas || (App.Areas = {}));
    })(App = RecipeManager.App || (RecipeManager.App = {}));
})(RecipeManager || (RecipeManager = {}));
