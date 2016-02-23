app.directive('jmjInput', function() {
        return {
            restrict: 'E',
            templateUrl: 'input/view.html',
            scope: {
                id: '@',
                name: '@',
                type: '@',
                maxlength: '@',
                minlength: '@',
                placeholder: '@',
                pattern: '=',
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
