
    document.getElementById("logar").onclick =  function(){
        var login = document.getElementById("login").value;
        var pass = document.getElementById("senha").value;
        //let dialog = new IndeterminateProgressDialog("Aguarde");
        if(login && pass != ''){
            new UserController().login(login , pass);
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