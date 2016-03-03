app.provider('jmjDateInputLabelConfig', function(){
  var _options;

  this.setOptions = function(val){
    _options = val;
  };

  this.$get = [function(){
      return {
        options: _options
      };
    }
  ];

})
.directive('jmjDateInputLabel', function() {
        return {
            restrict: 'E',
            templateUrl: 'dateInputLabel/view.html',
            scope : {
                label : '@',
                id: '@',
                required: '@',
                styleClass: '@',
                options: '@',
                placeholder: '@',
                model : '=',
                format: '@',
                btnbar: '@',
                disabled : '@'
            },
            // link: function (scope, iElement, iAtrrs, ngModelCtrl) {
            //   var _formatDate = function(date) {
            //      if (date) {
            //       date = date.replace(/[^0-9]+/g, "");
            //      }
            //
            //      if (date && date.length > 2) {
            //        var dia = new Number(date.substring(0, 2));
            //
            //        if (dia > 31) {
            //          date = "01" + date.substring(2);
            //        }
            //
            //       date = date.substring(0, 2) + "/" + date.substring(2);
            //      }
            //
            //      if (date && date.length > 5) {
            //        var mes = new Number(date.substring(3, 5));
            //
            //        if (mes > 12) {
            //          date = "01/01" + +date.substring(5);
            //        }
            //
            //        date = date.substring(0, 5) + "/" + date.substring(5, 9);
            //      }
            //
            //      return date;
            //   };
            //
            //   ngModelCtrl.$formatters.push(function (modelValue) {
            //     return _formatDate(modelValue);
            //   });
            //   ngModelCtrl.$render = function() {
            //       scope.model   = ngModelCtrl.$viewValue.red;
            //       scope.green = ngModelCtrl.$viewValue.green;
            //       scope.blue  = ngModelCtrl.$viewValue.blue;
            //   };
            // }
            controller: ['$scope', function($scope){
              $scope.open = function(){
                $scope.opened = true;
              };          
            }]
        };
    });
