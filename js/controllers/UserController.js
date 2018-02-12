class UserController{

    login(login , pass){
        //let dialog = new IndeterminateProgressDialog("Aguarde");
        $.ajax({
            url: "http://betho3.000webhostapp.com/mvc/controller/login.php",
            method: "GET",
            data: {"login" : login , "pass" : pass},
            success: function(result){
                //dialog.hide();
                let dados = JSON.parse(result);
                if(dados != null){
                    localStorage.setItem("result" , result);
                    window.location.href = "views/telaAdm.html"; 
                } else {
                    navigator.vibrate([300 , 300 , 200 , 100]);
                    function erroLogin() {
                        location.reload();
                    }
                    
                    navigator.notification.alert(
                        'Usurario ou senha inválidos', 
                        erroLogin,        
                        'Erro',                     
                        'OK'                 
                    );
                }
            }
        });
    }


}