app.directive('jmjDateInputLabel', function() {
        return {
            restrict: 'E',
            templateUrl: 'dateInputLabel/view.html',
            scope : {
                label : '@',
                id: '@',
                maxlength: '@',
                minlength: '@',
                placeholder: '@',
                pattern: '@',
                model : '=',
                disabled : '@'
            }
        };
    });