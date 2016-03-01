app.provider('jmjFormConfig', function(){
  var _exception;

  this.setException = function(val){
    _exception = val;
  };

  this.$get = [function(){
      return {
        exception: _exception
      };
    }
  ];

})
.directive('jmjForm', function() {
        return {
            restrict: 'E',
            templateUrl: 'form/view.html',
            transclude: true,
            replace: true,
            scope: {
                ngSubmit: '=',
                exception: '='
            },
            controller: ['$scope', 'jmjFormConfig', function($scope, $provider){
              $scope.provider = $provider;
            }],
            link: function (scope, element) {

                var $element = angular.element(element);
                $element.bind('submit', function (e) {
                    e.preventDefault();

                    var form = scope.form;
                    scope.$parent.$broadcast('submit', form);

                    //verifico se o formulario é invalido
                    if (form.$invalid ) {
                        var exception = scope.exception || scope.provider.exception;
                        exception && exception();
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
