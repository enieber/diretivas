describe('Teste textLabel', function () {

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

    it('deve invalidar o text-label se for required e tiver vazia', function () {
        $scope.test = '';
        getCompiledElement('<form name="sampleForm"> <jmj-text-label label="23 - Observação / Justificativa"' +
            ' model="model.observacao" required="true"></jmj-text-label></form>', $scope);
        expect($scope.sampleForm.$invalid).toEqual(true);
    });
});
