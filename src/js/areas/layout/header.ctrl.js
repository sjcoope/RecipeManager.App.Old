var RecipeManager;
(function (RecipeManager) {
    var App;
    (function (App) {
        var Areas;
        (function (Areas) {
            var Layout;
            (function (Layout) {
                'use strict';
                var HeaderCtrl = (function () {
                    function HeaderCtrl() {
                        console.log('HeaderCtrl Loaded...');
                    }
                    return HeaderCtrl;
                })();
                angular
                    .module('RecipeManager.App.Areas.Layout')
                    .controller('HeaderCtrl', HeaderCtrl);
            })(Layout = Areas.Layout || (Areas.Layout = {}));
        })(Areas = App.Areas || (App.Areas = {}));
    })(App = RecipeManager.App || (RecipeManager.App = {}));
})(RecipeManager || (RecipeManager = {}));
