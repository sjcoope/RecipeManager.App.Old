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
