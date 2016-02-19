define(['text!extensions/diretivas/inputLabel/view.html'], function (view) {

    'use strict';

    var thisComponent = {
        name: 'jmjInputLabel',
        directives: {
            filtro: ['jmjInputLabel', customDirective]
        }
    };

    function customDirective() {
        return {
            restrict: 'E',
            template: view,
            scope: {
                label: '@',
                id: '@',
                name: '@',
                maxlength: '@',
                minlength: '@',
                placeholder: '@',
                pattern: '=',
                mensagem: '@',
                tooltip: '@',
                model: '=',
                required: '@',
                disabled : '@',
                styleClass : '@'
            },
            link: function (scope, element, attr) {
                scope.$on('submit', function (scope, form) {
                    if (attr.id) {
                        if (form[attr.id].$invalid ) {
                            scope.currentScope.$broadcast('jmjValidateEvent', form[attr.id].$error);
                            scope.currentScope.requerido = 'required';
                            return;
                        }
                    }
                    scope.currentScope.requerido = '';
                });
            }

        };
    }

    return {
        initialize: function () {
            return thisComponent;
        }
    };

});
