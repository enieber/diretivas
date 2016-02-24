describe('Teste dateInputLabel', function () {

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
        var date = getCompiledElement('<jmj-date-input-label id="input"   model="test" label="Data Atendimento" required="true"></jmj-date-input-label>', $scope);
        expect(date.find('input').hasClass('ng-invalid')).toEqual(false);
    });

    it('deve invalidar o input se data for required e não for digitada', function () {
        var date = getCompiledElement('<jmj-date-input-label id="input"   model="test" label="Data Atendimento" required="true"></jmj-date-input-label>', $scope);
        expect(date.find('input').hasClass('ng-invalid')).toEqual(true);
    });
});
