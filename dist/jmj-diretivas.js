(function(){"use strict";var app=angular.module("jmj.diretivas",[]);
app.directive("jmjAutocomplete",function(){return{restrict:"E",templateUrl:"autocomplete/view.html",scope:{id:"@",label:"@",placeholder:"@",model:"=",pattern:"=",pesquisa:"=",mensagem:"@",campo:"@",tooltip:"@",maxlength:"@",minlength:"@",required:"@",disabled:"@"},link:function(e){e.$on("submit",function(e){return e.currentScope.required&&!e.currentScope.model?void(e.currentScope.requerido="required"):void(e.currentScope.requerido="")})},controller:["$scope",function(e){e.$watch("model",function(e,o,r){if(angular.isString(r.model)||!r.model||r.model[r.campo]){if(angular.isString(r.model)&&r.model){var l={};l[r.campo]=r.model,r.model=l}}else r.model[r.campo]=null})}]}});
app.directive("jmjDateInputLabel",function(){return{restrict:"E",templateUrl:"dateInputLabel/view.html",scope:{label:"@",id:"@",maxlength:"@",minlength:"@",placeholder:"@",pattern:"@",model:"=",disabled:"@"}}});
app.directive("jmjForm",function(){return{restrict:"E",templateUrl:"form/view.html",transclude:!0,replace:!0,scope:{ngSubmit:"="},link:function(r,t){var e=angular.element(t);e.bind("submit",function(t){t.preventDefault();var e=r.form;return r.$parent.$broadcast("submit",e),e.$invalid?(sandbox.errorObrigatorio(),void r.$apply()):(r.ngSubmit&&r.ngSubmit(),void r.$apply())})}}});
app.directive("jmjInput",function(){return{restrict:"E",templateUrl:"input/view.html",scope:{id:"@",name:"@",type:"@",maxlength:"@",minlength:"@",placeholder:"@",pattern:"=",tooltip:"@",model:"=",required:"@",disabled:"@",styleClass:"@"},link:function(e,r,t){e.$on("submit",function(e,r){return t.id&&r[t.id].$invalid?(e.currentScope.$broadcast("jmjValidateEvent",r[t.id].$error),void(e.currentScope.requerido="required")):void(e.currentScope.requerido="")})}}});
app.directive("jmjInputIcon",function(){return{restrict:"E",templateUrl:"inputIcon/view.html",scope:{label:"@",id:"@",name:"@",maxlength:"@",minlength:"@",placeholder:"@",pattern:"=",mensagem:"@",tooltip:"@",model:"=",required:"@",disabled:"@",icon:"@"},link:function(e,r,i){e.$on("submit",function(e,r){return i.id&&r[i.id].$invalid?(e.currentScope.$broadcast("jmjValidateEvent",r[i.id].$error),void(e.currentScope.requerido="required")):void(e.currentScope.requerido="")})}}});
app.directive("jmjInputLabel",function(){return{restrict:"E",templateUrl:"inputLabel/view.html",scope:{label:"@",id:"@",name:"@",type:"@",maxlength:"@",minlength:"@",placeholder:"@",pattern:"=",mensagem:"@",tooltip:"@",model:"=",required:"@",disabled:"@",styleClass:"@"},link:function(e,r,t){e.$on("submit",function(e,r){return t.id&&r[t.id].$invalid?(e.currentScope.$broadcast("jmjValidateEvent",r[t.id].$error),void(e.currentScope.requerido="required")):void(e.currentScope.requerido="")})}}});
app.directive("jmjInputLabelHorizontal",function(){return{restrict:"E",templateUrl:"inputLabelHorizontal/view.html",scope:{label:"@",id:"@",name:"@",type:"@",maxlength:"@",minlength:"@",placeholder:"@",pattern:"=",mensagem:"@",tooltip:"@",model:"=",required:"@",disabled:"@"},link:function(e,r,t){e.$on("submit",function(e,r){return t.id&&r[t.id].$invalid?(e.currentScope.$broadcast("jmjValidateEvent",r[t.id].$error),void(e.currentScope.requerido="required")):void(e.currentScope.requerido="")})}}});
app.directive("jmjLabel",function(){return{restrict:"E",templateUrl:"label/view.html",scope:{label:"@",id:"@",required:"@",placeholder:"@",model:"=",disabled:"@"}}});
app.directive("jmjPanel",function(){return{restrict:"E",templateUrl:"panel/view.html",scope:{styleClass:"@"},transclude:!0}});
app.directive("jmjPanelLabel",function(){return{restrict:"E",templateUrl:"panelLabel/view.html",scope:{label:"@",icon:"@"},transclude:!0}});
app.directive("jmjPanelStyle",function(){return{restrict:"E",templateUrl:"panelStyle/view.html",scope:{style:"@"},transclude:!0}});
app.directive("jmjRadioLabel",function(){return{restrict:"E",templateUrl:"radioLabel/view.html",scope:{label:"@",data:"=",model:"=",space:"@",text:"@",campo:"@","default":"=",required:"@",disabled:"@",atributo:"@",name:"@"},link:function(e){e.$on("submit",function(e){return e.currentScope.required&&!e.currentScope.model?void(e.currentScope.requerido="required"):void(e.currentScope.requerido="")})},controller:["$scope",function(e){e.$watch("data",function(r){r&&e["default"]&&!e.model&&r.forEach(function(r,t,o){e["default"](r,t,o)&&(e.model=r)})})}]}});
app.directive("jmjSelectLabel",function(){return{restrict:"E",templateUrl:"selectLabel/view.html",scope:{label:"@",data:"=",campo:"@",model:"=","default":"=",required:"@",disabled:"@"},link:function(e){e.$on("submit",function(e){return e.currentScope.required&&!e.currentScope.model?void(e.currentScope.requerido="required"):void(e.currentScope.requerido="")})},controller:["$scope",function(e){e.$watch("data",function(r){r&&e["default"]&&!e.model&&r.forEach(function(r,t,o){e["default"](r,t,o)&&(e.model=r)})})}]}});
app.directive("jmjTextLabel",function(){return{restrict:"E",templateUrl:"textLabel/view.html",scope:{label:"@",id:"@",maxlength:"@",minlength:"@",placeholder:"@",pattern:"@",model:"=",disabled:"@",required:"@"}}});
app.directive("jmjTimeInputLabel",function(){return{restrict:"E",templateUrl:"timeInputLabel/view.html",scope:{label:"@",id:"@",name:"@",maxlength:"@",minlength:"@",placeholder:"@",pattern:"=",mensagem:"@",tooltip:"@",model:"=",required:"@",disabled:"@"}}});
app.directive("jmjValidate",function(){return{restrict:"E",templateUrl:"validate/view.html",transclude:!0,controller:["$scope",function(e){e.$on("jmjValidateEvent",function(r,t){e.error=t,e.error.required?e.messageRequired="Campo Obrigatório":e.error.minlength?e.messageMinlength="Tamanho minimo é "+r.currentScope.minlength:e.error.maxlength?e.messageMaxlength="Tamanho maximo é "+r.currentScope.maxlength:e.error.pattern&&(e.messagePattern=r.currentScope.pattern.mensagem)})}]}});
angular.module("jmj.diretivas").run(["$templateCache",function(e){e.put("autocomplete/view.html",'<jmj-label id={{id}} label={{label}} required={{required}}></jmj-label><input id={{id}} type=text name={{id}} placeholder={{placeholder}} pattern={{pattern}} class="form-control form-control-2" maxlength={{maxlength}} ng-model=model ng-focus="selecionado = true" ng-blur="selecionado = false" ng-required="{{ required != undefined}}" ng-init="pristine=true" ng-minlength=minlength ng-disabled="{{disabled != undefined}}" uib-typeahead="item as item[campo] for item in pesquisa(campo, $viewValue)" tooltip-enable=!model tooltip-placement=bottom tooltip-trigger=focus uib-tooltip={{tooltip}} typeahead-loading=loading typeahead-no-results=noResults> <i ng-if=loading class="glyphicon glyphicon-refresh"></i><div class=bg-danger ng-show=invalid>{{mensagem}}</div><div ng-if="noResults && selecionado"><i class="glyphicon glyphicon-remove"></i> Nenhum resultado encontrado.</div>'),e.put("dateInputLabel/view.html",'<div class=row><div class=form-group><jmj-label id={{id}} label={{label}}></jmj-label><div class=input-group><span class=input-group-addon id=basic-addon1><i class="fa fa-calendar"></i></span> <input id={{id}} type=date class="form-control form-control-2 form-control-padding" ng-model=model required="{{ required != undefined}}" placeholder=dd/mm/aaaa aria-describedby="date inputText"><jmj-validate></jmj-validate></div></div></div>'),e.put("form/view.html","<form name=form novalidate ng-transclude></form>"),e.put("input/view.html",'<input id={{id}} type="{{ type || \'text\'}}" name={{id}} class="form-control form-control-2 form-control-padding" ng-model=model ng-maxlength=maxlength ng-minlength=minlength maxlength={{maxlength}} placeholder={{placeholder}} aria-describedby="input text" ng-disabled="{{disabled != undefined}}" pattern={{pattern.pattern}} ng-required="{{ required != undefined}}" uib-tooltip={{tooltip}} tooltip-placement=bottom tooltip-trigger=focus tooltip-enable=!model><jmj-validate></jmj-validate>'),e.put("inputIcon/view.html",'<div class="col-sm-10 col-sm-offset-1 padding-top-10"><div class="input-group margin-bottom-10"><span class=input-group-addon id=basic-addon1><i class="fa {{icon}}"></i></span> <input id={{id}} type="{{ type || \'text\'}}" name={{id}} class="form-control form-control-2 input-active" ng-model=model ng-maxlength=maxlength ng-minlength=minlength maxlength={{maxlength}} placeholder={{placeholder}} aria-describedby="input text" ng-disabled="disabled == \'true\' ? true : false" pattern={{pattern.pattern}} ng-required="{{ required != undefined}}" uib-tooltip={{tooltip}} tooltip-placement=bottom tooltip-trigger=focus tooltip-enable=!model></div></div>'),e.put("inputLabel/view.html",'<jmj-label id={{id}} label={{label}} required={{required}}></jmj-label><div><input id={{id}} type="{{type || \'text\'}}" name={{id}} class="form-control form-control-2 form-control-padding" ng-model=model ng-maxlength=maxlength ng-minlength=minlength maxlength={{maxlength}} placeholder={{placeholder}} aria-describedby="input text" ng-disabled="{{disabled != undefined}}" pattern={{pattern.pattern}} ng-required="{{ required != undefined}}" uib-tooltip={{tooltip}} tooltip-placement=bottom tooltip-trigger=focus tooltip-enable=!model><jmj-validate></jmj-validate></div>'),e.put("inputLabelHorizontal/view.html",'<jmj-label id={{id}} label={{label}} required={{required}} class="{{requerido}} col-md-5 col-sm-5 col-xs-6 control-label text-right padding-top-7"></jmj-label><div class="col-md-7 col-sm-7 col-xs-6"><input id={{id}} type="{{ type || \'text\'}}" name={{id}} class="form-control form-control-3" ng-model=model ng-maxlength=maxlength ng-minlength=minlength maxlength={{maxlength}} placeholder={{placeholder}} aria-describedby="input text" ng-disabled="disabled == \'true\' ? true : false" pattern={{pattern.pattern}} ng-required="{{ required != undefined}}" uib-tooltip={{tooltip}} tooltip-placement=bottom tooltip-trigger=focus tooltip-enable=!model><jmj-validate></jmj-validate></div>'),e.put("label/view.html",'<label for={{id}} class={{requerido}}>{{label}}<span ng-if="required != undefined" class=required>*</span>:</label>'),e.put("panel/view.html",'<div class="panel panel-default"><div class=panel-body><div ng-transclude class={{styleClass}}></div></div></div>'),e.put("panelLabel/view.html",'<div class="box box-default"><div class="container-fluid padding-bottom-10 padding-top-7 cinza2 border-bottom"><h5><i class="fa {{icon}}"></i> {{label}}</h5></div><div class=box-body><div class="container-fluid padding-top-15 padding-bottom-5"><div ng-transclude></div></div></div></div>'),e.put("panelStyle/view.html",'<div class="container-fluid padding-bottom-10 padding-top-10 {{style}} margin-bottom-10"><div class=row><div ng-transclude></div></div></div>'),e.put("radioLabel/view.html",'<div><div><jmj-label id={{id}} label={{label}} required={{required}}></jmj-label></div><div><div><label class={{space}} ng-repeat="radio in data"><input type=radio name={{name}} value={{radio}} ng-value=radio ng-model=$parent.model ng-disabled="disabled == \'true\' ? true : false" aria-describedby="input radiobox"> {{text ? radio.text : radio}}</label></div><jmj-validate></jmj-validate></div></div>'),e.put("selectLabel/view.html",'<div><jmj-label id={{id}} label={{label}} required={{required}}></jmj-label></div><div><select name={{id}} class="form-control form-control-2" ng-disabled="{{disabled != undefined}}" ng-options="select[campo] for select in data track by select[campo]" ng-model=model aria-describedby="select component"><option class=form-control value>Selecione</option></select><jmj-validate></jmj-validate></div>'),e.put("textLabel/view.html",'<div><div class><label for={{id}} class={{requerido}}>{{label}}:</label></div><div><textarea id={{id}} class="form-control form-control-2" ng-model=model ng-maxlength=maxlength ng-minlength=minlength maxlength={{maxlength}} placeholder={{placeholder}} ng-required="{{ required != undefined}}" aria-describedby=pesquisarInput ng-disabled="disabled == \'true\' ? true : false">\r\n\r\n        <jmj-validate></jmj-validate>\r\n    </textarea></div></div>'),e.put("timeInputLabel/view.html",'<div><div class><label for={{id}} class="{{required ? \'requerido\':\'\'}}">{{label}}:</label><span class=required ng-if=required>*</span><jmj-label id={{id}} label={{label}}></jmj-label></div><div><input id={{id}} type=time class="form-control form-control-2 form-control-padding" ng-model=model required="{{ required != undefined}}" placeholder=01:01 aria-describedby="time input" uib-tooltip={{tooltip}} tooltip-placement=bottom tooltip-trigger=focus tooltip-enable=!model><jmj-validate></jmj-validate></div></div>'),e.put("validate/view.html","<div ng-if=error><div ng-if=error.required class=required>{{messageRequired}}</div><div ng-if=error.minlength class=required>{{messageMinlength}}</div><div ng-if=error.pattern class=required>{{messagePattern}}</div><div ng-if=error.maxlength class=required>{{messageMaxlength}}</div></div>")}]);})();