var dados = JSON.parse(localStorage.getItem("result"));
function loadPerfil(){
    document.getElementById("namePerfil").innerHTML = dados.name;
}