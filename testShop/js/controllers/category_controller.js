function CatController($scope, $routeParams, $http)
{
    //$scope.data = $routeParams.category;
    var categoryName = $routeParams.category;
    var categoryPath = 'http://localhost:8012'/* + window['temp'].map[categoryName]*/;

    var model = $http.get(categoryPath);
    model.success(function(personData) {
        $scope.data = $routeParams.category;
    });
}