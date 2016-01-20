/* jshint ignore: start */
// TODO: Remove ignore when implemented.
(function () {
    'use strict';

    angular
        .module('RecipeManager.Data')
        .factory('BaseRepository', BaseRepository);

    function BaseRepository() {

        function Ctor() {

        }

        Ctor.prototype.assetType = 'NotSet';

        Ctor.prototype.all = function() {

        };

        Ctor.prototype.add = function(entity) {

        };

        Ctor.prototype.update = function(entity) {

        };

        Ctor.prorotype.delete = function(entity) {

        };
    }
})();