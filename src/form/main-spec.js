describe('Teste form', function () {
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

    it('deve invalidar o form', function () {
        $scope.test = '';
        var directiveElem = getCompiledElement('<jmj-form name="form" ng-submit="submit()"><input type="test" ng-model="test" required></jmj-form>', $scope);
        expect(directiveElem.hasClass('ng-invalid')).toEqual(true);
    });

    it('deve validar o form', function(){
        $scope.test = 'teste';
        var directiveElem = getCompiledElement('<jmj-form name="form" ng-submit="submit()">'+
            '<input type="test" ng-model="test" required></jmj-form>', $scope);
        expect(directiveElem.hasClass('ng-valid')).toEqual(true);
    });
});
