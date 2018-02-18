//DADOS DO USUÁRIO SELECIONADO
var dadosChat = localStorage.getItem("idUserChat");
//DADOS DO LOGADO
var dados = JSON.parse(localStorage.getItem("result"));

function loadDataChat(){
    atualizaMensagens();

    let id = dadosChat;
    new UserController().getUserForId(id , callback);
    function callback(dataUser2){
        console.log("OKOKOKK" + dataUser2.name);
        let statusUser = dataUser2.status;
        let status = "";
        let line = "";
        let txt = "";
        let src = "";
        var pathImg = "http://betho3.000webhostapp.com/profile/small/";
        let image = dataUser2.imgUser;
        if(image === null){
            src = "";
        }else if(image === ""){
            src = "";
        }else {
            src = pathImg+image;
        }

        if(statusUser === "online"){
            line = "online";
        }else if(statusUser === "offline"){
            line = "offline";
        }else{
            line = "ausente";
        }

        txt += 
            "<div class='row divPerfilChat'>"+
                "<div class='col s12 " + line + "'>" + status + "</div><br>"+
                "<div class='col s4'><img class='col s12' src='" + src + "'></div>"+
                "<div class='col s8'>"+
                    "<span class='namePerfil'>" + dataUser2.name + "</span><br>"+
                    "<span><a href=tel:'"+ dataUser2.phone +"'>"+ dataUser2.phone +"</a></span><br>"+
                    "<span>" + dataUser2.sobre + "</span><br>"+
                "</div"+
            "</div>";
            document.getElementById("perfilUser2").innerHTML = txt;
    }
}

function atualizaMensagens(){
    setTimeout(function(){
        new Crud().loadDataChat();    
    }, 1);
    
}


function loadChat(){
    let idUser1 = dados.id;
    let idUser2 = dadosChat;
    alert(idUser1);
    alert(idUser2);
    new DadosController().dataChat(idUser1 , idUser2);
}

function sendMessageChat(){
    let idUser1 = dados.id;
    let idUser2 = dadosChat;
    let mensagem = document.getElementById("messageChat").value;
    new DadosController().sendMessage(idUser1 , idUser2 , mensagem , callback);
    function callback(data){
        if(data != false){
            console.log("ok");
        }else {
            console.log("Error");
        }
    }
}