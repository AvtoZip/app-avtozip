'use strict';

var storeApp = angular.module('AngularStore', ['ngRoute', 'angularBootstrapNavTree']);

storeApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/store', {
        templateUrl: 'templates/store.htm'
    }).
    when('/products/:productSku', {
        templateUrl: 'templates/product.htm'
    }).
    when('/cart', {
        templateUrl: 'templates/shoppingCart.htm'
    }).
    when('/cat/:category', {
        templateUrl: 'templates/category.htm',
        controller: CatController
    }).
    otherwise({
        redirectTo: '/store'
    });
}]);