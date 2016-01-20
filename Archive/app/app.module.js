(function () {
    'use strict';

    // Test

    var app = angular.module('RecipeManager.App', [
            // Third Party Modules

            // Custom Core Modules
            'RecipeManager.App.Core',
            'RecipeManager.App.Routing',

            // Custom Area Modules
            'RecipeManager.App.Layout',
            'RecipeManager.App.Welcome',

    ]);

    app.run(function() {
        console.log('Angular has started....');
    });

})();