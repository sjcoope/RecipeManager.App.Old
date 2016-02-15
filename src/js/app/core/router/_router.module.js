var RecipeManager;
(function (RecipeManager) {
    var App;
    (function (App) {
        var Core;
        (function (Core) {
            var Router;
            (function (Router) {
                var routeModule = angular.module('RecipeManager.App.Core.Router', [
                    'ngRoute'
                ]);
                routeModule.config(routeModuleConfig);
                routeModuleConfig.$inject = ['$routeProvider'];
                function routeModuleConfig($routeProvider) {
                    // TODO: Get this from API?  Then when logged on navigation options will change?
                    [
                        {
                            config: {
                                controller: 'WelcomeCtrl',
                                controllerAs: 'vm',
                                templateUrl: './src/app/areas/welcome/welcome.html',
                                title: 'Welcome',
                            },
                            url: '/',
                        },
                        {
                            config: {
                                controller: 'RecipesCtrl',
                                controllerAs: 'vm',
                                templateUrl: './src/app/areas/recipes/recipes.html',
                                title: 'Features',
                            },
                            url: '/recipes',
                        },
                    ].forEach(function (route) {
                        $routeProvider.when(route.url, route.config);
                    });
                    $routeProvider.otherwise({ redirectTo: '/' });
                }
                routeModule.run(routeModuleRun);
                routeModuleRun.$inject = ['$route'];
                function routeModuleRun($route) {
                    console.log('Routes module has started...');
                }
            })(Router = Core.Router || (Core.Router = {}));
        })(Core = App.Core || (App.Core = {}));
    })(App = RecipeManager.App || (RecipeManager.App = {}));
})(RecipeManager || (RecipeManager = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL3JvdXRlci9fcm91dGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6WyJSZWNpcGVNYW5hZ2VyIiwiUmVjaXBlTWFuYWdlci5BcHAiLCJSZWNpcGVNYW5hZ2VyLkFwcC5Db3JlIiwiUmVjaXBlTWFuYWdlci5BcHAuQ29yZS5Sb3V0ZXIiLCJSZWNpcGVNYW5hZ2VyLkFwcC5Db3JlLlJvdXRlci5yb3V0ZU1vZHVsZUNvbmZpZyIsIlJlY2lwZU1hbmFnZXIuQXBwLkNvcmUuUm91dGVyLnJvdXRlTW9kdWxlUnVuIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFPLGFBQWEsQ0F3Q25CO0FBeENELFdBQU8sYUFBYTtJQUFDQSxJQUFBQSxHQUFHQSxDQXdDdkJBO0lBeENvQkEsV0FBQUEsR0FBR0E7UUFBQ0MsSUFBQUEsSUFBSUEsQ0F3QzVCQTtRQXhDd0JBLFdBQUFBLElBQUlBO1lBQUNDLElBQUFBLE1BQU1BLENBd0NuQ0E7WUF4QzZCQSxXQUFBQSxNQUFNQSxFQUFDQSxDQUFDQTtnQkFDbENDLElBQUlBLFdBQVdBLEdBQUdBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLCtCQUErQkEsRUFBRUE7b0JBQzlEQSxTQUFTQTtpQkFDWkEsQ0FBQ0EsQ0FBQ0E7Z0JBRUhBLFdBQVdBLENBQUNBLE1BQU1BLENBQUNBLGlCQUFpQkEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3RDQSxpQkFBaUJBLENBQUNBLE9BQU9BLEdBQUdBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0E7Z0JBQy9DQSwyQkFBMkJBLGNBQXVDQTtvQkFFOURDLGdGQUFnRkE7b0JBQ2hGQTt3QkFDSUE7NEJBQ0lBLE1BQU1BLEVBQUVBO2dDQUNKQSxVQUFVQSxFQUFFQSxhQUFhQTtnQ0FDekJBLFlBQVlBLEVBQUVBLElBQUlBO2dDQUNsQkEsV0FBV0EsRUFBRUEsc0NBQXNDQTtnQ0FDbkRBLEtBQUtBLEVBQUVBLFNBQVNBOzZCQUNuQkE7NEJBQ0RBLEdBQUdBLEVBQUVBLEdBQUdBO3lCQUNYQTt3QkFDREE7NEJBQ0lBLE1BQU1BLEVBQUVBO2dDQUNKQSxVQUFVQSxFQUFFQSxhQUFhQTtnQ0FDekJBLFlBQVlBLEVBQUVBLElBQUlBO2dDQUNsQkEsV0FBV0EsRUFBRUEsc0NBQXNDQTtnQ0FDbkRBLEtBQUtBLEVBQUVBLFVBQVVBOzZCQUNwQkE7NEJBQ0RBLEdBQUdBLEVBQUVBLFVBQVVBO3lCQUNsQkE7cUJBQ0pBLENBQUNBLE9BQU9BLENBQUNBLFVBQVNBLEtBQUtBO3dCQUNwQixjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNqRCxDQUFDLENBQUNBLENBQUNBO29CQUNIQSxjQUFjQSxDQUFDQSxTQUFTQSxDQUFDQSxFQUFDQSxVQUFVQSxFQUFFQSxHQUFHQSxFQUFDQSxDQUFDQSxDQUFDQTtnQkFDaERBLENBQUNBO2dCQUVERCxXQUFXQSxDQUFDQSxHQUFHQSxDQUFDQSxjQUFjQSxDQUFDQSxDQUFDQTtnQkFDaENBLGNBQWNBLENBQUNBLE9BQU9BLEdBQUdBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBO2dCQUNwQ0Esd0JBQXdCQSxNQUErQkE7b0JBQ25ERSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSw4QkFBOEJBLENBQUNBLENBQUNBO2dCQUNoREEsQ0FBQ0E7WUFDTEYsQ0FBQ0EsRUF4QzZCRCxNQUFNQSxHQUFOQSxXQUFNQSxLQUFOQSxXQUFNQSxRQXdDbkNBO1FBQURBLENBQUNBLEVBeEN3QkQsSUFBSUEsR0FBSkEsUUFBSUEsS0FBSkEsUUFBSUEsUUF3QzVCQTtJQUFEQSxDQUFDQSxFQXhDb0JELEdBQUdBLEdBQUhBLGlCQUFHQSxLQUFIQSxpQkFBR0EsUUF3Q3ZCQTtBQUFEQSxDQUFDQSxFQXhDTSxhQUFhLEtBQWIsYUFBYSxRQXdDbkIiLCJmaWxlIjoiYXBwL2NvcmUvcm91dGVyL19yb3V0ZXIubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
