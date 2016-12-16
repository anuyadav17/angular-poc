(function(){
    'use strict';
    angular
        .module('myApp')
        .component('rightPanel', {
            templateUrl: 'app/components/right-panel/right-panel.html',
            controller: ["$scope",RightPanelController]
        });
})();

function RightPanelController($scope) {
    $scope.data = {};
    $scope.flag= {};

    $scope.$on('AddTier', function(event, args) {
        $scope.data = args.data;
        $scope.flag = args.type;
    });

}
    