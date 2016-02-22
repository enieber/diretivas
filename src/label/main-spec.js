describe('Teste label', function () {

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

    it('deve conter o label passado por parametro', function () {
        var label = getCompiledElement('<jmj-label label="Teste" required="true"></jmj-label>', $scope);
        expect(label.find('label').text()).toEqual("Teste*:");
    });

    it('deve ficar sem o asterisco quando não for required', function(){
        var label = getCompiledElement('<jmj-label label="Teste"></jmj-label>', $scope);
        expect(label.find('label').text()).toEqual("Teste:");
    });
});
