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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvcm91dGVyL19yb3V0ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbIlJlY2lwZU1hbmFnZXIiLCJSZWNpcGVNYW5hZ2VyLkFwcCIsIlJlY2lwZU1hbmFnZXIuQXBwLkNvcmUiLCJSZWNpcGVNYW5hZ2VyLkFwcC5Db3JlLlJvdXRlciIsIlJlY2lwZU1hbmFnZXIuQXBwLkNvcmUuUm91dGVyLnJvdXRlTW9kdWxlQ29uZmlnIiwiUmVjaXBlTWFuYWdlci5BcHAuQ29yZS5Sb3V0ZXIucm91dGVNb2R1bGVSdW4iXSwibWFwcGluZ3MiOiJBQUFBLElBQU8sYUFBYSxDQXdDbkI7QUF4Q0QsV0FBTyxhQUFhO0lBQUNBLElBQUFBLEdBQUdBLENBd0N2QkE7SUF4Q29CQSxXQUFBQSxHQUFHQTtRQUFDQyxJQUFBQSxJQUFJQSxDQXdDNUJBO1FBeEN3QkEsV0FBQUEsSUFBSUE7WUFBQ0MsSUFBQUEsTUFBTUEsQ0F3Q25DQTtZQXhDNkJBLFdBQUFBLE1BQU1BLEVBQUNBLENBQUNBO2dCQUNsQ0MsSUFBSUEsV0FBV0EsR0FBR0EsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsK0JBQStCQSxFQUFFQTtvQkFDOURBLFNBQVNBO2lCQUNaQSxDQUFDQSxDQUFDQTtnQkFFSEEsV0FBV0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxDQUFDQTtnQkFDdENBLGlCQUFpQkEsQ0FBQ0EsT0FBT0EsR0FBR0EsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxDQUFDQTtnQkFDL0NBLDJCQUEyQkEsY0FBdUNBO29CQUU5REMsZ0ZBQWdGQTtvQkFDaEZBO3dCQUNJQTs0QkFDSUEsTUFBTUEsRUFBRUE7Z0NBQ0pBLFVBQVVBLEVBQUVBLGFBQWFBO2dDQUN6QkEsWUFBWUEsRUFBRUEsSUFBSUE7Z0NBQ2xCQSxXQUFXQSxFQUFFQSxzQ0FBc0NBO2dDQUNuREEsS0FBS0EsRUFBRUEsU0FBU0E7NkJBQ25CQTs0QkFDREEsR0FBR0EsRUFBRUEsR0FBR0E7eUJBQ1hBO3dCQUNEQTs0QkFDSUEsTUFBTUEsRUFBRUE7Z0NBQ0pBLFVBQVVBLEVBQUVBLGFBQWFBO2dDQUN6QkEsWUFBWUEsRUFBRUEsSUFBSUE7Z0NBQ2xCQSxXQUFXQSxFQUFFQSxzQ0FBc0NBO2dDQUNuREEsS0FBS0EsRUFBRUEsVUFBVUE7NkJBQ3BCQTs0QkFDREEsR0FBR0EsRUFBRUEsVUFBVUE7eUJBQ2xCQTtxQkFDSkEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBU0EsS0FBS0E7d0JBQ3BCLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ2pELENBQUMsQ0FBQ0EsQ0FBQ0E7b0JBQ0hBLGNBQWNBLENBQUNBLFNBQVNBLENBQUNBLEVBQUNBLFVBQVVBLEVBQUVBLEdBQUdBLEVBQUNBLENBQUNBLENBQUNBO2dCQUNoREEsQ0FBQ0E7Z0JBRURELFdBQVdBLENBQUNBLEdBQUdBLENBQUNBLGNBQWNBLENBQUNBLENBQUNBO2dCQUNoQ0EsY0FBY0EsQ0FBQ0EsT0FBT0EsR0FBR0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3BDQSx3QkFBd0JBLE1BQStCQTtvQkFDbkRFLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLDhCQUE4QkEsQ0FBQ0EsQ0FBQ0E7Z0JBQ2hEQSxDQUFDQTtZQUNMRixDQUFDQSxFQXhDNkJELE1BQU1BLEdBQU5BLFdBQU1BLEtBQU5BLFdBQU1BLFFBd0NuQ0E7UUFBREEsQ0FBQ0EsRUF4Q3dCRCxJQUFJQSxHQUFKQSxRQUFJQSxLQUFKQSxRQUFJQSxRQXdDNUJBO0lBQURBLENBQUNBLEVBeENvQkQsR0FBR0EsR0FBSEEsaUJBQUdBLEtBQUhBLGlCQUFHQSxRQXdDdkJBO0FBQURBLENBQUNBLEVBeENNLGFBQWEsS0FBYixhQUFhLFFBd0NuQiIsImZpbGUiOiJjb3JlL3JvdXRlci9fcm91dGVyLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZSBSZWNpcGVNYW5hZ2VyLkFwcC5Db3JlLlJvdXRlciB7XHJcbiAgICBsZXQgcm91dGVNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnUmVjaXBlTWFuYWdlci5BcHAuQ29yZS5Sb3V0ZXInLCBbXHJcbiAgICAgICAgJ25nUm91dGUnXHJcbiAgICBdKTtcclxuICAgIFxyXG4gICAgcm91dGVNb2R1bGUuY29uZmlnKHJvdXRlTW9kdWxlQ29uZmlnKTtcclxuICAgIHJvdXRlTW9kdWxlQ29uZmlnLiRpbmplY3QgPSBbJyRyb3V0ZVByb3ZpZGVyJ107XHJcbiAgICBmdW5jdGlvbiByb3V0ZU1vZHVsZUNvbmZpZygkcm91dGVQcm92aWRlcjogbmcucm91dGUuSVJvdXRlUHJvdmlkZXIpOiB2b2lkIHtcclxuICAgICAgICBcclxuICAgICAgICAvLyBUT0RPOiBHZXQgdGhpcyBmcm9tIEFQST8gIFRoZW4gd2hlbiBsb2dnZWQgb24gbmF2aWdhdGlvbiBvcHRpb25zIHdpbGwgY2hhbmdlP1xyXG4gICAgICAgIFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1dlbGNvbWVDdHJsJyxcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3NyYy9hcHAvYXJlYXMvd2VsY29tZS93ZWxjb21lLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnV2VsY29tZScsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnLycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdSZWNpcGVzQ3RybCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi9zcmMvYXBwL2FyZWFzL3JlY2lwZXMvcmVjaXBlcy5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0ZlYXR1cmVzJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvcmVjaXBlcycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXS5mb3JFYWNoKGZ1bmN0aW9uKHJvdXRlKSB7XHJcbiAgICAgICAgICAgICRyb3V0ZVByb3ZpZGVyLndoZW4ocm91dGUudXJsLCByb3V0ZS5jb25maWcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICRyb3V0ZVByb3ZpZGVyLm90aGVyd2lzZSh7cmVkaXJlY3RUbzogJy8nfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJvdXRlTW9kdWxlLnJ1bihyb3V0ZU1vZHVsZVJ1bik7XHJcbiAgICByb3V0ZU1vZHVsZVJ1bi4kaW5qZWN0ID0gWyckcm91dGUnXTtcclxuICAgIGZ1bmN0aW9uIHJvdXRlTW9kdWxlUnVuKCRyb3V0ZTogbmcucm91dGUuSVJvdXRlUHJvdmlkZXIpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnUm91dGVzIG1vZHVsZSBoYXMgc3RhcnRlZC4uLicpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
