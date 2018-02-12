var dados = JSON.parse(localStorage.getItem("result"));

class DadosController{

    updateSobre(id , sobre){
        $.ajax({
            url: "http://betho3.000webhostapp.com/mvc/dao/updateSobre.php",
            method: "POST",
            data: {"id" : id , "sobre" : sobre},
            success: function(result){
                console.log(result);
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

    sendDataPost(login , post){
        $.ajax({
            url: "http://betho3.000webhostapp.com/mvc/dao/inserirPost.php",
            method: "POST",
            data: {"login" : login , "post" : post},
            success: function(result){
                if(result != false){
                    location.reload();
                }else {
                    alert("a"); 
                }
            }
        });
    }

    getAllPosts(){
        $.ajax({
            url: "http://betho3.000webhostapp.com/mvc/controller/getAllPosts.php",
            method: "POST",
            success: function(result){
                var dados = JSON.parse(result);
                console.log(dados);
                let txt = '';
                for(let i in dados){
                    txt += 
                    "<div class='divD '>"+
                        "<span class='nameForPost'>"+dados[i].name+"</span><br>" + 
                        "<span class='postoForPost'>" + dados[i].post +"</span>"+
                    "</div>";
                }
                document.getElementById("divAll").innerHTML = txt;
            },error: function(result){

            }
        });
    }


}