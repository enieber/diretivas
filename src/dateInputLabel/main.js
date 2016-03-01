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
            controller: ['$scope', function($scope){
              $scope.open = function(){
                $scope.opened = true;
              };
            }]
        };
    });
