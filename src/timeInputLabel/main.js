app.directive('jmjTimeInputLabel', function() {
        return {
            restrict: 'E',
            templateUrl: 'timeInputLabel/view.html',
            scope : {
                id: '@',
                label: '@',
                name: '@',
                model: '=',
                required: '@',
                disabled : '@'
            }
        };

    });
