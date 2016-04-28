'use strict';

storeApp.controller("mainController", function($scope, $http) {

    var model = $http.get("http://localhost:8012/api/webstore_v1/product.json");

    $scope.cart = new shoppingCart("AngularStore");

    model.success(function(personData) {
        $scope.store = [];

        for(var i = 0; i < personData.objects.length; i++)
        {
            var product = personData.objects[i];
            $scope.store.push({ name: product.name, price: product.cost, done: false, sku: product.article });
        }
    });
});