'use strict';

angular.module('jmj.diretivas')
    .directive('jmjPanelLabel', function() {
        return {
            restrict: 'E',
            template: 'panelLabel/view.html',
            scope: {
                label: '@',
                icon: '@'
            },
            transclude : true
        };
    });
