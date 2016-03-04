app.directive('jmjTextLabel', function() {
        return {
            restrict: 'E',
            templateUrl: 'textLabel/view.html',
            scope: {
                label: '@',
                id: '@',
                maxlength: '@',
                minlength: '@',
                placeholder: '@',
                pattern: '@',
                model: '=',
                disabled : '@',
                required: '@'
            }
        };
    });
