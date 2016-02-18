define(['text!extensions/diretivas/dateInputLabel/view.html'], function (view) {

    'use strict';

    var thisComponent = {

        name: 'jmjDateInputLabel',

        directives: {
            filtro: ['jmjDateInputLabel', customDirective]
        }

    };

    function customDirective() {
        return {
            restrict: 'E',
            template: view,
            scope : {
                label : '@',
                idinput: '@',
                maxlength: '@',
                minlength: '@',
                placeholder: '@',
                pattern: '@',
                model : '=',
                disabled : '@'
            }
        };
    }

    return {

        initialize: function () {
            return thisComponent;
        }

    };

});
