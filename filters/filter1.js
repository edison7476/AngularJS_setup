var myApp = angular.module('myApp');

myApp.filter('percentage_symbol', function (){
  return function (num){
    return num + '%';
  };
});
