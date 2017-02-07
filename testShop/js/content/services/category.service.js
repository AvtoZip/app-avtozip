(function () {
    'use strict';

    angular
        .module('shopApp.content.services')
        .factory('CategoryService', CategoryService);

    CategoryService.$inject = ['$http'];

    function CategoryService($http) {
        this.getCategories = function () {
            var promise = $http.get("http://localhost:8012/api/webstore_v1/productcategory.json");
            promise.success(function (personData) {
                return personData.data;
            });

            return promise;
        };
        return this;
    }
})();