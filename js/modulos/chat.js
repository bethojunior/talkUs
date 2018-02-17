var dadosChat = localStorage.getItem("idUserChat");
function loadDataChat(){
    //alert(dadosChat);
    loadDataUser();
}

function loadDataUser(){
    new UserController().getUserForId(dadosChat , callback);
    function callback(result){
        if(result != null){
            var dataUser = JSON.parse(localStorage.setItem("result" , result));
            let name = dataUser.id;
            alert("ok");
        }else {
            alert("erro");
        }
        
    }
}

function loadChat(){
    new DadosController().dataChat();
}