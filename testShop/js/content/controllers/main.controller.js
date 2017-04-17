(function () {
    'use strict';

    angular
        .module('shopApp.content.controllers')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope', '$routeParams', '$http'];


    function MainController($scope, $routeParams, $http) {
        var queryStr;
        if($routeParams.category){
            queryStr = "?category=" + $routeParams.category;
        }
        else if($routeParams.search){
            queryStr = "?query=" + $routeParams.search.split("?")[1];
        }

        var path = "http://localhost:8012/api/webstore_v1/product.json" + queryStr;
        var model = $http.get(path);
        $scope.cart = new shoppingCart();

        model.success(function(personData) {
            $scope.store = [];

            for(var i = 0; i < personData.objects.length; i++)
            {
                var product = personData.objects[i];
                $scope.store.push({ name: product.name, price: product.cost, done: false, sku: product.article });
            }
        });
    }
})();
