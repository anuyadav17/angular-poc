/**
 * Created by vijay.gawade on 16-12-2016.
 */
(function(){
    'use strict';
    angular
        .module('myApp')
            .constant('mockData', {
                data:{
                    tierInfo:{
                        elType:"tier",
                        name:"new tier",
                        type:"app",
                        replica:1
                    },
                    container:{
                        name:"new_image",
                        image:"mysql:latest"
                    },
                    volume:{
                        vol:"var/lib/vol",
                        minSize:"1G",
                        maxSize:"10g"
                    },
                    ports:{
                        contPort:"8080",
                        svcPort:"8080",
                        hostPort:0,
                        name:"port1",
                        protocol:"TCP/UDP/http/https"
                    }
                }
        });
})();