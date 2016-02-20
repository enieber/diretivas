app.directive('jmjInputLabel', function() {
        return {
            restrict: 'E',
            templateUrl: 'inputLabel/view.html',
            scope: {
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
                disabled : '@',
                styleClass : '@'
            },
            link: function (scope, element, attr) {
                scope.$on('submit', function (scope, form) {
                    if (attr.id) {
                        if (form[attr.id].$invalid ) {
                            scope.currentScope.$broadcast('jmjValidateEvent', form[attr.id].$error);
                            scope.currentScope.requerido = 'required';
                            return;
                        }
                    }
                    scope.currentScope.requerido = '';
                });
            }

        };

    });