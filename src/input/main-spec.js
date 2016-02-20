describe('Teste input ', function () {
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

    it('deve invalidar o input se for required e não for digitado nada', function () {
        $scope.test = '';
        var input = getCompiledElement('<jmj-input model="test" required="true"></jmj-input>', $scope);
        expect(input.find('input').hasClass('ng-invalid')).toEqual(true);
    });

    it('deve validar o input se for required e for digitado algo', function () {
        $scope.test = 'asd';
        var input = getCompiledElement('<jmj-input model="test" required="true"></jmj-input>', $scope);
        expect(input.find('input').hasClass('ng-valid')).toEqual(true);
    });

    it('deve disabilitar o campo caso for colocado o atributo disable=true', function () {
        var input = getCompiledElement('<jmj-input model="test" disabled="true"></jmj-input>', $scope);
        expect(input.find('input').attr('disabled')).toEqual('disabled');
    });

    it('deve abilitar o campo se não for colocado o atributo disable=true', function () {
        var input = getCompiledElement('<jmj-input model="test"></jmj-input>', $scope);
        expect(input.find('input').attr('disabled')).toBeUndefined();
    });
});