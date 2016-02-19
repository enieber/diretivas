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
 *  *  <b>Exemplo:</b><br/><br/>
 *  <br/><label>Label</label>
 *  <select id="{{id}}" class="form-control" ng-model="model">
 * <option class="form-control" value="Selecione">Selecione</option>
 * </select>
 */
define(['text!extensions/diretivas/panelLabel/view.html'], function (view) {

    'use strict';

    var thisComponent = {

        name: 'jmjPanelLabel',

        directives: {
            filtro: ['jmjPanelLabel', customDirective]
        }
    };

    function customDirective() {
        return {
            restrict: 'E',
            template: view,
            scope: {
                label: '@',
                icon: '@'
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
