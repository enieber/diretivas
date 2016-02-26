describe('Teste selectLabel', function () {

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


    beforeEach(function() {
        $scope.usuarios = [
            {   id: 2,
                nome: 'Ranlive', perfis:[
                    {text: 'admin', prioridade: 1},
                    {text: 'View', prioridade: 2}
                ]
            },

            {
                id: 1,
                nome: 'Enieber', perfis:[
                    {text: 'tester', prioridade: 3},
                    {text: 'executardor', prioridade: 1},
                    {text: 'executardor 123', prioridade: 5}
                ]
            }
        ];
    });

    it('deve começar com o valor default', function () {

        $scope.defaultValue = function(value){
            return value.id == 2;
        };

        var select = getCompiledElement('<jmj-select-label label="Nome"'+
      'model="usuario" data="usuarios" campo="nome" default="defaultValue"'+
      'required="true"></jmj-select-label>', $scope);
        expect($scope.usuario.nome).toEqual('Ranlive');
    });

   it('deve começar com o valor default e com um objeto', function () {
       $scope.defaultValue = function(value){
           return value.id == 1;
       };
       $scope.usuario = {
           id: 2,
           nome: 'Enieber', perfis: [
               {text: 'tester', prioridade: 3},
               {text: 'executardor', prioridade: 1},
               {text: 'executardor 123', prioridade: 5}
           ]
       };
       getCompiledElement('<jmj-select-label label="Nome"'+
       'model="usuario" data="usuarios" campo="nome" default="defaultValue"'+
       'required="true"></jmj-select-label>', $scope);
       expect($scope.usuario.nome).toEqual('Enieber');
   });

   it('deve conter o label passado por parametro', function () {
       $scope.defaultValue = function(value){
           return value.id == 2;
       };

       var select = getCompiledElement('<jmj-select-label label="Teste"'+
     'model="usuario" data="usuarios" campo="nome" default="defaultValue"'+
     'required="true"></jmj-select-label>', $scope);
       expect(select.find('label').text()).toEqual("Teste*:");
   });

   it('deve ficar sem o asterisco quando não for required', function(){
       $scope.defaultValue = function(value){
           return value.id == 2;
       };

       var select = getCompiledElement('<jmj-select-label label="Teste"'+
     'model="usuario" data="usuarios" campo="nome" default="defaultValue"'+
     '></jmj-select-label>', $scope);
       expect(select.find('label').text()).toEqual("Teste:");
   });

});
