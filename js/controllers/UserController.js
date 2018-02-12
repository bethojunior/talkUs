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

    newUser(login , pass , name , phone , data){
        $.ajax({
            url: "http://betho3.000webhostapp.com/mvc/dao/newUser.php",
            method: "POST",
            data: {"login" : login , "pass" : pass ,"name" : name , "phone" : phone , "data" : data},
            success: function(result){
                if(result != false){
                    navigator.vibrate([300 , 300 , 200 , 100]);
                    function addOk() {
                        window.location.href = "../index.html"; 
                    }
                    
                    navigator.notification.alert(
                        'Usurario adcionado com sucesso', 
                        addOk,        
                        ';D',                     
                        'OK'                 
                    );
                } else {
                    navigator.vibrate([300 , 300 , 200 , 100]);
                    function addError() {
                        location.reload();
                    }
                    
                    navigator.notification.alert(
                        'Tente novamente mais tarde', 
                        addError,        
                        'Erro ao se conectar ao banco de dados',                     
                        'OK'                 
                    );
                }
            }, error: function(result){
                navigator.vibrate([300 , 300 , 200 , 100]);
                alert("Erro ao conectar ao banco de dados");
            }
        });
    }


}