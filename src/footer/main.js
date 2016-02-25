app.directive('jmjFooter', function() {
        return {
            restrict: 'E',
            templateUrl: 'footer/view.html',
            scope: {
                version:'@',
                year: '@',
                company: '@'
            }
        };

    });
