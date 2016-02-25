describe('Teste autoComplete', function () {

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

    beforeEach(function(){
        $scope.lang = [
            {   id: 2,
                name: 'Java',
                type:'server-side'
            },

            {
                id: 1,
                name: 'js',
                type: 'client-side'
            }
        ];
        $scope.seachLang = function () {
           return $scope.lang;
       };

    });


    it('deve trazer um objeto com js', function () {
        $scope.digitado = 'js';
        var auto = getCompiledElement('<jmj-autocomplete id="lang" label="Test"'+
          'model="digitado" campo="type"'+
          'data="lang" pesquisa="seachLang"></jmj-autocomplete>', $scope);
        console.log(auto.find('div'));
        expect(auto).toEqual(true);
    });
});
