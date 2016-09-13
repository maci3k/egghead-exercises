(function ()
{
    'use strict';
    var app = angular.module('weatherApp');

    app.controller('shipCtrl', function ($scope, WeatherConditions)
    {
//  checkMyBoat function should be used to check if boat is able to depart from port
        $scope.checkMyBoat = function (boat, conditions)
        {
            //alert(boat + ' ' + conditions);
            switch (conditions) {
                case 'stormy':
                    return false;
                case 'windy':
                case 'heavy rain':
                    return boat !== 'Sloop';
                case 'cloudy':
                case 'clear':
                case 'sunny':
                    return true;
                default:
                    return false;
            }
            return false;
        };

//  weatherConditions represent actual conditions API object. Use getCurrentConditions() method to receive current conditions
        $scope.weatherConditions = WeatherConditions;
    });

    app.directive('shipSender', function ()
    {
        return {
            restrict: 'E',
            scope: {
                customCheck: '&',
                conditions: '@'
            },
            template: '<div class="ship relative">' +
            '<div class="bubble" ng-if="answer">Set sails!</div>' + '{{boat}}' +    //value from the select element below should be used to set
                                                                                    // boat model and passed as argument to correct function
            '<div class="col-md-offset-1 col-md-10 align-bottom">' +
            '<select class="form-control" ng-options="item for item in [\'Sloop\', \'Ship\', \'Towboat\', \'Brig\']" ng-model="boat"></select>' +
            '<div id="checkButton" class="btn btn-info voffset"' +
            'ng-click="answer = customCheck({boat:boat, currentConditions: conditions})">Check<!--check button--></div></div></div>'
        };
    });
})();
