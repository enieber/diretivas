app.directive('jmjPanelLabel', function() {
        return {
            restrict: 'E',
            templateUrl: 'panelLabel/view.html',
            scope: {
                label: '@',
                icon: '@'
            },
            transclude : true
        };
    });
