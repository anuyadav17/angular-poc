(function(){
  'use strict';
  angular.module('myApp', ['dragularModule'])
  .controller("dragDropCtrl", function ($scope) {
    $scope.data = {
        name: "No name",
        lastModified: "No date",
        src: "No data"
    };
  });  
})();
