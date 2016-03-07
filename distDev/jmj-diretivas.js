(function(){"use strict";var app = angular.module('jmj.diretivas', []);

app.directive('jmjAutocomplete', function() {
        return {
            restrict: 'E',
            templateUrl: 'autocomplete/view.html',
            scope: {
                id: '@',
                label: '@',
                placeholder: '@',
                model: '=',
                pattern: '=',
                pesquisa: '=',
                mensagem: '@',
                campo: '@',
                tooltip: '@',
                maxlength: '@',
                minlength: '@',
                required: '@',
                disabled: '@'

            },
            link: function (scope) {
                scope.$on('submit', function (scope) {
                    if (scope.currentScope.required && !scope.currentScope.model) {
                        scope.currentScope.requerido = 'required';
                        return;
                    }
                    scope.currentScope.requerido = '';
                });
            },
            controller: ['$scope', function ($scope) {
                //metodo para validar se o campo do autocomplete esta preenchido
                $scope.$watch('model', function (newValues, oldValues, scope) {
                    if (!angular.isString(scope.model) && scope.model && !scope.model[scope.campo]) {
                        scope.model[scope.campo] = null;
                    }
                    //else para evitar que a propriedade pesquisada seja replicada nas outras caso não seja selecionado nenhum campo do autocomplete
                    else if (angular.isString(scope.model) && scope.model) {
                        var model = {};
                        model[scope.campo] = scope.model;
                        scope.model = model;
                    }
                });
            }]
        };
    });

app.provider('jmjDateInputLabelConfig', function(){
  var _options;

  this.setOptions = function(val){
    _options = val;
  };

  this.$get = [function(){
      return {
        options: _options
      };
    }
  ];

})
.directive('jmjDateInputLabel', function() {
        return {
            restrict: 'E',
            templateUrl: 'dateInputLabel/view.html',
            scope : {
                label : '@',
                id: '@',
                required: '@',
                styleClass: '@',
                options: '@',
                placeholder: '@',
                model : '=',
                format: '@',
                btnbar: '@',
                disabled : '@'
            },
            // link: function (scope, iElement, iAtrrs, ngModelCtrl) {
            //   var _formatDate = function(date) {
            //      if (date) {
            //       date = date.replace(/[^0-9]+/g, "");
            //      }
            //
            //      if (date && date.length > 2) {
            //        var dia = new Number(date.substring(0, 2));
            //
            //        if (dia > 31) {
            //          date = "01" + date.substring(2);
            //        }
            //
            //       date = date.substring(0, 2) + "/" + date.substring(2);
            //      }
            //
            //      if (date && date.length > 5) {
            //        var mes = new Number(date.substring(3, 5));
            //
            //        if (mes > 12) {
            //          date = "01/01" + +date.substring(5);
            //        }
            //
            //        date = date.substring(0, 5) + "/" + date.substring(5, 9);
            //      }
            //
            //      return date;
            //   };
            //
            //   ngModelCtrl.$formatters.push(function (modelValue) {
            //     return _formatDate(modelValue);
            //   });
            //   ngModelCtrl.$render = function() {
            //       scope.model   = ngModelCtrl.$viewValue.red;
            //       scope.green = ngModelCtrl.$viewValue.green;
            //       scope.blue  = ngModelCtrl.$viewValue.blue;
            //   };
            // }
            controller: ['$scope', function($scope){
              $scope.open = function(){
                $scope.opened = true;
              };          
            }]
        };
    });

app.directive('jmjFooter', function() {
        return {
            restrict: 'E',
            templateUrl: 'footer/view.html',
            scope: {
                version:'@',
                year: '@',
                company: '@'
            }
        };

    });

app.provider('jmjFormConfig', function(){
  var _exception;

  this.setException = function(val){
    _exception = val;
  };

  this.$get = [function(){
      return {
        exception: _exception
      };
    }
  ];

})
.directive('jmjForm', function() {
        return {
            restrict: 'E',
            templateUrl: 'form/view.html',
            transclude: true,
            replace: true,
            scope: {
                ngSubmit: '=',
                exception: '='
            },
            controller: ['$scope', 'jmjFormConfig', function($scope, $provider){
              $scope.provider = $provider;
            }],
            link: function (scope, element) {

                var $element = angular.element(element);
                $element.bind('submit', function (e) {
                    e.preventDefault();

                    var form = scope.form;
                    scope.$parent.$broadcast('submit', form);

                    //verifico se o formulario é invalido
                    if (form.$invalid ) {
                        var exception = scope.exception || scope.provider.exception;
                        exception && exception();
                        scope.$apply();
                        return;
                    }
                    //executo o metodo salvar(padrao do scopo principal)
                    if (scope.ngSubmit) {
                        scope.ngSubmit();
                    }
                    scope.$apply();
                });
            }
        };
    });

app.directive('jmjInput', function() {
        return {
            restrict: 'E',
            templateUrl: 'input/view.html',
            scope: {
                id: '@',
                name: '@',
                type: '@',
                maxlength: '@',
                minlength: '@',
                placeholder: '@',
                pattern: '=',
                tooltip: '@',
                model: '=',
                required: '@',
                disabled : '@',
                styleClass : '@'
            },
            link: function (scope, element, attr) {
                scope.$on('submit', function (scope, form) {
                    if (attr.id) {
                        if (form[attr.id].$invalid ) {
                            scope.currentScope.$broadcast('jmjValidateEvent', form[attr.id].$error);
                            scope.currentScope.requerido = 'required';
                            return;
                        }
                    }
                    scope.currentScope.requerido = '';
                });
            }

        };

    });

app.directive('jmjInputIcon', function() {
        return {
            restrict: 'E',
            templateUrl: 'inputIcon/view.html',
            scope: {
                label: '@',
                id: '@',
                name: '@',
                maxlength: '@',
                minlength: '@',
                placeholder: '@',
                pattern: '=',
                mensagem: '@',
                tooltip: '@',
                model: '=',
                required: '@',
                disabled : '@',
                icon: '@'
            },
            link: function (scope, element, attr) {
                scope.$on('submit', function (scope, form) {
                    if (attr.id) {
                        if (form[attr.id].$invalid ) {
                            scope.currentScope.$broadcast('jmjValidateEvent', form[attr.id].$error);
                            scope.currentScope.requerido = 'required';
                            return;
                        }
                    }
                    scope.currentScope.requerido = '';
                });
            }

        };

    });

app.directive('jmjInputLabel', function() {
        return {
            restrict: 'E',
            templateUrl: 'inputLabel/view.html',
            scope: {
                label: '@',
                id: '@',
                name: '@',
                type: '@',
                maxlength: '@',
                minlength: '@',
                placeholder: '@',
                pattern: '=',
                mensagem: '@',
                tooltip: '@',
                model: '=',
                required: '@',
                disabled : '@',
                styleClass : '@'
            },
            link: function (scope, element, attr) {
                scope.$on('submit', function (scope, form) {
                    if (attr.id) {
                        if (form[attr.id].$invalid ) {
                            scope.currentScope.$broadcast('jmjValidateEvent', form[attr.id].$error);
                            scope.currentScope.requerido = 'required';
                            return;
                        }
                    }
                    scope.currentScope.requerido = '';
                });
            }

        };

    });

app.directive('jmjInputLabelHorizontal', function() {
        return {
            restrict: 'E',
            templateUrl: 'inputLabelHorizontal/view.html',
            scope: {
                label: '@',
                id: '@',
                name: '@',
                type: '@',
                maxlength: '@',
                minlength: '@',
                placeholder: '@',
                pattern: '=',
                mensagem: '@',
                tooltip: '@',
                model: '=',
                required: '@',
                disabled : '@'
            },
            link: function (scope, element, attr) {
                scope.$on('submit', function(scope, form) {
                    if (attr.id) {
                        if (form[attr.id].$invalid ) {
                            scope.currentScope.$broadcast('jmjValidateEvent', form[attr.id].$error);
                            scope.currentScope.requerido = 'required';
                            return;
                        }
                    }
                    scope.currentScope.requerido = '';
                });

            }
        };

    });

app.directive('jmjLabel', function() {
        return {
            restrict: 'E',
            templateUrl: 'label/view.html',
            scope : {
                label : '@',
                id: '@',
                required: '@',
                placeholder: '@',
                model : '=',
                disabled : '@'
            },
            link: function (scope, element, attr) {
                scope.$on('submit', function(scope, form) {
                    if (attr.id) {
                        if (form[attr.id].$invalid ) {
                            scope.currentScope.$broadcast('jmjValidateEvent', form[attr.id].$error);
                            scope.currentScope.requerido = 'required';
                            return;
                        }
                    }
                    scope.currentScope.requerido = '';
                });

            }
        };
    });

app.directive('jmjPanel', function() {
        return {
            restrict: 'E',
            templateUrl: 'panel/view.html',
            scope:{
                styleClass: '@'
            },
            transclude: true
        };
    });
app.directive('jmjPanelLabel', function() {
        return {
            restrict: 'E',
            templateUrl: 'panelLabel/view.html',
            scope: {
                label: '@',
                icon: '@'
            },
            transclude : true
        };
    });

app.directive('jmjPanelStyle', function() {
        return {
            restrict: 'E',
            templateUrl: 'panelStyle/view.html',
            scope:{
                style: '@'
            },
            transclude : true
        };
    });
app.directive('jmjRadioLabel', function() {
        return {
            restrict: 'E',
            templateUrl: 'radioLabel/view.html',
            scope: {
                label: '@',
                data: '=',
                model: '=',
                space: '@',
                text: '@',
                campo: '@',
                default: '=',
                required: '@',
                disabled : '@',
                atributo : '@',
                name: '@'
            },
            link: function (scope) {
                scope.$on('submit', function (scope) {
                    if (scope.currentScope.required && !scope.currentScope.model) {
                        scope.currentScope.requerido = 'required';
                        return;
                    }
                    scope.currentScope.requerido = '';
                });
            },
            controller: ['$scope', function ($scope) {
                $scope.$watch('data', function(value){
                    if (value && $scope.default && !$scope.model) {
                        value.forEach(function(element, index, array){
                            if ($scope.default(element, index, array)){
                                $scope.model = element;
                            }
                        });
                    }
                });
            }]
        };
    });

app.directive('jmjSelectLabel', function() {
        return {
            restrict: 'E',
            templateUrl: 'selectLabel/view.html',
            scope: {
                label: '@',
                data: '=',
                campo: '@',
                model: '=',
                default: '=',
                required : '@',
                disabled : '@'
            },
            link: function(scope){
                scope.$on('submit', function(scope) {
                    if(scope.currentScope.required && !scope.currentScope.model){
                        scope.currentScope.requerido = 'required';
                        return;
                    }
                    scope.currentScope.requerido = '';
                });
            },

            controller: ['$scope', function ($scope) {
                $scope.$watch('data', function(value){
                    if (value && $scope.default && !$scope.model) {
                        value.forEach(function(element, index, array){
                            if ($scope.default(element, index, array)){
                                $scope.model = element;
                            }
                        });
                    }
                });
            }]
        };
    });

app.directive('jmjTextLabel', function() {
        return {
            restrict: 'E',
            templateUrl: 'textLabel/view.html',
            scope: {
                label: '@',
                id: '@',
                maxlength: '@',
                minlength: '@',
                placeholder: '@',
                pattern: '@',
                model: '=',
                disabled : '@',
                required: '@'
            }
        };
    });

app.directive('jmjTimeInputLabel', function() {
        return {
            restrict: 'E',
            templateUrl: 'timeInputLabel/view.html',
            scope : {
                id: '@',
                label: '@',
                name: '@',
                model: '=',
                required: '@',
                disabled : '@'
            }
        };

    });

app.directive('jmjValidate', function() {
        return {
            restrict: 'E',
            templateUrl: 'validate/view.html',
            transclude: true,
            controller: ['$scope', function ($scope) {
                $scope.$on('jmjValidateEvent', function (evento, elemento) {
                    $scope.error = elemento;
                    if($scope.error.required) {
                        $scope.messageRequired = 'Campo Obrigatório';
                    }else if($scope.error.minlength){
                        $scope.messageMinlength = 'Tamanho minimo é '+evento.currentScope.minlength;
                    }else if($scope.error.maxlength) {
                        $scope.messageMaxlength = 'Tamanho maximo é '+evento.currentScope.maxlength;
                    }else if($scope.error.pattern){
                        $scope.messagePattern = evento.currentScope.pattern.mensagem;
                    }
                });
            }]
        };
    });
})();