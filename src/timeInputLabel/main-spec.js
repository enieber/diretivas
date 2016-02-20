describe('Teste timeInputLabel', function () {
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

    it('deve validar o input se data for required e for digitada', function () {
        $scope.test = new Date();
        var date = getCompiledElement('<jmj-time-input-label id="input" model="test" label="Data Atendimento" required="true"></jmj-time-input-label>', $scope);
        expect(date.find('input').hasClass('ng-valid')).toEqual(true);
    });

    it('deve invalidar o input se data for required e não for digitada', function () {
        var date = getCompiledElement('<jmj-time-input-label id="input"   model="test" label="Data Atendimento" required="true"></jmj-time-input-label>', $scope);
        expect(date.find('input').hasClass('ng-invalid')).toEqual(true);
    });
});