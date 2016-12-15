(function(){
    'use strict';
    angular
        .module('myApp')
        .component('navComponent', {
            templateUrl: 'app/components/nav/nav.html',
            controller: [NavController]
        });
})();

function NavController() {
}
    