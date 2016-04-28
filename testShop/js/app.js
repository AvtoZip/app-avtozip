'use strict';

var storeApp = angular.module('AngularStore', ['ngRoute']);

storeApp.config(['$routeProvider', function($routeProvider) {
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
      otherwise({
        redirectTo: '/store'
      });
}]);
