app.directive('jmjPanel', function() {
        return {
            restrict: 'E',
            templateUrl: 'panel/view.html',
            scope:{
                styleClass: '@'
            },
            transclude: true
        };
    });