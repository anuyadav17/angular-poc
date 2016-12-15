"use strict";

(function (ng) {
  var controller, component;

  controller = function () {
    this.$onInit = function () { }

    this.$onChanges = function (data) { }

    this.$postLink = function () { }
  }

  component = {
    bindings: {},
    templateUrl: 'app/components/layout/right-sidebar/right-sidebar.component.html',
    controller: controller,
    controllerAs: 'vm'
  };

  ng
    .module('myApp')
    .component('right-sidebar', component)
})(angular = angular || (window.angular || {}))