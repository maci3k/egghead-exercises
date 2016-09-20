(function ()
{
    'use strict';

    var app = angular.module('app', ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/',
            {
                templateUrl: 'views/home.html',
                controller: 'homeCtrl'
            })
            .when('/details/:brand/:capacity',
            {
                templateUrl: 'views/details.html',
                controller: 'routeCtrl',
                redirectTo: function(routeParams) {
                    if(routeParams.brand === 'spy' || routeParams.capacity === 'spy') {
                        return '/' + 'secret';
                    }
                }
            })
            .when('/secret', {
                templateUrl: 'views/secret.html'
            });
    });

    app.controller('homeCtrl', function ($scope)
    {
        $scope.car = {brand: 'Ferrari', capacity: 3.5};
    });

    app.controller('routeCtrl', function ($scope, $routeParams)
    {
        $scope.brand = $routeParams.brand;
        $scope.capacity = $routeParams.capacity;
    });
})();
