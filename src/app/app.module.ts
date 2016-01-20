module RecipeManager.App {
    var appModule = angular.module('RecipeManager.App', [
            // Custom Core Modules
            'RecipeManager.App.Core',
            'RecipeManager.App.Core.Router',

            // Custom Area Modules
            'RecipeManager.App.Areas.Layout'
    ]);
    
    appModule.run(appModuleRun);
    function appModuleRun() : void {
        console.log('RecipeManager application started...');
    }
}