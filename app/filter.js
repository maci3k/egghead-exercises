(function ()
{
    'use strict';
    var app = angular.module('app', []);

//add quote filter
    app.filter('quote', function() {
        return function(text) {
            return '\"' + text + '\"';
        };
    });
//add withoutH filter
    app.filter('withoutH', function() {
        return function(text) {
            return text.split(/h|H/).join('');
        };
    });
//add firstLetterUp filter
    app.filter('firstLetterUp', function() {
        return function(text) {
            var array = text.split(' ');

            for(var i=0; i<array.length; i++) {
                array[i] = array[i].substring(0, 1).toUpperCase() + array[i].substring(1);
            }

            array = array.join(' ').split('-');

            for(i=0; i<array.length; i++) {
                array[i] = array[i].substring(0, 1).toUpperCase() + array[i].substring(1);
            }

            return array.join('-');
        };
    });

    app.controller('FilterCtrl', function ($scope)
    {
        $scope.data = {
            citation: 'To be, or not to be...',
            title: 'The Hobbit: The Battle of the Five Armies',
            someText: 'Visit News for up-to-the-minute news, breaking news, video, audio and stories.'
        };
    });
})();
