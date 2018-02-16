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
        $('#modalSendFile').modal('open'); 
        navigator.camera.getPicture(onSuccess, onFail, { quality: 100,
            destinationType: Camera.DestinationType.FILE_URI });
        function onSuccess(imageURI) {       
            //document.getElementById("getOut").style.display = "none";
            document.getElementById("formImg1").value = imageURI;
            document.getElementById("formImg2").value = imageURI;
        }

        function onFail(message) {
            alert('Failed because: ' + "Error");
        }

        function clearCache(){
            navigator.camera.cleanup();
        }
    }
    
};

