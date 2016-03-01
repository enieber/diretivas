angular.module('app', ['jmj.diretivas', 'ngAnimate', 'ui.bootstrap'])
    .controller('controller',function ($scope) {
      $scope.model = {};
      $scope.submit = function () {
        toastr.success('Sucesso velho', 'OK!');
      };

      $scope.exception = function () {
        toastr.error('*******************OOOOPPSS*******************', 'FAIL!!');
      };
      $scope.open = function() {
       $scope.popup.opened = true;
     };

     $scope.popup = {
       opened: false
     };
});
