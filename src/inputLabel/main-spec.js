describe('Teste inputLabel', function () {

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

   it('deve invalidar o input se for required=true e não for preenchido', function () {
       var input = getCompiledElement('<jmj-input-label id="guia" label="Guia" required="true">'+
       '</jmj-input-label>', $scope);
       expect(input.find('input').hasClass('ng-invalid')).toEqual(true);
   });

  it('deve validar o input se for required=true e for preenchido', function () {
      $scope.test = 'ta';
       var input = getCompiledElement('<jmj-input-label label="3 - Nº Guia Referenciada" model="test" required="true"></jmj-input-label>', $scope);
       expect(input.find('input').hasClass('ng-invalid')).toEqual(false);
   });

  it('deve disabilitar o campo caso for colocado o atributo disable=true', function () {
      var input = getCompiledElement('<jmj-input-label label="Teste" model="test" disabled="true"></jmj-input-label>', $scope);
      expect(input.find('input').attr('disabled')).toEqual('disabled');
  });

  it('deve abilitar o campo se não for colocado o atributo disable=true', function () {
      var input = getCompiledElement('<jmj-input-label label="Teste" model="test"></jmj-input-label>', $scope);
      expect(input.find('input').attr('disabled')).toBeUndefined();
  });

  it('deve receber o tipo do input', function() {
      var type = getCompiledElement('<jmj-input-label id="test" type="number" '+
      'label="Teste" model="test"></jmj-input-label>', $scope);
      expect(type.find('input').attr('type')).toEqual('number');
  });

  it('deve vir por default o type=text', function () {
      var typeText = getCompiledElement('<jmj-input-label id="test"'+
      'label="Teste" model="test"></jmj-input-label>', $scope);
      expect(typeText.find('input').attr('type')).toEqual('text');
  });

});
