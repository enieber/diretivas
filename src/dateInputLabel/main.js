app.directive('jmjDateInputLabel', function() {
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
                open: '=',
                btnbar: '@',
                disabled : '@'
            }
        };
    });
