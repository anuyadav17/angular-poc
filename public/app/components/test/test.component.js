(function(){
  'use strict';
  angular
    .module('myApp')
    .component('testComponent', {
    templateUrl: 'app/components/test/test.view.html',
    controller: [TestController]
  });
})();

function TestController() {
}
