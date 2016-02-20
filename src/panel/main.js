'use strict';

angular.module('jmj.diretivas')
    .directive('jmjPanel', function() {
        return {
            restrict: 'E',
            template: 'panel/view.html',
            scope:{
                styleClass: '@'
            },
            transclude : true
        };
    });