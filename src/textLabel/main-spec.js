
define(['angularMocks'], function () {

    describe('Teste textLabel', function () {

        var compile, scope, directiveElem;

        beforeEach(function () {
            module('jmjTextLabel');

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

        it('deve invalidar o text-label se for required e tiver vazia', function () {
            scope.test = '';
            var directiveElem = getCompiledElement('<form name="sampleForm"> <jmj-text-label label="23 - Observação / Justificativa"' +
                ' model="model.observacao" required="true"></jmj-text-label></form>', scope);
            expect(scope.sampleForm.$invalid).toEqual(true);
        });
    });

});
