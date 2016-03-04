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

angular.module("jmj.diretivas").run(["$templateCache", function($templateCache) {$templateCache.put("autocomplete/view.html","<jmj-label id={{id}} label={{label}} required={{required}}></jmj-label><input id={{id}} type=text name={{id}} placeholder={{placeholder}} pattern={{pattern}} class=\"form-control form-control-2 form-control-padding\" maxlength={{maxlength}} ng-model=model ng-focus=\"selecionado = true\" ng-blur=\"selecionado = false\" ng-required=\"{{ required != undefined}}\" ng-init=\"pristine=true\" ng-minlength=minlength ng-disabled=\"{{disabled != undefined}}\" uib-typeahead=\"item as item[campo] for item in pesquisa(campo, $viewValue)\" tooltip-enable=!model tooltip-placement=bottom tooltip-trigger=focus uib-tooltip={{tooltip}} typeahead-loading=loading typeahead-no-results=noResults> <i ng-if=loading class=\"glyphicon glyphicon-refresh\"></i><div class=bg-danger ng-show=invalid>{{mensagem}}</div><div ng-if=\"noResults && selecionado\"><i class=\"glyphicon glyphicon-remove\"></i> Nenhum resultado encontrado.</div>");
$templateCache.put("dateInputLabel/view.html","<div class=form-group><label for={{id}} class={{requerido}}>{{label}}<span ng-if=required class=required>*</span>:</label><p class=input-group><input type=text class=\"form-control {{styleClass}}\" ng-model=model ng-required=required uib-datepicker-popup=\"{{ format || \'dd/MM/yyyy\'}}\" datepicker-options=options is-open=opened show-button-bar=btnbar ng-disabled=disabled close-text=Fechar current-text=Hoje clear-text=Limpar> <span class=input-group-btn><button type=button class=\"btn btn-default\" ng-click=open()><i class=\"fa fa-calendar\"></i></button></span></p><jmj-validate></jmj-validate></div>");
$templateCache.put("footer/view.html","<footer class=main-footer><div class=\"pull-right hidden-xs\"><b>Version</b> {{version}}</div><strong>Copyright &copy; {{year}} <a href>{{company}}</a>.</strong> All rights reserved.</footer>");
$templateCache.put("form/view.html","<form name=form novalidate ng-transclude></form>");
$templateCache.put("input/view.html","<input id={{id}} type=\"{{ type || \'text\'}}\" name={{id}} class=\"form-control form-control-2 form-control-padding\" ng-model=model ng-maxlength=maxlength minlength={{minlength}} maxlength={{maxlength}} placeholder={{placeholder}} aria-describedby=\"input text\" ng-disabled=\"{{disabled != undefined}}\" pattern={{pattern.pattern}} ng-required=\"{{ required != undefined}}\" uib-tooltip={{tooltip}} tooltip-placement=bottom tooltip-trigger=focus tooltip-enable=!model><jmj-validate></jmj-validate>");
$templateCache.put("inputIcon/view.html","<div class=\"col-sm-10 col-sm-offset-1 padding-top-10\"><div class=\"input-group margin-bottom-10\"><span class=input-group-addon id=basic-addon1><i class=\"fa {{icon}}\"></i></span> <input id={{id}} type=\"{{ type || \'text\'}}\" name={{id}} class=\"form-control form-control-2 input-active\" ng-model=model maxlength={{maxlength}} minlength={{minlength}} placeholder={{placeholder}} aria-describedby=\"input text\" ng-disabled=\"{{disabled != undefined}}\" pattern={{pattern.pattern}} ng-required=\"{{ required != undefined}}\" uib-tooltip={{tooltip}} tooltip-placement=bottom tooltip-trigger=focus tooltip-enable=!model></div></div>");
$templateCache.put("inputLabel/view.html","<div class=form-group><label for={{id}} class={{requerido}}>{{label}}<span ng-if=required class=required>*</span>:</label><div><input id={{id}} type=\"{{type || \'text\'}}\" name={{id}} class=\"form-control form-control-2 form-control-padding\" ng-model=model minlength={{minlength}} maxlength={{maxlength}} ng-maxlength=maxlength ng-minlength=minlength placeholder={{placeholder}} aria-describedby=\"input text\" ng-disabled=\"{{disabled != undefined}}\" pattern={{pattern.pattern}} ng-required=\"{{ required != undefined}}\" uib-tooltip={{tooltip}} tooltip-placement=bottom tooltip-trigger=focus tooltip-enable=!model><jmj-validate></jmj-validate></div></div>");
$templateCache.put("label/view.html","<label for={{id}} class={{requerido}}>{{label}}<span ng-if=\"required != undefined\" class=required>*</span>:</label>");
$templateCache.put("inputLabelHorizontal/view.html","<div class=form-group><label for={{id}} class=\"{{requerido}} col-md-5 col-sm-5 col-xs-5\">{{label}}<span ng-if=required class=required>*</span>:</label><div class=\"col-md-7 col-sm-7 col-xs-7\"><input id={{id}} type=\"{{ type || \'text\'}}\" name={{id}} class=\"form-control form-control-3\" ng-model=model minlength={{minlength}} maxlength={{maxlength}} placeholder={{placeholder}} aria-describedby=\"input text\" ng-disabled=\"{{disabled != undefined}}\" pattern={{pattern.pattern}} ng-required=\"{{ required != undefined}}\" uib-tooltip={{tooltip}} tooltip-placement=bottom tooltip-trigger=focus tooltip-enable=!model><jmj-validate></jmj-validate></div></div>");
$templateCache.put("panel/view.html","<div class=\"panel panel-default\"><div class=panel-body><div ng-transclude class={{styleClass}}></div></div></div>");
$templateCache.put("panelLabel/view.html","<div class=\"box box-default\"><div class=\"container-fluid padding-bottom-10 padding-top-7 cinza2 border-bottom\"><h5><i class=\"fa {{icon}}\"></i> {{label}}</h5></div><div class=box-body><div class=\"container-fluid padding-top-15 padding-bottom-5\"><div ng-transclude></div></div></div></div>");
$templateCache.put("panelStyle/view.html","<div class=\"container-fluid padding-bottom-10 padding-top-10 {{style}} margin-bottom-10\"><div class=row><div ng-transclude></div></div></div>");
$templateCache.put("radioLabel/view.html","<div class=form-group><label for={{id}} class={{requerido}}>{{label}}<span ng-if=required class=required>*</span>:</label><div><div><label class={{space}} ng-repeat=\"radio in data\"><input type=radio name={{name}} value={{radio}} ng-value=radio ng-model=$parent.model ng-disabled=\"disabled == \'true\' ? true : false\" aria-describedby=\"input radiobox\"> {{text ? radio.text : radio}}</label></div><jmj-validate></jmj-validate></div></div>");
$templateCache.put("selectLabel/view.html","<div class=form-group><label for={{id}} class={{requerido}}>{{label}}<span ng-if=required class=required>*</span>:</label><div><select name={{id}} class=\"form-control form-control-2\" ng-disabled=\"{{disabled != undefined}}\" ng-options=\"select[campo] for select in data track by select[campo]\" ng-model=model aria-describedby=\"select component\"><option class=form-control value>Selecione</option></select><jmj-validate></jmj-validate></div></div>");
$templateCache.put("textLabel/view.html","<div class=form-group><label for={{id}} class={{requerido}}>{{label}}<span ng-if=required class=required>*</span>:</label><div><textarea id={{id}} class=\"form-control form-control-2\" ng-model=model ng-maxlength=maxlength ng-minlength=minlength maxlength={{maxlength}} placeholder={{placeholder}} ng-required=\"{{ required != undefined}}\" aria-describedby=pesquisarInput ng-disabled=\"disabled == \'true\' ? true : false\">\r\n\r\n        <jmj-validate></jmj-validate>\r\n    </textarea></div></div>");
$templateCache.put("validate/view.html","<div ng-if=error><div ng-if=error.required class=required>{{messageRequired}}</div><div ng-if=error.minlength class=required>{{messageMinlength}}</div><div ng-if=error.pattern class=required>{{messagePattern}}</div><div ng-if=error.maxlength class=required>{{messageMaxlength}}</div></div>");
$templateCache.put("timeInputLabel/view.html","<div class=form-group><label for={{id}} class={{requerido}}>{{label}}<span ng-if=required class=required>*</span>:</label><uib-timepicker id={{id}} ng-model=model type=number show-spinners=false hour-step=\"hstep || 1\" minute-step=\"mstep || 1\" show-meridian=ismeridian></uib-timepicker><jmj-validate></jmj-validate></div>");}]);})();