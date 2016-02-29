angular.module('app', ['jmj.diretivas'])
    .controller('controller',function ($scope) {
      $scope.model = {};
      $scope.submit = function () {
        // toastr.error('Are you the 6 fingered man?');
      }
});
