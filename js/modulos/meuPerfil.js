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
        }
        document.getElementById("imgPerfil").src = src;
        document.getElementById("namePerfil").innerHTML = dados.login;
        document.getElementById("agePerfil").innerHTML = age;
        document.getElementById("phonePerfil").innerHTML = dados.phone;
        document.getElementById("phonePerfil").href = "tel:" +dados.phone;
        document.getElementById("mailPerfil").innerHTML = dados.login;
        document.getElementById("sobrePerfil").innerHTML = dados.sobre;

    }else {
        window.location.href = "../index.html";
    }
}

//INSERIR STATUS DO USUARIOS ONLINE/OFFLINE
function sendStatusUser(){
    let idUser = dados.id;
    new DadosController().insertStatusUser(idUser);
}

function disableStatusUser(){
    let idUser = dados.id;
    new DadosController().changeStatusUser(idUser , callback);
    function callback(result){
        if(result != false){
            console.log("Status Offline");
        }else {
            console.log("ERROR STATUS USER");
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

            }
            let status = users[i].status;
            let line = "";

            if(status === "online"){
                line = "online";
            }else {
                line = "offline";
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

//LOGOUT
function getOutApp(){
    localStorage.clear();
    window.location.href = "../index.html";
}