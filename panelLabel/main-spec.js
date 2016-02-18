define(['angularMocks'], function () {

    describe('Teste panel', function () {

        var compile, scope, directiveElem;

        beforeEach(function () {
            module('jmjPanelLabel');

            inject(function($compile, $rootScope){
                compile = $compile;
                scope = $rootScope.$new();
            });
        });

        function getCompiledElement(template){
            var compiledDirective = compile(angular.element(template))(scope);
            scope.$digest();
            return compiledDirective;
        }

        it('deve conter um label dentro do panel-label', function () {
            scope.test = '';
            var directiveElem = getCompiledElement('<jmj-panel-label label="Pesquisa de Guias"><label>Teste</label></jmj-panel-label>', scope);
            expect(directiveElem.find('label').text()).toEqual('Teste');
        });

        it('deve conter um h1 como titulo', function () {
            var directiveElem = getCompiledElement('<jmj-panel-label label="Pesquisa de Guias"></jmj-panel-label>', scope);
            expect(directiveElem.find('h5').text()).toEqual('  Pesquisa de Guias');
        });
    });

});
