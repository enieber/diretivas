xdescribe('Teste validate', function () {

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

    it('deve mostrar que o tamanho maximo é 5', function () {
        $scope.test = '123456';
        $scope.submit = function () {

        }
        var validate = getCompiledElement('<form name="form"><jmj-input id="tes" model="test"'+
        'maxlength="5"></jmj-input><button type="submit" ng-click=""></button></form>', $scope);
        console.log(validate);
        validate.find('button').triggerHandler('click');
        console.log(validate);

        expect(true).toEqual(false);
    })
});
