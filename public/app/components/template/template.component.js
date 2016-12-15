(function(){
    'use strict';
    angular
        .module('myApp')
        .component('mainComponent', {
            templateUrl: 'app/components/template/template.html',
            controller: ['$element', MainController]
        });
})();

function MainController(elem) {
}
    