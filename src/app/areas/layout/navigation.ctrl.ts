module RecipeManager.App.Areas.Layout {
    'use strict';
    
    class NavigationCtrl {
        
        constructor() {
           console.log('NavigationCtrl Loaded...');
        }
        
    }
    angular
        .module('RecipeManager.App.Areas.Layout')
        .controller('NavigationCtrl', NavigationCtrl);
}