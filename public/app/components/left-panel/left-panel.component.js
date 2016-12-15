(function(){
    'use strict';
    angular
        .module('myApp')
        .component('leftPanel', {
            templateUrl: 'app/components/left-panel/left-panel.html',
            controller: [LeftPanelController]
        });
})();

function LeftPanelController() {
}
    