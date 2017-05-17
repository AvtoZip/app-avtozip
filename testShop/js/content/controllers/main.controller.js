(function () {
    'use strict';

    angular
        .module('shopApp.content.controllers')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope', '$routeParams', '$http', 'CategoryService'];


    function MainController($scope, $routeParams, $http, CategoryService) {
        var callback = function (data) {
            if(data){
                window["CCategoryStore"].convertCategories(data.data.objects);
            }


            var queryStr;
            var categoryId, categoryName;
            if ($routeParams.category) {
                var pathArr = $routeParams.category.split("/");
                if(pathArr.length)
                {
                    categoryName = pathArr[pathArr.length - 1];
                    categoryId = window["CCategoryStore"].nameIdMap[categoryName];
                    queryStr = "?category=" + categoryId;
                }
            }
            else if ($routeParams.search) {
                queryStr = "?query=" + $routeParams.search.split("?")[1];
            }

            var path = "http://localhost:8012/api/webstore_v1/product.json" + queryStr;
            $scope.cart = new shoppingCart();



            var bCategory = false;
            if ($routeParams.category) {
                //find children

                var categoryIdMap = window["CCategoryStore"].idMap;
                var nameIdMap = window["CCategoryStore"].nameIdMap;
                /*var childId = branch.id;
                var fullPath = window["CCategoryStore"].idNameMap[childId];
                while(categoryIdMap[childId].parent){
                    childId = window["CCategoryStore"].resourseIdMap[categoryIdMap[branch.id].parent];
                    fullPath = window["CCategoryStore"].idNameMap[childId] + "/" + fullPath;
                }*/

                var children = window["CCategoryStore"].getChildren(categoryId);
                if (children && children.length) {
                    bCategory = true;

                    $scope.store = [];
                    for (var i = 0; i < children.length; i++) {
                        var fullPath = children[i].name;
                        var childId = nameIdMap[children[i].name];
                        while(categoryIdMap[childId].parent){
                            childId = window["CCategoryStore"].resourseIdMap[categoryIdMap[childId].parent];
                            fullPath = window["CCategoryStore"].idNameMap[childId] + "/" + fullPath;
                        }
                        $scope.store.push({name: children[i].name, fullPath: fullPath});
                    }
                }
            }

            if (bCategory) {
                $scope.store.bCategory = true;
            }
            else {
                var model = $http.get(path);
                model.success(function(personData) {
                     $scope.store = [];

                     for (var i = 0; i < personData.objects.length; i++) {
                         var product = personData.objects[i];
                             $scope.store.push({
                             name: product.name,
                             price: product.cost,
                             done: false,
                             sku: product.article
                         });
                     }
                });
            }
        };

        window["CCategoryStore"].getCategories(CategoryService, callback);
    }
})();
