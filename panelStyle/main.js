define(['text!extensions/diretivas/panelStyle/view.html'], function (view) {

    'use strict';

    var thisComponent = {

        name: 'jmjPanelStyle',

        directives: {
            filtro: ['jmjPanelStyle', customDirective]
        }
    };

    function customDirective() {
        return {
            restrict: 'E',
            template: view,
            scope:{
                style: '@'
            },
            transclude : true
        };
    }

    return {
        initialize: function () {
            return thisComponent;
        }
    };

});
