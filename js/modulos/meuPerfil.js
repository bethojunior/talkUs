var dados = JSON.parse(localStorage.getItem("result"));
function loadPerfil(){
    var age = dados.dataNascimento;
    document.getElementById("namePerfil").innerHTML = dados.name;
    document.getElementById("agePerfil").innerHTML = age;
    document.getElementById("phonePerfil").innerHTML = dados.phone;
    document.getElementById("phonePerfil").href = "tel:" +dados.phone;
    document.getElementById("mailPerfil").innerHTML = dados.login;
    document.getElementById("sobrePerfil").innerHTML = dados.sobre;

    new DadosController().getAllPosts();
}

function upSobre(){
    let sobre = document.getElementById("sobrePerfil").value;
    let id = dados.id;
    
    new DadosController().updateSobre(id , sobre);
}

function sendPost(){
    let login = dados.login;
    let post = document.getElementById("myPost").value;

    new DadosController().sendDataPost(login , post);
}
