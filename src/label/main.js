app.directive('jmjLabel', function() {
        return {
            restrict: 'E',
            templateUrl: 'label/view.html',
            scope : {
                label : '@',
                id: '@',
                required: '@',
                placeholder: '@',
                model : '=',
                disabled : '@',
                style: '@'
            },
            link: function (scope, element, attr) {
                scope.$on('submit', function(scope, form) {
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
