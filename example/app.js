angular.module('app', ['jmj.diretivas', 'ngAnimate', 'ui.bootstrap', 'ui.mask'])
    .config(function(jmjFormConfigProvider, jmjDateInputLabelConfigProvider){
      jmjFormConfigProvider.setException(function(){
        toastr.error('*******************OOOOPPSS NO CONFIG*******************', 'FAIL!!');
      });
      jmjDateInputLabelConfigProvider.setOptions(function () {
        var options = {
          formatYear: 'yy',
          maxDate: new Date(2020, 5, 22),
          minDate: new Date(),
          startingDay: 1
        };
      })
    })
    .controller('controller',function ($scope, jmjFormConfig) {
      $scope.model = {};
      $scope.submit = function () {
        toastr.success('Sucesso velho', 'OK!');
      };
      $scope.exception = function () {
        toastr.error('*******************OOOOPPSS*******************', 'FAIL!!');
      };
});
