'use strict';

angular.module('jmj.diretivas')
    .directive('jmjPanelStyle', function() {
        return {
            restrict: 'E',
            template: 'panelStyle/view.html',
            scope:{
                style: '@'
            },
            transclude : true
        };
    });