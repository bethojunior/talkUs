var dados = JSON.parse(localStorage.getItem("dados"));

function moreInformationPost(idPost , idUser){
    var logado = dados.id;
    //CONTROLE DE PERMISSÃO QUE IDENTIFICA QUEM PODE APAGAR OU EDITAR POST
    if(logado != idUser ){
        document.getElementById("optionModalPost").style.display = "none";
    } else {
        document.getElementById("optionModalPost").style.display = "block";
    }
    new DadosController().getDataPost(idPost);
    statusPost();

}

function deletePost(){
    let id = document.getElementById("idPost").value;
    new DadosController().deleteDataPost(id);
}