app.directive('jmjTimeInputLabel', function() {
        return {
            restrict: 'E',
            templateUrl: 'timeInputLabel/view.html',
            scope : {
                label: '@',
                id: '@',
                name: '@',
                maxlength: '@',
                minlength: '@',
                placeholder: '@',
                pattern: '=',
                mensagem: '@',
                tooltip: '@',
                model: '=',
                required: '@',
                disabled : '@'
            }
        };

    });
