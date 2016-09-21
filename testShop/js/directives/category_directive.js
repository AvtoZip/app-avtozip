storeApp.directive("userCategory", function (CategoryService) {
    return {
        restrict: 'E',
        replace: true,
        scope: {},
        templateUrl: 'templates/category.htm',
        controller: function ($scope) {
            var t = this;
            CategoryService.getCategories().then(function (data) {
                t.categories = convertCategories(data.data.objects);
                $scope.my_data = {};
            });
        },
        controllerAs: "category"
    }
});