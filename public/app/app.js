(function () {
  'use strict';
  angular
    .module('myApp', [ 'ang-drag-drop' ])
    .controller("dragDropCtrl", function ($scope) {
      $scope.data = {
        name: "No name",
        lastModified: "No date",
        src: "No data"
      };
    });
})();
