module RecipeManager.App.Areas.Welcome {
    'use strict';
    
    class WelcomeCtrl {
        
        constructor() {
           console.log('WelcomeCtrl Loaded...');
        }
        
    }
    
    angular
        .module('RecipeManager.App.Areas.Welcome')
        .controller('WelcomeCtrl', WelcomeCtrl);
}
