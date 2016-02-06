module RecipeManager.App.Areas.Recipes {
    'use strict';
    
    class RecipesCtrl {
        
        constructor() {
           console.log('RecipesCtrl Loaded...');
        }
        
    }
    
    angular
        .module('RecipeManager.App.Areas.Recipes')
        .controller('RecipesCtrl', RecipesCtrl);
}
