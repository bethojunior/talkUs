var dados = JSON.parse(localStorage.getItem("result"));
if(localStorage.getItem("result") === null){
    window.location.href = "../index.html";
}
function loadPerfil(){
    getBestPostsForUser();
    getPosts();
    checkPost();
    getAllUsers();
    getMyAllPosts();
    
    var age = dados.dataNascimento;
    let imgPerfil = dados.imgUser;
    let src = '';
    if(imgPerfil === ""){
        src = "../img/users/default.png";
    }else {
        src = "http://betho3.000webhostapp.com/profile/medium/"+imgPerfil;
    }
    document.getElementById("idUserPost").value = dados.id;
    document.getElementById("nameUserPost").value = dados.login;

    var txt = "";
    txt += 
    "<div class='row'>"+
        "<img class='col s4' id='imgPerfil' src='" + src + "'>" + 
        "<div class='col s4'>"+
            "<span id='mailPerfil'>" + dados.login + "</span><br>"+
            //"<span>" + age + "</span><br>"+
            "<span><i class='material-icons'>local_phone</i><a href='tel:" + dados.phone +"'>" + dados.phone + "</a></span><br>"+
            "<span>" + dados.login + "</span><br>"+
            "<span>" + dados.sobre + "</span>"+
        "</div>"+
    "</div>";
    document.getElementById("userPerfil").innerHTML = txt;


}

//PEGA TODOS MEUS POSTS
function getMyAllPosts(){
    let idUser = dados.id;
    new DadosController().getMyPosts(idUser , callback);
    function callback(result){
        var myPost = JSON.parse(result);
        let txt = "";
        for(let i in myPost){
            var pathImg = "http://betho3.000webhostapp.com/files/medium/";
            let src = "";
            let image = myPost[i].src;
            if(image === null){
                src = "";
            } else{
                src = pathImg+image;
            }

            txt +=
            "<div class='firstDivMyPost '>"+
                "<span clas='col s12 myPostName'>" + myPost[i].name + "</span><br>"+
                "<span clas='col s12 myPostPost'>" +myPost[i].post + "</span><br>"+
                "<span clas='col s12 myPostImg'><img src='"+src  +"'></span><br>"+
                "<label clas='col s12 right'>" + myPost[i].data + "</label><br>"+
            "</div>";
        }
        document.getElementById("myPosts").innerHTML = txt;
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

            let img = best[i].src;
            var path = "";

            if(img === null ){
                path = "";
            } else {
                path = "http://betho3.000webhostapp.com/files/small/"+img;
            }

            let idPost = best[i].id;
            let idUser = best[i].idUser;
            txt += 
            "<div class='row divDados'>"+
                "<i class='material-icons right'>bookmark</i>" +
                "<span class='col s12 nameForPost'>"+best[i].name+"</span><br>" + 
                "<span class='col s12 postoForPost'>" + best[i].post +"</span>"+
                "<div class='col s12 divImgBestPost'><img  src='" + path + "'></div>";
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
                path = "http://betho3.000webhostapp.com/profile/small/"+img ;
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
    let dialog = new IndeterminateProgressDialog("Aguarde");
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
        document.getElementById("savePost").style.display = "none";
        document.getElementById("postSaved").style.display = "block";
        let idPost = document.getElementById("idPost").value;
        new DadosController().postSave(idPost , callback);
        function callback(){
            console.log("ok");
        }
    };
}

//delete post save
if(document.getElementById("postSaved") != null ){
    document.getElementById("postSaved").onclick = function(){
        document.getElementById("savePost").style.display = "block";
        document.getElementById("postSaved").style.display = "none";
        let idPost = document.getElementById("idPost").value;
        new DadosController().disabelSavedPost(idPost , callback);
        function callback(data){

        };
    };

}


//SEND FILE FOR POST
function sendFile(){
    let dialog = new IndeterminateProgressDialog("Aguarde");
    var formFile = document.getElementById("formFile");
    var formData = new FormData(formFile);
    let e = document.getElementById("formImg1").value;
    let e1 = document.getElementById("formImg2").value;
    let title = document.getElementById("titlePostPic").value
    
    if(e != "" && e1 != "" && title != ""){
        new DadosController().sendPostFile(formData , callback);
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

//SEND PICTURE USER
function pictureUserPerfil(){
    document.getElementById("userGeral").value = dados.id;
    let formulario = document.getElementById("imgShow");
    let form = new FormData(formulario);
    new DadosController().sendImageUser(form , callback);
    function callback(result){
        //console.log(result);
        if(result != false){
            alert("ok");
            console.log("ok");
        }else {
            console.log("Erro");
        }
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