describe('Teste panelLabel', function () {

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

    it('deve conter um label dentro do panel-label', function () {
        $scope.test = '';
        var directiveElem = getCompiledElement('<jmj-panel-label label="Pesquisa de Guias"><label>Teste</label></jmj-panel-label>', $scope);
        expect(directiveElem.find('label').text()).toEqual('Teste');
    });

    it('deve conter um h1 como titulo', function () {
        var directiveElem = getCompiledElement('<jmj-panel-label label="Pesquisa de Guias"></jmj-panel-label>', $scope);
        expect(directiveElem.find('h5').text()).toEqual(' Pesquisa de Guias');
    });
});
