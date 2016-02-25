describe('Teste footer ', function () {
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

    it('deve estar definido a diretiva', function () {
        var footer = getCompiledElement('<jmj-footer></jmj-footer>', $scope);
        expect(footer.find('footer').hasClass('main-footer')).toEqual(true);
    });

    it('deve definir a verção e a empresa', function () {
        var footer = getCompiledElement('<jmj-footer model="test" year="2014 - 2016" version="1.8" company="JMJ Sistemas"></jmj-footer>', $scope);
        expect(footer.find('footer').text()).toEqual('Version1.8Copyright © 2014 - 2016 JMJ Sistemas. All rights reserved.');
    })
});
