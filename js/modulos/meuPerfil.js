var dados = JSON.parse(localStorage.getItem("result"));
function loadPerfil(){
    let checkId = dados.id;
    if(checkId != null ){
        var age = dados.dataNascimento;
        let imgPerfil = dados.imgUser;
        let src = '';
        if(imgPerfil == null){
            src = "../img/users/default.png";
        }
        document.getElementById("imgPerfil").src = src;
        document.getElementById("namePerfil").innerHTML = dados.login;
        document.getElementById("agePerfil").innerHTML = age;
        document.getElementById("phonePerfil").innerHTML = dados.phone;
        document.getElementById("phonePerfil").href = "tel:" +dados.phone;
        document.getElementById("mailPerfil").innerHTML = dados.login;
        document.getElementById("sobrePerfil").innerHTML = dados.sobre;
        
        let idUser = dados.id;
        new DadosController().getAllPosts();
        new DadosController().getBestPost(idUser);
        checkPost();
        getAllUsers();
    }else {
        window.location.href = "../index.html";
    }
}


//CRUD ATUALIZA POSTS A CADA 1 SEGUNDO
function checkPost(){
    setTimeout(function(){
        new CrudUpdate().updateData();
    }, 100);
}

//PEGA TODOS USUÁRIOS PARA EXPOR NA LISTA DE CHAT
function getAllUsers(){
    new UserController().getAll(showUser);
    function showUser(users){
        var showDataUser = "";
        for(let i in users){
            let img = users[i].imgUser;
            var path = "";
            if(img === ""){
                path = "../img/users/default.png";
            }
            showDataUser += 
            "<div id='startChat' class='row divUserChat'>"+
                "<div class='col s12' id='statusUser' ></div>"+
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