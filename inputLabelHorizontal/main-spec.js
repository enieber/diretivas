define(['angularMocks'], function () {

    describe('Teste inputLabelHorizontal', function () {

        var $rootScope, $compile;

        beforeEach(function () {
            module('jmjInputLabelHorizontal');
        });

        beforeEach(inject(function (_$rootScope_, _$compile_) {
            $rootScope = _$rootScope_;
            $compile = _$compile_;
        }));

        it('deve incluir classe required se for required=true ', function () {
            var inputLabel = $compile('<jmj-input-label-horizontal label="3 - Nº Guia Referenciada" required="true"></jmj-input-label-horizontal>')($rootScope);
            $rootScope.$digest();
            expect(inputLabel.find('span').hasClass('required')).toBeTruthy();
        });

        it('deve conter a classe ng-valid com maxlength correto', function () {
            var inputLabel = $compile('<jmj-input-label-horizontal label="3 - Nº Guia Referegrnciada" maxlength="9"></jmj-input-label-horizontal>')($rootScope);
            $rootScope.$digest();
            var input = inputLabel.find('input');
            input.val('123456789');
            $rootScope.$digest();


            expect(input.hasClass('ng-valid')).toEqual(true);
        });

        it('deve conter a classe ng-invalid com o input não preenchido', function () {
            var inputLabel = $compile('<jmj-input-label-horizontal id="label" label="3 - Nº Guia Referenciada" required="true"></jmj-input-label-horizontal>')($rootScope);
            var input = inputLabel.find('input');
            input.val('a4794');
            $rootScope.$digest();
            expect(input.hasClass('ng-valid')).toEqual(false);
        });

    });

});