(function () {
    'use strict';

    angular
        .module('shopApp.routes')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider.
        when('/catalog/search:search', {
            templateUrl: 'templates/store.htm',
            controller: 'MainController'
        }).
        when('/catalog/:category*', {
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
            redirectTo: '/catalog'
        });
    }
})();