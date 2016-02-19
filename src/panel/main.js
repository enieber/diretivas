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
 *  <div class="panel panel-default">
 *      <div class="panel-body">
 *          <div ng-transclude></div>
 *      </div>
 *  </div>
 */
define(['text!extensions/diretivas/panel/view.html'], function (view) {

    'use strict';

    var thisComponent = {

        name: 'jmjPanel',

        directives: {
            filtro: ['jmjPanel', customDirective]
        }
    };

    function customDirective() {
        return {
            restrict: 'E',
            template: view,
            scope:{
                styleClass: '@'
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
