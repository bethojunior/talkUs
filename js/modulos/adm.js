var dados = JSON.parse(localStorage.getItem("dados"));

function moreInformationPost(id){
    new DadosController().getDataPost(id);
}