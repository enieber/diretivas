define(['angularMocks'], function () {

    describe('Teste selectLabel', function () {

        var compile, $scope, directiveElem;

        beforeEach(function () {
            module('jmjSelectLabel');

            inject(function($compile, $rootScope){
                compile = $compile;
                $scope = $rootScope.$new();
            });
        });

        function getCompiledElement(template){
            var compiledDirective = compile(angular.element(template))($scope);
            $scope.$digest();
            return compiledDirective;
        }

        beforeEach(function() {
            $scope.usuarios = [
                {
                    id: 1,
                    nome: 'Ranlive', perfis: [
                    {text: 'admin', prioridade: 1},
                    {text: 'View', prioridade: 2}
                ]
                },

                {
                    id: 2,
                    nome: 'Enieber', perfis: [
                    {text: 'tester', prioridade: 3},
                    {text: 'executardor', prioridade: 1},
                    {text: 'executardor 123', prioridade: 5}
                ]
                }
            ];
        });

        it('deve começar com o valor default', function () {
            $scope.defaultValue = function(value){
                return value.id == 1;
            };
            var directiveElem = getCompiledElement('<jmj-select-label label="Nome"'+
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
            var directiveElem = getCompiledElement('<jmj-select-label label="Nome"'+
            'model="usuario" data="usuarios" campo="nome" default="defaultValue"'+
            'required="true"></jmj-select-label>', $scope);
            expect($scope.usuario.nome).toEqual('Enieber');
        });
    });

});
