(function ()
{
    'use strict';

    var app = angular.module('app', ['ngRoute']);

    app.run(function ($templateCache, $http) {
        $http.get('home.html', {cache: $templateCache});
    });

    app.config(function ($routeProvider) {
        $routeProvider.when('/',
            {
                controller: 'RouteCtrl',
                templateUrl: 'home.html'
            }
        );
    });

    app.controller('RouteCtrl', function ($scope)
    {
        $scope.$root.condition = true;
        this.buttonName = 'Click to show!';

        this.display = function ()
        {
            this.message = this.message ? '' : 'I came from a RouteCtrl';
            this.buttonName = this.message === '' ? 'Click to show!' : 'Click to hide!';

        };
        $scope.routing = this;
    });
})();
