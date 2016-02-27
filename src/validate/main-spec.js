describe('Teste validate', function () {

    var $compile, $scope;

    beforeEach(function () {
        module('jmj.diretivas');

        inject(function($injector){
            $compile = $injector.get('$compile');
            $scope = $injector.get('$rootScope');
        });
    });

    function getCompiledElement(template){
        var compiledDirective = $compile(angular.element(template))($scope);
        $scope.$digest();
        return compiledDirective;
    }

    it('deve mostrar que só recebe numero', function () {
        $scope.test = 123456;
        var validate = getCompiledElement('<form name="form"><jmj-input type="number" id="tes" model="test"'+
        'maxlength="5"></jmj-input><button type="submit" ng-click=""></button></form>', $scope);
        validate.find('button').triggerHandler('click');
        console.log(validate.find('jmj-validate'));
        expect(true).toEqual(false);
    })
});
