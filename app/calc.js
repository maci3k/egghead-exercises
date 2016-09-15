(function ()
{
    'use strict';

    var calcApp = angular.module('calcApp', []);

    // SumCtrl
    calcApp.controller('SumCtrl', function($scope) {
        $scope.firstNumberSum = 12;
        $scope.secondNumberSum = 1;

        this.sum = 'Click the button and your question will be answered';

        this.firstNumber = $scope.firstNumberSum;
        this.secondNumber = $scope.secondNumberSum;

        this.addition = function(first, second) {
            this.sum = first + second;
        };

        return $scope.SumCtrl= this;
    });
    // SubCtrl
    calcApp.controller('SubCtrl', function($scope) {
        $scope.firstNumberSub = 12;
        $scope.secondNumberSub = 1;

        this.firstNumber = $scope.firstNumberSub;
        this.secondNumber = $scope.secondNumberSub;

        this.sub = 'Click the button and your question will be answered';

        this.subtraction = function(first, second) {
            this.sub = first - second;
        };

        return $scope.SubCtrl = this;
    });

})();
