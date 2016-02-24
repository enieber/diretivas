app.directive('jmjDateInputLabel', function() {
        return {
            restrict: 'E',
            templateUrl: 'dateInputLabel/view.html',
            scope : {
                label : '@',
                id: '@',
                required: '@',
                styleClass: '@',
                maxlength: '@',
                minlength: '@',
                placeholder: '@',
                pattern: '@',
                model : '=',
                disabled : '@'
            }
        };
    });
