(function () {
    'use strict';

    angular
        .module('shopApp.routes')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider.
        when('/store/search:search', {
            templateUrl: 'templates/store.htm',
            controller: 'MainController'
        }).
        when('/store/:category', {
            templateUrl: 'templates/store.htm',
            controller: 'MainController'
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
    }
})();