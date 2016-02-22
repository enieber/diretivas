app.directive('jmjSelectLabel', function() {
        return {
            restrict: 'E',
            templateUrl: 'selectLabel/view.html',
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
