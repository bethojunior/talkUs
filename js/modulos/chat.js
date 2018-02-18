//DADOS DO USUÁRIO SELECIONADO
var dadosChat = localStorage.getItem("idUserChat");
//DADOS DO LOGADO
var dados = JSON.parse(localStorage.getItem("result"));
var idUserLogado = dados.id;

function loadDataChat(){
    atualizaMensagens();
    loadChat();

    let id = dadosChat;
    document.getElementById("idUser1").value = idUserLogado;
    document.getElementById("idUser2").value = dadosChat;

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
            let path = "http://betho3.000webhostapp.com/files/small/";
            let imagem = dados[i].src;
            let idMensagem = dados[i].idMensagem;
            let classDiv = "";
            if(idMensagem != idUserLogado){
                classDiv = "msgLeft";
            }else {
                classDiv = "msgRight";
            }

            if(imagem === null){
                src = "";
            }else if(imagem === ""){
                src = "";
            }else {
                src = path+imagem;
            }
            txt += 
            "<div class='row divChat " + classDiv + "'>"+
                "<div class='col s12'>" + dados[i].mensagem + "</div>"+
                "<div class='col s12'><img src='" + src + "'></div>"+
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

//SEND FILE FOR POST
function sendFileChat(){
    let dialog = new IndeterminateProgressDialog("Aguarde");
    var formFile = document.getElementById("formFile");
    var formData = new FormData(formFile);
    let e = document.getElementById("formImg1").value;
    let e1 = document.getElementById("formImg2").value;
    let title = document.getElementById("titlePostPic").value
    if(title == ''){
        title = "...";
    }
    
    if(e != "" && e1 != "" && title != ""){
        new DadosController().sendPostFileChat(formData , callback);
        function callback(result){
            if(result != false){
                dialog.hide();
                formFile.reset();
                console.log("Imagem enviada com sucesso");
            }else {
                dialog.hide();
                formFile.reset();
            }
        }
    }
    else {
        console.log(result);
        navigator.vibrate([300 , 300 , 200 , 100]);
        document.getElementById("titlePostPic").className = "titlePostPic";
    }

}