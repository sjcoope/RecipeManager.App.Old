module RecipeManager.App {
    'use strict';

    let appModule = angular.module('RecipeManager.App', [
            // Custom Core Modules
            'RecipeManager.App.Core',
            'RecipeManager.App.Core.Router',

            // Custom Area Modules
            'RecipeManager.App.Areas.Layout',
            // 'RecipeManager.App.Areas.Welcome',
            // 'RecipeManager.App.Areas.Recipes',
    ]);

    appModule.run(appModuleRun);
    function appModuleRun(): void {
        console.log('RecipeManager application started...');
    }
}
