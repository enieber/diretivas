describe('Teste panel', function () {

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


    it('deve conter um label dentro ', function () {
        $scope.test = '';
        var directiveElem = getCompiledElement('<jmj-panel><label>Teste</label></jmj-panel>', $scope);
        expect(directiveElem.find('label').text()).toEqual('Teste');
    });
});
