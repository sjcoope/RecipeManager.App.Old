module RecipeManager.App.Core.Router {
    var routeModule = angular.module('RecipeManager.App.Core.Router', [
        'ngRoute'
    ]);
    
    routeModule.config(routeModuleConfig);
    
    routeModuleConfig.$inject = ['$routeProvider'];
    function routeModuleConfig($routeProvider: ng.route.IRouteProvider) : void {
        
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
    }
    
    routeModule.run(routeModuleRun);
    function routeModuleRun() : void {
        console.log('Routes module has started...');
    }
    
    // routeModule.$inject = '[$route]';
    // function routeModuleRun($route : ng.route.IRouteProvider) : void {
    //     $route.reload();
    //     console.log('Routes Module has started....');
    // }
}