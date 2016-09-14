(function ()
{
    'use strict';

    var app = angular.module('app', []);

    app.controller('SnowCtrl', function ($scope)
    {
        $scope.snow = [];

        var snow = '';

//    addPetal function
        $scope.addPetal = function() {
            $scope.snow.push(snow);
        };
//    removePetal function
        $scope.removePetal = function() {
            $scope.snow.pop();
        };
    });

//    add enter directive
    app.directive('enter', function() {
        return function (scope, element, attrs) {
            element.bind('mouseenter', function () {
                scope.$apply(attrs.enter);
            });
        };
    });
})();
