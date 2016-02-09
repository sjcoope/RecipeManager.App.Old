// module RecipeManager.App.Core.Router {
//     let routeModule = angular.module('RecipeManager.App.Core.Router', [
//         'ngRoute'
//     ]);
//     
//     routeModule.config(routeModuleConfig);
//     routeModuleConfig.$inject = ['$routeProvider'];
//     function routeModuleConfig($routeProvider: ng.route.IRouteProvider): void {
//         
//         // TODO: Get this from API?  Then when logged on navigation options will change?
//         [
//             {
//                 config: {
//                     controller: 'WelcomeCtrl',
//                     controllerAs: 'vm',
//                     templateUrl: './src/app/areas/welcome/welcome.html',
//                     title: 'Welcome',
//                 },
//                 url: '/',
//             },
//             {
//                 config: {
//                     controller: 'RecipesCtrl',
//                     controllerAs: 'vm',
//                     templateUrl: './src/app/areas/recipes/recipes.html',
//                     title: 'Features',
//                 },
//                 url: '/recipes',
//             },
//         ].forEach(function(route) {
//             $routeProvider.when(route.url, route.config);
//         });
//         $routeProvider.otherwise({redirectTo: '/'});
//     }
//     
//     routeModule.run(routeModuleRun);
//     routeModuleRun.$inject = ['$route'];
//     function routeModuleRun($route: ng.route.IRouteProvider): void {
//         console.log('Routes module has started...');
//     }
// }

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL3JvdXRlci9fcm91dGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5Q0FBeUM7QUFDekMsMEVBQTBFO0FBQzFFLG9CQUFvQjtBQUNwQixVQUFVO0FBQ1YsT0FBTztBQUNQLDZDQUE2QztBQUM3QyxzREFBc0Q7QUFDdEQsa0ZBQWtGO0FBQ2xGLFdBQVc7QUFDWCwyRkFBMkY7QUFDM0YsWUFBWTtBQUNaLGdCQUFnQjtBQUNoQiw0QkFBNEI7QUFDNUIsaURBQWlEO0FBQ2pELDBDQUEwQztBQUMxQywyRUFBMkU7QUFDM0Usd0NBQXdDO0FBQ3hDLHFCQUFxQjtBQUNyQiw0QkFBNEI7QUFDNUIsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQiw0QkFBNEI7QUFDNUIsaURBQWlEO0FBQ2pELDBDQUEwQztBQUMxQywyRUFBMkU7QUFDM0UseUNBQXlDO0FBQ3pDLHFCQUFxQjtBQUNyQixtQ0FBbUM7QUFDbkMsaUJBQWlCO0FBQ2pCLHNDQUFzQztBQUN0Qyw0REFBNEQ7QUFDNUQsY0FBYztBQUNkLHVEQUF1RDtBQUN2RCxRQUFRO0FBQ1IsT0FBTztBQUNQLHVDQUF1QztBQUN2QywyQ0FBMkM7QUFDM0MsdUVBQXVFO0FBQ3ZFLHVEQUF1RDtBQUN2RCxRQUFRO0FBQ1IsSUFBSSIsImZpbGUiOiJhcHAvY29yZS9yb3V0ZXIvX3JvdXRlci5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
