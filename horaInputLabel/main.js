/**
 * @license Todos os direitos reservados a Codate.
 * @author Enieber Cunha
 * @ngdoc overview
 * @name elHome
 *
 * @description
 *  Módulo principal do componente Home que é responsável por exibir e gerenciar a tela inicial da aplicação.
 */
define(['text!extensions/diretivas/horaInputLabel/view.html'], function (view) {

    'use strict';

    var thisComponent = {

        name: 'jmjHoraInputLabel',

        directives: {
            filtro: ['jmjHoraInputLabel', customDirective]
        }

    };

    function customDirective() {
        return {
            restrict: 'E',
            template: view,
            scope : {
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
                disabled : '@'
            }
        };
    }

    return {

        initialize: function () {
            return thisComponent;
        }

    };

});
