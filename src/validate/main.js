/**
 * @license Todos os direitos reservados a JMJ.
 * @author GilbertoLeão <gilbertorleao@gmail.com>
 * @ngdoc overview
 * @name jmjValidate
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
 *  <input type="text" name="radio" ng-model="$parent.model" aria-describedby="radio"></input>
 */
define(['text!extensions/diretivas/validate/view.html'], function (view) {

    'use strict';

    var thisComponent = {
        name: 'jmjValidate',
        directives: {
            filtro: ['jmjValidate', customDirective]
        }
    };

    function customDirective() {
        return {
            restrict: 'E',
            template: view,
            transclude: true,
            controller: function ($scope) {
                $scope.$on('jmjValidateEvent', function (evento, elemento) {
                    $scope.error = elemento;
                    if($scope.error.required) {
                        $scope.messageRequired = 'Campo Obrigatório';
                    }else if($scope.error.minlength){
                        $scope.messageMinlength = 'Tamanho minimo é '+evento.currentScope.minlength;
                    }else if($scope.error.maxlength) {
                        $scope.messageMaxlength = 'Tamanho maximo é '+evento.currentScope.maxlength;
                    }else if($scope.error.pattern){
                        $scope.messagePattern = evento.currentScope.pattern.mensagem;
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
