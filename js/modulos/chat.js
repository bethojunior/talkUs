//DADOS DO USUÁRIO SELECIONADO
var dadosChat = localStorage.getItem("idUserChat");
//DADOS DO LOGADO
var dados = JSON.parse(localStorage.getItem("result"));
var idUserLogado = dados.id;

function loadDataChat(){
    atualizaMensagens();
    loadChat();

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
    new DadosController().dataChat(callback);
    function callback(result){
        let dados = JSON.parse(result);
        let txt = "";
        for(let i in dados){
            let src = "";
            let path = "";
            let idMensagem = dados[i].idMensagem;
            let classDiv = "";
            if(idMensagem != idUserLogado){
                classDiv = "msgLeft";
            }else {
                classDiv = "msgRight";
            }
            txt += 
            "<div class='row divChat " + classDiv + "'>"+
                "<div class='col s12'>" + dados[i].mensagem + "</div>"+
                "<label class='col s12 right'>" + dados[i].hora + "</label>"+
            "</div>";
        }
        document.getElementById("dataMessage").innerHTML = txt;
    }
}

function sendMessageChat(){
    let idUser1 = dados.id;
    let idUser2 = dadosChat;
    let mensagem = document.getElementById("messageChat").value;
    new DadosController().sendMessage(idUser1 , idUser2 , mensagem , callback);
    function callback(data){
        if(data != false){
            console.log("ok");
            document.getElementById("messageChat").value = "";
        }else {
            console.log("Error");
        }
    }
}