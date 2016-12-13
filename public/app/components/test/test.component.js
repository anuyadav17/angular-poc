(function(){
  'use strict';
  angular
    .module('myApp')
    .component('testComponent', {
    templateUrl: 'app/components/test/test.view.html',
    controller: ['$element', 'dragularService', TestController]
  });
})();

function TestController(elem, dragularService) {
  dragularService('.tool-container');
}
