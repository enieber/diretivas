/**
 * @license Todos os direitos reservados a JMJ.
 * @author GilbertoLeão <gilbertorleao@gmail.com>
 * @ngdoc overview
 * @name jmjAutocomplete
 * @description
 * Diretiva resonsavél por criar um elemento label e um input na tela recebe os parametros:
 *
 *
 *  <b>label:</b> Exibe o label com o valor passado pelo componente.
 *
 *  <b>model:</b> Passa o model que onde o valor será selecionado.
 *
 *  <b>parametros html:</b> id, maxlength, minlength, placeholder
 *
 *  * <b>Exemplo:</b><br/><br/>
 *  <br/><label>Label</label>
 *  <input type='text' name='radio' ng-model='$parent.model' aria-describedby='radio'></input>
 */
define(['text!extensions/diretivas/autocomplete/view.html'], function (view) {

    'use strict';

    var thisComponent = {
        name: 'jmjAutocomplete',
        directives: {
            filtro: ['jmjAutocomplete', customDirective]
        }
    };

    function customDirective() {
        return {
            restrict: 'E',
            template: view,
            scope: {
                label: '@',
                pesquisa: '=',
                id: '@',
                placeholder: '@',
                model: '=',
                campo: '@',
                pattern: '=',
                mensagem: '@',
                tooltip: '@',
                name: '@',
                maxlength: '@',
                minlength: '@',
                required: '@',
                disabled: '@'

            },
            link: function (scope) {
                scope.$on('submit', function (scope) {
                    if (scope.currentScope.required && !scope.currentScope.model) {
                        scope.currentScope.requerido = 'required';
                        return;
                    }
                    scope.currentScope.requerido = '';
                });
            },
            controller: function ($scope) {
                //metodo para validar se o campo do autocomplete esta preenchido
                $scope.$watch('model', function (newValues, oldValues, scope) {
                    if (!angular.isString(scope.model) && scope.model && !scope.model[scope.campo]) {
                        scope.model[scope.campo] = null;
                    }
                    //else para evitar que a propriedade pesquisada seja replicada nas outras caso não seja selecionado nenhum campo do autocomplete
                    else if (angular.isString(scope.model) && scope.model) {
                        var model = {};
                        model[scope.campo] = scope.model;
                        scope.model = model;
                    }
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
