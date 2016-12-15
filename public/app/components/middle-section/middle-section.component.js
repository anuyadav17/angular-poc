/**
 * Created by vijay.gawade on 15-12-2016.
 */
(function(){
    'use strict';
    angular
        .module('myApp')
        .component('middleSection', {
            templateUrl: 'app/components/middle-section/middle-section.html',
            controller: [MiddleSecController]
        });
})();

function MiddleSecController() {
}
