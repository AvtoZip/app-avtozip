(function () {
    'use strict';

    angular
        .module('shopApp', [
            'shopApp.config',
            'shopApp.routes',
            'shopApp.content',
            'shopApp.navTree'
        ]);

    angular
        .module('shopApp.config', []);
    angular
        .module('shopApp.routes', ['ngRoute']);
    angular
        .module('shopApp.content', []);

    angular
        .module('shopApp')
        .run(run);

    run.$inject = ['$http'];

    function run($http) {
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';
    }
})();