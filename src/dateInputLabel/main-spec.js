
define(['angularMocks'], function () {

    describe('Teste dateInputLabel', function () {

        var compile, scope, directiveElem;

        beforeEach(function () {
            module('jmjDateInputLabel');

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

       it('deve invalidar o formulario se data for required e não for digitada', function () {
            scope.test = '';
            var directiveElem = getCompiledElement('<form name="sampleForm"><jmj-date-input-label idinput="input" model="test" label="Data Atendimento" required="true"></jmj-date-input-label></form>', scope);
            expect(scope.sampleForm.$invalid).toEqual(true);
       });
    });

});
