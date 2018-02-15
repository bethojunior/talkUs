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
        
        navigator.camera.getPicture(onSuccess, onFail, { quality: 80,
            destinationType: Camera.DestinationType.FILE_URI });
        function onSuccess(imageURI) {
            $('.fixed-action-btn').closeFAB();
            $('#modalPhotoPost').modal('open');
            function callback(result){
                document.getElementById("getOut").style.display = "none";
                var image = document.getElementById('myImage');
                image.src = imageURI;
                document.getElementById("imagemCad").value = imageURI;
            }
            
        }
        
        function onFail(message) {
            alert('Failed because: ' + "Error");
        }

        function clearCache(){
            navigator.camera.cleanup();
        }
    }
    
};

