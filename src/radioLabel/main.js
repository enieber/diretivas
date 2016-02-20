'use strict';

angular.module('jmj.diretivas')
    .directive('jmjRadioLabel', function() {
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
            }]
        };
    });