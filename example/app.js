angular.module('app', ['jmj.diretivas'])
    .controller('controller',function ($scope) {
      $scope.model = {};
      $scope.submit = function () {

      };

      $scope.exception = function () {
        toastr.error('Funcionou ^P^');
      };

});
