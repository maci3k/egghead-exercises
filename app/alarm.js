(function ()
{
    'use strict';
    var app = angular.module('app', []);

    app.directive('alarm', function() {
        return {
            restrict: 'A',
            controller: function () {
                this.addRed = function () {
                    alert('Red alarm!');
                };

                this.addYellow = function () {
                    alert('Yellow alarm!');
                };

                this.addGreen = function () {
                    alert('Green alarm!');
                };
            }
        };
    });

    app.directive('red', function() {
        return {
            require: 'alarm',
            link: function (scope, element, attrs, alarmCtrl) {
                element.bind('click', function () {
                    alarmCtrl.addRed();
                });
            }
        };
    });

    app.directive('yellow', function() {
        return {
            require: 'alarm',
            link: function (scope, element, attrs, alarmCtrl) {
                element.bind('dblclick', function () {
                    alarmCtrl.addYellow();
                });
            }
        };
    });

    app.directive('green', function() {
        return {
            require: 'alarm',
            link: function (scope, element, attrs, alarmCtrl) {
                element.bind('mouseenter', function () {
                    alarmCtrl.addGreen();
                });
            }
        };
    });

})();
