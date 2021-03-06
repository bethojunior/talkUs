var dados = JSON.parse(localStorage.getItem("result"));
function checkLocalStoraged(){
    let id = dados.id;
    if(id != null || id != ""){
        window.location.href = "views/telaAdm.html"; 
    }
}

document.getElementById("logar").onclick =  function(){
    var login = document.getElementById("login").value;
    var pass = document.getElementById("senha").value;
    if(login && pass != ''){
        //let dialog = new IndeterminateProgressDialog("Aguarde");
        new UserController().login(login , pass ,callback);
        function callback(){
            //dialog.hide();
            window.location.href = "views/telaAdm.html"; 
        }

    } else {
        navigator.vibrate([300 , 300 , 200 , 100]);
            function incomplet() {
                location.reload();
            }
            
            navigator.notification.alert(
                'Preencha todos os campos', 
                incomplet,        
                'Erro',                     
                'OK'                 
            );
    }
};

function addUser(){
    let login = document.getElementById("loginCad").value;
    let name = document.getElementById("nameCad").value;
    let phone = document.getElementById("phoneCad").value;
    let data = document.getElementById("dataCad").value;
    let pass = document.getElementById("passCad").value;
    let passAgain = document.getElementById("passCad1").value;

    if(pass == passAgain){
        if(login && name && phone && data != ''){
            new UserController().newUser(login , pass , name , phone , data);
        }else {
            navigator.vibrate([300 , 300 , 200 , 100]);
            function no() {
                //location.reload();
            }
            
            navigator.notification.alert(
                'Preencha todos os dados', 
                no,        
                'Erro',                     
                'OK'                 
            );
        }
    } else {
        navigator.vibrate([300 , 300 , 200 , 100]);
            function passW() {
                //location.reload();
            }
            
            navigator.notification.alert(
                'As senhas não coincidem', 
                passW,        
                'Erro',                     
                'OK'                 
            );
    }
}

function checkUser(){
    let user = document.getElementById("loginCad").value;
    new UserController().getUser(user);
}

