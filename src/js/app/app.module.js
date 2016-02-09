var RecipeManager;
(function (RecipeManager) {
    var App;
    (function (App) {
        'use strict';
        var appModule = angular.module('RecipeManager.App', [
            // Custom Core Modules
            'RecipeManager.App.Core',
            'RecipeManager.App.Core.Router',
            // Custom Area Modules
            'RecipeManager.App.Areas.Layout',
        ]);
        appModule.run(appModuleRun);
        function appModuleRun() {
            console.log('RecipeManager application started...');
        }
    })(App = RecipeManager.App || (RecipeManager.App = {}));
})(RecipeManager || (RecipeManager = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbIlJlY2lwZU1hbmFnZXIiLCJSZWNpcGVNYW5hZ2VyLkFwcCIsIlJlY2lwZU1hbmFnZXIuQXBwLmFwcE1vZHVsZVJ1biJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTyxhQUFhLENBa0JuQjtBQWxCRCxXQUFPLGFBQWE7SUFBQ0EsSUFBQUEsR0FBR0EsQ0FrQnZCQTtJQWxCb0JBLFdBQUFBLEdBQUdBLEVBQUNBLENBQUNBO1FBQ3RCQyxZQUFZQSxDQUFDQTtRQUViQSxJQUFJQSxTQUFTQSxHQUFHQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxtQkFBbUJBLEVBQUVBO1lBQzVDQSxzQkFBc0JBO1lBQ3RCQSx3QkFBd0JBO1lBQ3hCQSwrQkFBK0JBO1lBRS9CQSxzQkFBc0JBO1lBQ3RCQSxnQ0FBZ0NBO1NBR3ZDQSxDQUFDQSxDQUFDQTtRQUVIQSxTQUFTQSxDQUFDQSxHQUFHQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQTtRQUM1QkE7WUFDSUMsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0Esc0NBQXNDQSxDQUFDQSxDQUFDQTtRQUN4REEsQ0FBQ0E7SUFDTEQsQ0FBQ0EsRUFsQm9CRCxHQUFHQSxHQUFIQSxpQkFBR0EsS0FBSEEsaUJBQUdBLFFBa0J2QkE7QUFBREEsQ0FBQ0EsRUFsQk0sYUFBYSxLQUFiLGFBQWEsUUFrQm5CIiwiZmlsZSI6ImFwcC9hcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
