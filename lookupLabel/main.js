/**
 * @license Todos os direitos reservados a JMJ.
 * @author enieber
 * @ngdoc overview
 * @name jmjSelectLabel
 * @description
 *  Diretiva resonsavél por criar um elemento label e um select na tela recebe os parametros:
 *
 *
 *  <b>label:</b> Exibe o label com o valor passado pelo componente.
 *
 *
 *  <b>data:</b> Passa as opções que serão exibidas na diretiva.
 *
 *  <b>model:</b> Passa o model que onde o valor será selecionado.
 *
 *  *  <b>Exemplo:</b><br/><br/>
 *  <br/><label>Label</label>
 *  <select id="{{id}}" class="form-control" ng-model="model">
 * <option class="form-control" value="Selecione">Selecione</option>
 * </select>
 */
define(['text!extensions/diretivas/lookupLabel/view.html'], function (view) {

    'use strict';

    var thisComponent = {

        name: 'jmjSelectLabel',

        directives: {
            filtro: ['jmjLookup', customDirective]
        }
    };

    function customDirective() {
        return {
            restrict: 'E',
            template: view,
            scope: {
                label: '@',
                data: '=',
                campo: '@',
                model: '=',
                default: '@',
                required : '@'
            },
            link: function(scope){
                scope.$on('submit', function(scope) {
                    if(scope.currentScope.required && !scope.currentScope.model){
                        scope.currentScope.requerido = 'required';
                        return;
                    }
                    scope.currentScope.requerido = '';
                });
            },

            controller: function ($scope,$timeout) {
                $timeout(function() {
                    if ($scope.default) {
                        if ($scope.campo) {
                            if ($scope.data) {
                                $scope.data.forEach(function (element) {
                                    if (element[$scope.campo] === $scope.default) {
                                        $scope.model = element;
                                    }
                                });
                            }
                        }
                    }
                },1000);
            }
        };
    }

    return {
        initialize: function () {
            return thisComponent;
        }
    };

});
