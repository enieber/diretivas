angular.module('app', ['jmj.diretivas', 'ngAnimate', 'ui.bootstrap', 'ui.mask'])
    .config(function(jmjFormConfigProvider, jmjDateInputLabelConfigProvider){
      jmjFormConfigProvider.setException(function(){
        toastr.error('*******************OOOOPPSS NO CONFIG*******************', 'FAIL!!');
      });
      jmjDateInputLabelConfigProvider.setOptions(function () {
        var options = {
          formatYear: 'yy',
          maxDate: new Date(2020, 5, 22),
          minDate: new Date(),
          startingDay: 1
        };
      })
    })
    .controller('controller',function ($scope, jmjFormConfig) {
      $scope.data = new Date();
      $scope.date = {
        dateDisabled: disabled,
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
      };
      function disabled(data) {
        var date = data.date,
              mode = data.mode;
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
      }
      $scope.model = {};
      $scope.codSeqRef = [
          {
            "id":1,
            "quantidadeSolicitada":3,
            "quantidadeAutorizada":2,
            "valorSolicitado":5000,
            "valorAutorizado":4800,
            "sequencia":1,
            "descricaoProcedimento":"Raios-X",
            "solicitacao":null,
            "servico":
              {
                "id":1,
                "codigo":44,
                "descricao":"Raios-X",
                "registroAnvisa":null,
                "codigoRefFabricante":null,
                "autorizacaoFuncionamento":null,
                "diretrizUtilizacao":null,
                "codigoDespesa":null,
                "unidadeMedida":null,
                "tuss":65,
                "classeServico":null
              }
          },
          {
              "id":2,
              "quantidadeSolicitada":3,
              "quantidadeAutorizada":2,
              "valorSolicitado":5000,
              "valorAutorizado":4800,
              "sequencia":2,
              "descricaoProcedimento":"Raios-X 2",
              "solicitacao":null,
              "servico":
                {
                  "id":1,
                  "codigo":44,
                  "descricao":"Raios-X 2",
                  "registroAnvisa":null,
                  "codigoRefFabricante":null,
                  "autorizacaoFuncionamento":null,
                  "diretrizUtilizacao":null,
                  "codigoDespesa":null,
                  "unidadeMedida":null,
                  "tuss":65,
                  "classeServico":null
                }
            }
        ];
      $scope.submit = function () {
        toastr.success('Sucesso velho', 'OK!');
      };
      $scope.exception = function () {
        toastr.error('*******************OOOOPPSS*******************', 'FAIL!!');
      };
});
