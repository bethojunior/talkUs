var dados = JSON.parse(localStorage.getItem("result"));
class DadosController{

    updateSobre(id , sobre){
        $.ajax({
            url: "http://betho3.000webhostapp.com/mvc/dao/updateSobre.php",
            method: "POST",
            data: {"id" : id , "sobre" : sobre},
            success: function(result){
                console.log(result);

                //navigator.vibrate([300 , 300 , 200 , 100]);
                function ok() {
                    let login = dados.login;
                    let pass = dados.pass;
                    $.ajax({
                        url: "http://betho3.000webhostapp.com/mvc/controller/login.php",
                        method: "GET",
                        data: {"login" : login , "pass" : pass},
                        success: function(result){
                            //dialog.hide();
                            let dados = JSON.parse(result);
                            if(dados != null){
                                loadPerfil();
                            } else {
                                navigator.vibrate([300 , 300 , 200 , 100]);
                                function err() {
                                    location.reload();
                                }
                                
                                navigator.notification.alert(
                                    'Erro ao atualizar página.', 
                                    err,        
                                    'Conexão a internet instavel',                     
                                    'OK'                 
                                );
                            }
                        }
                    });
                    loadPerfil();
                }
                
                navigator.notification.alert(
                    'Perfil atualizado', 
                    ok,        
                    ';D',                     
                    'OK'                 
                );
            }, error: function(result){
                console.log(result);
            }
        });
    }

}