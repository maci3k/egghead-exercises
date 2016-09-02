var myApp = angular.module('app',[]);

myApp.controller('FruitCtrl', ['$scope', function ($scope) {
    'use strict';
    var seller = 'Mr. John';
    var name = 'apple';
    var count = 3;

    $scope.seller = seller;
    $scope.name = name;
    $scope.count = count;
}]);