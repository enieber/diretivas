app.directive('jmjAutocomplete', function() {
        return {
            restrict: 'E',
            template: 'autocomplete/view.html',
            scope: {
                label: '@',
                pesquisa: '=',
                id: '@',
                placeholder: '@',
                model: '=',
                campo: '@',
                pattern: '=',
                mensagem: '@',
                tooltip: '@',
                name: '@',
                maxlength: '@',
                minlength: '@',
                required: '@',
                disabled: '@'

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
            controller: function ($scope) {
                //metodo para validar se o campo do autocomplete esta preenchido
                $scope.$watch('model', function (newValues, oldValues, scope) {
                    if (!angular.isString(scope.model) && scope.model && !scope.model[scope.campo]) {
                        scope.model[scope.campo] = null;
                    }
                    //else para evitar que a propriedade pesquisada seja replicada nas outras caso não seja selecionado nenhum campo do autocomplete
                    else if (angular.isString(scope.model) && scope.model) {
                        var model = {};
                        model[scope.campo] = scope.model;
                        scope.model = model;
                    }
                });
            }
        };
    });
