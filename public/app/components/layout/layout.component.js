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
    template: [
      '<left-sidebar></left-sidebar>',
      '<container></container>',
      '<right-sidebar></right-sidebar>'
    ].join(''),
    controller: controller,
    controllerAs: 'vm'
  };

  ng
    .module('myApp')
    .component('layout', component)
})(angular = angular || (window.angular || {}))