module RecipeManager.App.Areas.Layout {
    'use strict';
    
    class ShellCtrl {
        
        constructor() {
           console.log('ShellCtrl Loaded...');
        }
        
    }
    
    angular
        .module('RecipeManager.App.Areas.Layout')
        .controller('ShellCtrl', ShellCtrl);
}
