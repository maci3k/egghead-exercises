(function ()
{
    'use strict';

    var element = angular.module('elementApp', []);

    element.directive('findElement', function ()
    {
        var h4 = angular.element('<h4></h4>');

        var link = function (scope)
        {
            scope.$watch('input', function(value) {
                switch(value) {
                    case 'circle':
                        h4.removeClass('text-danger');
                        h4.removeClass('square');
                        h4.text('');

                        h4.addClass('circle');
                        break;
                    case 'square':
                        h4.removeClass('text-danger');
                        h4.removeClass('circle');
                        h4.text('');

                        h4.addClass('square');
                        break;
                    default:
                        h4.removeClass('circle');
                        h4.removeClass('square');

                        h4.addClass('text-danger');
                        h4.text('You did not enter *circle* or *square*');
                        break;
                }
            });
        };

        return {
            retrict: 'E',
            replace: true,
            template: '<div> <input class="form-control" type="text" ng-model="input" placeholder="Write circle or square"></div>',
            compile: function (templateElement)
            {
                templateElement.append(h4);

                return link;
            }
        };
    });
})();
