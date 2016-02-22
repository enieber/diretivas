describe('Teste panelStyle', function () {

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

    it('deve conter um label dentro do panel-style', function () {
        $scope.test = '';
        var directiveElem = getCompiledElement('<jmj-panel-style><label>Teste</label></jmj-panel-style>', $scope);
        expect(directiveElem.find('label').text()).toEqual('Teste');
    });

    it('deve conter algumas  classes dentro do panel-style', function () {
        $scope.class = 'bgColor3 branco';
        var directiveElem = getCompiledElement('<jmj-panel-style style="{{class}}"><label>Teste</label></jmj-panel-style>', $scope);
        expect(directiveElem.find('div').hasClass('bgColor3 branco')).toEqual(true);
    });

});
