app.directive('jmjForm', function() {
        return {
            restrict: 'E',
            templateUrl: 'form/view.html',
            transclude: true,
            replace: true,
            scope: {
                ngSubmit: '='
            },
            link: function (scope, element) {
                var $element = angular.element(element);
                $element.bind('submit', function (e) {
                    e.preventDefault();
                    var form = scope.form;
                    //verifico se o formulario é invalido
                    scope.$parent.$broadcast('submit', form);
                    if (form.$invalid) {
                        sandbox.errorObrigatorio();
                        //atualizo o Scopo e paro a propagação do metodo
                        scope.$apply();
                        return;
                    }
                    //executo o metodo salvar(padrao do scopo principal)
                    if (scope.ngSubmit) {
                        scope.ngSubmit();
                    }
                    scope.$apply();
                });
            }
        };
    });
