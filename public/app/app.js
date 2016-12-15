(function(){
  'use strict';
  angular.module('myApp', ['ngComponentRouter','wapweb.componentRouterActive'])
      .config(function($locationProvider) {
          $locationProvider.html5Mode(true);
      })

      .value('$routerRootComponent', 'myApp')
      .component('myApp', {
          templateUrl:"app/app.html",
          $routeConfig: [{
              path: '/',
              name: 'MainComponent',
              component: 'mainComponent',
              useAsDefault: true
           },
           {
               path: '/dashboard',
               name: 'Dashboard',
               component: 'testComponent'
           }]
      })
      .controller("dragDropCtrl", function ($scope) {
        $scope.data = {
            name: "No name",
            lastModified: "No date",
            src: "No data"
        };
      });
})();
