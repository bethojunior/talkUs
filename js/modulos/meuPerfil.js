var dados = JSON.parse(localStorage.getItem("result"));
function loadPerfil(){
    let checkId = dados.id;
    //alert(checkId);
    if(checkId != null ){
        document.getElementById("postSaved").style.display = "none";
        document.getElementById("savePost").style.display = "none";
        var age = dados.dataNascimento;
        document.getElementById("namePerfil").innerHTML = dados.login;
        document.getElementById("agePerfil").innerHTML = age;
        document.getElementById("phonePerfil").innerHTML = dados.phone;
        document.getElementById("phonePerfil").href = "tel:" +dados.phone;
        document.getElementById("mailPerfil").innerHTML = dados.login;
        document.getElementById("sobrePerfil").innerHTML = dados.sobre;
    
        new DadosController().getAllPosts();
    
        setTimeout(function(){
            new CrudUpdate().updateData();
        }, 100);
    
        let idUser = dados.id;
        new DadosController().getBestPost(idUser);
    }else {
        //window.location.href = "../index.html";
    }


}

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

//sai do app
function getOutApp(){
    localStorage.clear();
    window.location.href = "../index.html";
}