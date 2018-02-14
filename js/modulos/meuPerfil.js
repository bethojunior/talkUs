var dados = JSON.parse(localStorage.getItem("result"));
function loadPerfil(){
    getBestPostsForUser();
    getPosts();
    checkPost();
    getAllUsers();
    let checkId = dados.id;
    if(checkId != null ){

        var age = dados.dataNascimento;
        let imgPerfil = dados.imgUser;
        let src = '';
        if(imgPerfil === ""){
            src = "../img/users/default.png";
        }else {
            src = "http://betho3.000webhostapp.com/profile/"+imgPerfil;
        }
        document.getElementById("idUserPost").value = dados.id;
        document.getElementById("nameUserPost").value = dados.login;

        var txt = "";
        txt += 
        "<div class='row'>"+
            "<img class='col s4' id='imgPerfil' src='" + src + "'>" + 
            "<div class='col s4'>"+
                "<span id='mailPerfil'>" + dados.login + "</span><br>"+
                "<span>" + age + "</span><br>"+
                "<span><a href='tel:" + dados.phone +"'>" + dados.phone + "</a></span><br>"+
                "<span>" + dados.login + "</span><br>"+
                "<span>" + dados.sobre + "</span>"+
            "</div>"+
        "</div>";
        document.getElementById("userPerfil").innerHTML = txt;

    }else {
        window.location.href = "../index.html";
    }
}

//INSERIR STATUS DO USUARIOS ONLINE/OFFLINE
function sendStatusUser(){
    let idUser = dados.id;
    new DadosController().insertStatusUser(idUser);
}
//STATUS AUSENTE
function disableStatusUser(){
    let idUser = dados.id;
    new DadosController().changeStatusUser(idUser , callback);
    function callback(result){
        if(result != false){
            console.log("AUSENTE ");
        }else {
            console.log("ERROR STATUS USER / AUSENTE");
        }
    };
}

//PEGA TODOS OS POSTS
function getPosts(){
    new DadosController().getAllPosts();
}

//PEGA POSTS SALVOS
function getBestPostsForUser(){
    let idUser = dados.id;
    new DadosController().getBestPost(idUser , callback);
    function callback(result){
        let best = JSON.parse(result);
        let txt = '';
        for(let i in best){
            
            let idPost = best[i].id;
            let idUser = best[i].idUser;
            txt += 
            "<div class='divDados'>"+
                "<i class='material-icons right'>bookmark_border</i>" +
                "<span class='nameForPost'>"+best[i].name+"</span><br>" + 
                "<span class='postoForPost'>" + best[i].post +"</span>"+
            "</div>";
        }
        document.getElementById("divBestPost").innerHTML = txt;
    }
}
        

//CRUD ATUALIZA POSTS A CADA 1 SEGUNDO
function checkPost(){
    setTimeout(function(){
        new Crud().updateData();
        getAllUsers();
    }, 1);
}

//PEGA TODOS USUÁRIOS PARA EXPOR NA LISTA DE CHAT
function getAllUsers(){
    new UserController().getAll(showUser);
    function showUser(users){
        var showDataUser = "";
        for(let i in users){
            let id = users[i].id;
            let img = users[i].imgUser;
            var path = "";

            if(img === ""){
                path = "../img/users/default.png";
            } else {
                path = "http://betho3.000webhostapp.com/profile/"+img ;
            }
            let status = users[i].status;
            let line = "";

            if(status === "online"){
                line = "online";
            }else if(status === "ausente"){
                line = "ausente";
            }else {
                line = "offline"
            }
            showDataUser += 
            "<div id='startChat' class='row divUserChat'>"+
                "<div class='col s12 " + line + " '>" + users[i].status +"</div>"+
                "<div class='col s2 divPictureUser'><img id='pictureUser' src='" + path + "'></div>"+
                "<div class='col s10'><span class='nameUserChat col s12'>" + users[i].name + "</span></div>"+
                "<div class='col s2'></div>"+
                "<div class='col s8'><span clas='statusUserChat'>" + users[i].sobre + "</span></div>"+
            "</div>";
        }
        document.getElementById("usersChat").innerHTML = showDataUser;
    };


}

//CHECA STATUS DO POST (SALVO OU NÃO )
function statusPost(){
    new DadosController().checkPost(callback);
    function callback(result){
        if(result != false){
            document.getElementById("postSaved").style.display = "block";
            document.getElementById("savePost").style.display = "none";
        } else {
            document.getElementById("postSaved").style.display = "none";
            document.getElementById("savePost").style.display = "block";
        }
    }
}

//ENVIA STATUS SOBRE PERFIL
function upSobre(){
    let sobre = document.getElementById("sobrePerfil").value;
    let id = dados.id;
    new DadosController().updateSobre(id , sobre);
}


// ENVIA POST
function sendPost(){
    let login = dados.login;
    let post = document.getElementById("myPost").value;
    
    new DadosController().sendDataPost(login , post);
}

function send(e){
    if(e.keyCode === 13){
        let login = dados.login;
        let post = document.getElementById("myPost").value;
        
        new DadosController().sendDataPost(login , post);
    }

}

//SAVE FAVORITE POST
if(document.getElementById("savePost") != null){
    document.getElementById("savePost").onclick = function(){
        let idPost = document.getElementById("idPost").value;
        new DadosController().postSave(idPost);
    };
}


//SEND FILE FOR POST
function sendFile(){
    var formFile = document.getElementById("formFile");
    var formData = new FormData(formFile);
    let e = document.getElementById("formImg1").value;
    let e1 = document.getElementById("formImg2").value;
    let title = document.getElementById("titlePostPic").value
    
    if(e != "" && e1 != "" && title != ""){
        new DadosController().sendPostFile(formData , callback);
        function callback(result){
            if(result != false){
                formFile.reset();
                console.log("Imagem enviada com sucesso");
            }else {
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

//SEND PICTURE USER
function pictureUserPerfil(){
    document.getElementById("userGeral").value = dados.id;
    let formulario = document.getElementById("imgShow").value;
    let form = new FormData(formulario);
    new DadosController().sendImageUser(form , callback);
    function callback(result){
        console.log(result);
    }
}

//LOGOUT // STATUS OFF
function getOutApp(){
    let idUser = dados.id;
    new DadosController().statusOffline(idUser , callback);
    function callback(result){
        if(result != false){
            cosole.log("OFF");
        }else {
            console.log("Erro");
        }
    }
    window.location.href = "../index.html";
    localStorage.clear();
}