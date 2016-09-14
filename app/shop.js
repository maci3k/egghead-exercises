(function ()
{
    'use strict';

    var app = angular.module('app', []);

    app.controller('AppCtrl', function ($scope)
    {
        var sweets = ['Sugar Daddy', 'Nerds', 'Jawbreakers', 'Starburst', 'Milky Way', 'Skittles', 'Jelly Belly'];
        var cakes = ['Banoffee pie', 'Brownie', 'Butter cake', 'Chocolate cake', 'Cupcake', 'Karpatka'];
        $scope.sweets = [];
        $scope.cakes = [];
        $scope.cart = [];

        angular.forEach(sweets, function (sweet)
        {
            $scope.sweets.push({name: sweet});
        });
        angular.forEach(cakes, function (cake)
        {
            $scope.cakes.push({name: cake});
        });

        $scope.buyProduct = function (product)
        {
            if (product != null) {
                $scope.cart.push({name: product});
            }
        };
    });

    app.directive('orderComponent', function ()
    {
        var template = '<div class="panel panel-success text-center"><p class="panel-heading"><strong>I want to buy:</strong></p><div class="panel-body">' +
                '<select class="form-control form-group" ng-options="product.name for product in {{products}}" ng-model="products"><!--select element-->' +
                '</select>' +
                '<div id="buyButton" class="btn btn-success" ng-click="function({product:products.name})"><!--the bottom div-->Buy!</div></div></div>';
        return {
            restrict: 'E',
            scope: {
                function: '&',
                products: '@'
            },
            template: template
        };
    });
})();
