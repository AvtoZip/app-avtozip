storeApp.service("CategoryService", function ($http) {
    this.getCategories = function () {
        var promise = $http.get("http://localhost:8012/api/webstore_v1/productcategory.json");
        promise.success(function (personData) {
            return personData.data;
        });

        return promise;
    };
});