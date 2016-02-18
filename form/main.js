/**
 * @license Todos os direitos reservados a JMJ.
 * @author GilbertoLeao<gilbertorleao@gmail.com>
 * @ngdoc overview
 * @name jmjPanel
 * @description
 *  Diretiva resonsavél por criar um elemento label e um panel na tela recebe os parametros:
 *
 *
 *  <b>label:</b> Exibe o label com o valor passado pelo componente.
 *
 *  <b>Exemplo:</b><br/><br/>
 *
 *  <div class="panel panel-default"">
 *      <div class="panel-body">
 *          <div ng-transclude></div>
 *      </div>
 *  </div>
 */
define(['sandbox', 'text!extensions/diretivas/form/view.html'], function (sandbox, view) {

    'use strict';

    var thisComponent = {
        name: 'jmjForm',

        directives: {
            filtro: ['jmjForm', customDirective]
        }
    };

    function customDirective() {
        return {
            restrict: 'E',
            template: view,
            transclude: true,
            replace: true,
            scope: {
                ngSubmit: '='
            },
            link: function (scope, element) {
                var $element = angular.element(element);
                $element.bind('submit', function (e) {
                    e.preventDefault();
                    var form = scope.form;
                    //verifico se o formulario é invalido
                    scope.$parent.$broadcast('submit', form);
                    if (form.$invalid) {
                        sandbox.errorObrigatorio();
                        //atualizo o Scopo e paro a propagação do metodo
                        scope.$apply();
                        return;
                    }
                    //executo o metodo salvar(padrao do scopo principal)
                    if (scope.ngSubmit) {
                        scope.ngSubmit();
                    }
                    scope.$apply();
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
