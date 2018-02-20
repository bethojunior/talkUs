//FOTO DO PERFIL
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    capturePhoto : function(){
        $('.fixed-action-btn').closeFAB();
        navigator.camera.getPicture(onSuccess, onFail, { quality: 100,
            destinationType: Camera.DestinationType.FILE_URI });
        function onSuccess(imageURI) {
            
            $('#sendFilePhoto').modal('open');
            var image  = document.getElementById("myImage");
            image.src = imageURI;
            let src = document.getElementById("srcPhoto").files[0];
            src.files = imageURI;
        }

        function onFail(message) {
            alert('Failed because: ' + "Error");
        }

        function clearCache(){
            navigator.camera.cleanup();
        }
    }

};

