function CatController($scope, $routeParams, $http)
{
    //$scope.data = $routeParams.category;
    var categoryName = $routeParams.category;
    var categoryPath = 'http://localhost:8012/api/webstore_v1/product.json' + '?category=' + 2;

    var model = $http.get(categoryPath);
    model.success(function(personData) {
        $scope.data = personData.objects;
    });
}