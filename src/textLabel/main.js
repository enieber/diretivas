/**
 * @license Todos os direitos reservados a JMJ.
 * @author GilbertoLeão <gilbertorleao@gmail.com>
 * @ngdoc overview
 * @name jmjTextLabel
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
 *  <input type="text" name="radio" value="{{radio.value}}" ng-model="$parent.model" aria-describedby="enum checkbox"></input>
 */
define(['text!extensions/diretivas/textLabel/view.html'], function (view) {

    'use strict';

    var thisComponent = {
        name: 'jmjTextLabel',
        directives: {
            filtro: ['jmjTextLabel', customDirective]
        }
    };

    function customDirective() {
        return {
            restrict: 'E',
            template: view,
            scope: {
                label: '@',
                id: '@',
                maxlength: '@',
                minlength: '@',
                placeholder: '@',
                pattern: '@',
                model: '=',
                disabled : '@',
                required: '@'
            }
        };
    }

    return {
        initialize: function () {
            return thisComponent;
        }
    };

});
