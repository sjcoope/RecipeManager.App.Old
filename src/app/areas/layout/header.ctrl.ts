module RecipeManager.App.Areas.Layout {
    'use strict';

    class HeaderCtrl {
        constructor() {
           console.log('HeaderCtrl Loaded...');
        }
    }

    angular
        .module('RecipeManager.App.Areas.Layout')
        .controller('HeaderCtrl', HeaderCtrl);
}
