class UserController{

    getAll(showUser){
        $.ajax({
            url:"http://betho3.000webhostapp.com/mvc/controller/getAllUsers.php",
            success: function(result){
                var users = JSON.parse(result);
                showUser(users);

            },error: function(result){

                navigator.vibrate([300 , 300 , 200 , 100]);
                    function erroUsers() {
                        //location.reload();
                    }
                    
                    navigator.notification.alert(
                        'Erro ao carregar lista de chat', 
                        erroUsers,        
                        'Erro',                     
                        'OK'                 
                    );
            }
        })
    }
    

    login(login , pass , callback ){
        $.ajax({
            url: "http://betho3.000webhostapp.com/mvc/controller/login.php",
            method: "GET",
            data: {"login" : login , "pass" : pass},
            success: function(result){
                let dados = JSON.parse(result);
                if(dados != null){
                    localStorage.setItem("result" , result);
                    callback();
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

    getUser(user){
        let login = user;
        //alert(login);
        $.ajax({
            url:"http://betho3.000webhostapp.com/mvc/controller/checkLoginCad.php",
            method: "GET",
            data: {"login" : login},
            success: function(result){
                let dados = JSON.parse(result);
                let log = dados.login;
                if(user == log){
                    navigator.vibrate([300 , 300 , 200 , 100]);
                    function userError() {
                        document.getElementById("loginCad").value = "";
                    }
                    
                    navigator.notification.alert(
                        'Escolha outro nome de usuário ', 
                        userError,        
                        'Nome de usuário já existe',                     
                        'OK'                 
                    );
                }else {
                    console.log("Usuário Ok");
                }
            }
        });
    }



}


