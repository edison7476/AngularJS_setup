var myApp = angular.module('myApp');

myApp.directive('myDirective', function (){
  return {
    restric:'AE',
    scope:{
      variableName:"="
    },
    replace:true,
    templateUrl: "directiveTemplates/myDirective.html"
  };
});
