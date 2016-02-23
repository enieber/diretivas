app.directive('jmjValidate', function() {
        return {
            restrict: 'E',
            templateUrl: 'validate/view.html',
            transclude: true,
            controller: ['$scope', function ($scope) {
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
            }]
        };
    });
