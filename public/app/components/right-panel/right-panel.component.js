(function(){
    'use strict';
    angular
        .module('myApp')
        .component('rightPanel', {
            templateUrl: 'app/components/right-panel/right-panel.html',
            controller: [RightPanelController]
        });
})();

function RightPanelController() {
}
    