(function(){
    'use strict';
    angular
        .module('myApp')
        .component('leftPanel', {
            templateUrl: 'app/components/left-panel/left-panel.html',
            controller: ["$rootScope","mockData",LeftPanelController],
            controllerAs:'lpc'
        });
})();

function LeftPanelController($rootScope, mockData) {
    this.data = mockData.data;

    this.clicked = function (event, data, type){
        event.stopPropagation();
        event.preventDefault();
        $rootScope.$broadcast('AddTier', { data: data,type:type });
    }
}
    