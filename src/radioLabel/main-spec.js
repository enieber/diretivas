describe('Teste radioLabel', function () {

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
        $scope.model = {};
        $scope.enumSimNao = [{
            value: 'S',
            text: 'Sim'
        }, {
            value: 'N',
            text: 'Não'
        }];
    });

    it('deve começar com o valor default S ', function () {

        $scope.defaultValue = function(value){
            return value.value == 'S';
        };
        var template = '<jmj-radio-label id="atendimento" name="atendimento" label="6 - Atendimento RN" ' +
            'model="atendimentoRN" default="defaultValue"'+
            'data="enumSimNao" text="text" campo="value" '+
            'required="true"></jmj-radio-label>';

        getCompiledElement(template, $scope);
        expect($scope.atendimentoRN.value).toEqual('S');
    });

    it('deve começar sem um valor default e ser preenchido', function () {
        var templete = '<jmj-radio-label label="6 - Atendimento RN" ' +
            'model="model.atendimentoRN" '+
            'data="enumSimNao" text="text" campo="value" '+
            'required="true"></jmj-radio-label>';
        $scope.model.atendimentoRN = { value: 'S', text: 'Sim'};
        getCompiledElement(templete, $scope);
        expect($scope.model.atendimentoRN.value).toEqual('S');
    });

    it('deve receber o valor dentro de outro objeto', function(){
        $scope.model.dadosBeneficiario = {
            nome:'José Sem Braço',
            idade: 20,
            atendimentoRN: { value: 'S', text: 'Sim'}
        };
        var templete = '<jmj-radio-label label="6 - Atendimento RN" ' +
            'model="model.dadosBeneficiario.atendimentoRN"'+
            'data="enumSimNao" text="text" campo="value" '+
            'required="true"></jmj-radio-label>';

        getCompiledElement(templete, $scope);
        expect($scope.model.dadosBeneficiario.atendimentoRN.value).toEqual('S');
    });

    it('deve receber o valor dentro de outro objeto e ainda tem o valor default', function(){
        $scope.model.dadosBeneficiario = {
            nome:'José Sem Braço',
            idade: 20,
            atendimentoRN: { value: 'S', text: 'Sim'}
        };
        $scope.defaultValue = function(value){
            return value.value == 'N';
        };
        var templete = '<jmj-radio-label label="6 - Atendimento RN" ' +
            'model="model.dadosBeneficiario.atendimentoRN" default="defaultValue"'+
            'data="enumSimNao" text="text" campo="value" '+
            'required="true"></jmj-radio-label>';

        getCompiledElement(templete, $scope);
        expect($scope.model.dadosBeneficiario.atendimentoRN.value).toEqual('S');
    });
});
