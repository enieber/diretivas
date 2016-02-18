/**
 * @license Todos os direitos reservados a JMJ.
 * @author Enieber Cunha
 * @ngdoc overview
 * @name jmjEnumLabel
 * @description
 * Diretiva resonsavél por criar um elemento label e um radio na tela recebe os parametros:
 *
 *
 *  <b>label:</b> Exibe o label com o valor passado pelo componente.
 *
 *  <b>model:</b> Passa o model que onde o valor será selecionado.
 *
 *  <b>data:</b> Passa as opções que serão exibidas na diretiva.
 *
 *  <b>space:</b> define a classe que sera usada como espacamento entre os elemento,
 *
 *  <b>text</b> define a propriedade do objeto que sera exibida no radiobuttom (texto do objeto)
 *
 *  <b>default</b> define o valor  padrao que sera iniciado a diretiva
 *
 *  <b>campo</b> define o campo do objeto que será atribuido ao model
 *
 *  * <b>Exemplo:</b><br/><br/>
 *  <br/><label>Label</label>
 *  <input type="radio" name="radio" value="{{radio.value}}" ng-model="$parent.model" aria-describedby="enum checkbox">data[0]</input>
 */
define(['text!extensions/diretivas/radioLabel/view.html'], function (view) {
    'use strict';

    var thisComponent = {
        name: 'jmjRadioLabel',
        directives: {
            filtro: ['jmjRadioLabel', customDirective]
        }
    };

    function customDirective() {
        return {
            restrict: 'E',
            template: view,
            scope: {
                label: '@',
                data: '=',
                model: '=',
                space: '@',
                text: '@',
                campo: '@',
                default: '=',
                required: '@',
                disabled : '@',
                atributo : '@',
                name: '@'
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
            controller: ['$scope', function ($scope) {
                $scope.$watch('data', function(value){
                    if (value && $scope.default && !$scope.model) {
                        value.forEach(function(element, index, array){
                            if ($scope.default(element, index, array)){
                                $scope.model = element;
                            }
                        });
                    }
                });


                //if ($scope.data) {
                //    $scope.data.forEach(function (elemento) {
                //        if (($scope.campo ? elemento[$scope.campo] : elemento) == $scope.default) {
                //
                //            $scope.model = elemento;
                //        }
                //    });
                //}
            }]
        };
    }

    return {
        initialize: function () {
            return thisComponent;
        }
    };
});
