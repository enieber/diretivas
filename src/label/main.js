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
                disabled : '@'
            }
        };
    });
