app.directive('jmjPanelStyle', function() {
        return {
            restrict: 'E',
            templateUrl: 'panelStyle/view.html',
            scope:{
                style: '@'
            },
            transclude : true
        };
    });