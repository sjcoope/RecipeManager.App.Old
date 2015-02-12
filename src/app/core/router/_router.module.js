(function () {
    'use strict';

    var app = angular.module('RecipeManager.App.Routing', [
        // Angular Modules
        'ngRoute',
    ]);

    app.config(['$routeProvider', function($routeProvider) {

        // TODO: Get this from API?  Then when logged on navigation options will change?
        var routes = [
            {
                url: '/',
                config: {
                    templateUrl: 'app/areas/welcome/welcome.html',
                    controller: 'WelcomeCtrl',
                    controllerAs: 'vm',
                    title: 'Welcome'
                }
            },
            {
                url: '/features',
                config: {
                    templateUrl: 'app/areas/welcome/features.html',
                    controller: 'FeaturesCtrl',
                    controllerAs: 'vm',
                    title: 'Features'
                }
            },
            {
                url: '/about',
                config: {
                    templateUrl: 'app/areas/welcome/about.html',
                    controller: 'AboutCtrl',
                    controllerAs: 'vm',
                    title: 'About'
                }
            }
        ];

        routes.forEach(function(route) {
            $routeProvider.when(route.url, route.config);
        });
        $routeProvider.otherwise({redirectTo: '/'});
    }]);

    app.run(['$route', function($route) {
        $route.reload();
        console.log('Routes Module has started....');
    }]);

})();