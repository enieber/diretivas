'use strict';

angular.module('jmj.diretivas')
    .directive('jmjTextLabel', function() {
        return {
            restrict: 'E',
            template: 'textLabel/view.html',
            scope: {
                label: '@',
                id: '@',
                maxlength: '@',
                minlength: '@',
                placeholder: '@',
                pattern: '@',
                model: '=',
                disabled : '@',
                required: '@'
            }
        };
    });