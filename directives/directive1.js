var myApp = angular.module('myApp');

myApp.directive('myDirective', function (){

// DDO properties
  return {
    restric:'AE',
    scope:{
      variableName:"="
    },
    templateUrl: "directiveTemplates/myDirective.html",
    replace:true,
    //transclude: boolean,
    //controller: controller_name,
    //link: function (scope, element, attrs){ }
  };
});
