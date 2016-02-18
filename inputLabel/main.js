/**
 * @license Todos os direitos reservados a JMJ.
 * @author GilbertoLeão <gilbertorleao@gmail.com>
 * @ngdoc overview
 * @name jmjInputLabel
 * @description
 * Diretiva resonsavél por criar um elemento label e um input na tela recebe os parametros:

 *  <b>label:</b> Exibe o label com o valor passado pelo componente.
 *
 *  <b>model:</b> Passa o model que onde o valor será selecionado.
 *
 *  <b>parametros html:</b> id, maxlength, minlength, placeholder
 *
 * <b>Exemplo:</b><br/><br/>
 *  <br/><label>Label</label>
 *  <input type="text" name="radio" value="{{radio.value}}" ng-model="$parent.model" aria-describedby="enum checkbox"></input>
 **/


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
