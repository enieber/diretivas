define(['angularMocks'], function () {

    describe('Teste panel', function () {

        var compile, scope, directiveElem;

        beforeEach(function () {
            module('jmjPanel');

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

        it('deve conter um label dentro ', function () {
            scope.test = '';
            var directiveElem = getCompiledElement('<jmj-panel><label>Teste</label></jmj-panel>', scope);
            expect(directiveElem.find('label').text()).toEqual('Teste');
        });
    });

});
