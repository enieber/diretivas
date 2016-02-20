'use strict';

angular.module('jmj.diretivas')
    .directive('jmjSelectLabel', function() {
        return {
            restrict: 'E',
            template: 'selectLabel/view.html',
            scope: {
                label: '@',
                data: '=',
                campo: '@',
                model: '=',
                default: '=',
                required : '@',
                disabled : '@'
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

            controller: function ($scope) {
                $scope.$watch('data', function(value){
                    if (value && $scope.default && !$scope.model) {
                        value.forEach(function(element, index, array){
                            if ($scope.default(element, index, array)){
                                $scope.model = element;
                            }
                        });
                    }
                });
            }
        };
    });