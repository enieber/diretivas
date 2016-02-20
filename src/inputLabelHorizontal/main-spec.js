    describe('Teste inputLabelHorizontal', function () {

        var $rootScope, $compile;

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


        it('deve validar o input se for required=true e for preenchido', function () {
            $scope.test = 'ta';
            var input = getCompiledElement('<jmj-input-label-horizontal label="3 - Nº Guia Referenciada" model="test" required="true"></jmj-input-label-horizontal>', $scope);
            expect(input.find('input').hasClass('ng-invalid')).toEqual(false);
        });

        it('deve invalidar o input se for required=true e não for preenchido', function () {
            var input = getCompiledElement('<jmj-input-label-horizontal label="3 - Nº Guia Referenciada" required="true"></jmj-input-label-horizontal>', $scope);
            expect(input.find('input').hasClass('ng-invalid')).toEqual(true);
        });

    });
