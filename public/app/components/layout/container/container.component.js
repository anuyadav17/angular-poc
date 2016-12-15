"use strict";

(function (ng) {
  var controller, component;

  controller = function () {
    this.$onInit = function () { }

    this.$onChanges = function (data) { }

    this.$postLink = function () { }

    this.onDrop = function (data) { 
      console.log(data)
    }
  }

  component = {
    bindings: {},
    templateUrl: 'app/components/layout/container/container.component.html',
    controller: controller,
    controllerAs: 'vm'
  };

  ng
    .module('myApp')
    .component('container', component)
})(angular = angular || (window.angular || {}))