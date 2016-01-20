var RecipeManager;
(function (RecipeManager) {
    var App;
    (function (App) {
        var appModule = angular.module('RecipeManager.App', [
            // Custom Core Modules
            'RecipeManager.App.Core',
            'RecipeManager.App.Core.Router',
            // Custom Area Modules
            'RecipeManager.App.Areas.Layout'
        ]);
        appModule.run(appModuleRun);
        function appModuleRun() {
            console.log('RecipeManager application started...');
        }
    })(App = RecipeManager.App || (RecipeManager.App = {}));
})(RecipeManager || (RecipeManager = {}));
