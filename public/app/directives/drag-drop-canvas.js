angular.module('myApp')
  .directive('dragDropCanvas', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<canvas></canvas>',
        controller: 'dragDropCtrl',
        scope: false,
        link: function ($scope, element) {
            /**
             * Bind canvas to dragover event
             */
            element.bind('dragover', function (event) {
                event.stopPropagation();
                event.preventDefault();

                //Set the drop effect for the draggable image
                event.dataTransfer.dropEffect = 'copy';
            });

            /**
             * Bind canvas to dragenter event
             */
            element.bind('dragenter', function (event) {
                event.stopPropagation();
                event.preventDefault();

                //Set the drop effect for the draggable image
                event.dataTransfer.dropEffect = 'copy';
            });

            /**
             * Bind canvas to drop event; prevent default behavior, read and load image into context
             */
            element.bind('drop', function (event) {
                event.stopPropagation();
                event.preventDefault();

                var canCopy = verifyFile(event);

                if (canCopy) {

                    var context = element[0].getContext('2d')

                    //Get the event files
                    var file = event.dataTransfer.files[0];

                    //Load image file if FileReader exists and this is really an image
                    var reader = new FileReader();

                    //File reader is loaded; load image
                    reader.onload = function (event) {
                        var image = new Image();

                        image.src = event.target.result;

                        //Image is loaded; draw image
                        image.onload = function (event) {
                            //Draw image onto canvas context
                            context.drawImage(image, 0, 0, element[0].width, element[0].height);

                            //Get the base64 image context
                            $scope.data.src = image.src;
                            $scope.$apply('data');
                        }

                    }

                    //Clear the canvas context
                    context.clearRect(0, 0, element[0].width, element[0].height);

                    //Load file reader
                    reader.readAsDataURL(file);

                    //Get image name and date
                    $scope.data.name = file.name;
                    $scope.data.lastModified = file.lastModifiedDate;
                }
            });

            /**
             * Verify that there is only one draggable file and can be read as an image
             */
            var verifyFile = function (event) {
                //Get the event files
                var files = event.dataTransfer.files;

                //Ensure there is only one file and it is an image
                if (files.length === 1 && ((typeof FileReader !== 'undefined' && files[0].type.indexOf('image') !== -1))) {
                    return true;
                }

                return false;
            };
        }
    }
});
