(function(){
    'use strict';

    angular.module('myApp')
    .factory('draggableFactory', draggableFactory);

    function draggableFactory() {
        var factory = {
            clonedElement: {},
            childLeft: 0,
            childTop: 0
        }
        return {
          factory: factory
        };
    }
})();
