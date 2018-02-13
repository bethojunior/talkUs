var dados = JSON.parse(localStorage.getItem("result"));

class DadosController{

    updateSobre(id , sobre){
        $.ajax({
            url: "http://betho3.000webhostapp.com/mvc/dao/updateSobre.php",
            method: "POST",
            data: {"id" : id , "sobre" : sobre},
            success: function(result){
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
                alert("Desculepe , houve um erro");
            }
        });
    }

    sendDataPost(login , post){
        let idUser = dados.id;
        $.ajax({
            url: "http://betho3.000webhostapp.com/mvc/dao/inserirPost.php",
            method: "POST",
            data: {"login" : login , "post" : post , "idUser" : idUser},
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
                let txt = '';
                for(let i in dados){
                    let idPost = dados[i].id;
                    let idUser = dados[i].idUser;
                    txt += 
                    "<div onclick='moreInformationPost(" + idPost + " , " + idUser +")' class='divDados'>"+
                        //"<i id='moreInformationPost' class='material-icons tiny'>more_vert</i><br>"+
                        "<span class='nameForPost'>"+dados[i].name+"</span><br>" + 
                        "<span class='postoForPost'>" + dados[i].post +"</span>"+
                        
                    "</div>";
                }
                document.getElementById("divAll").innerHTML = txt;
            },error: function(result){

            }
        });
    }

    getDataPost(id){
        var idVoucher = id;
        $.ajax({
            url:"http://betho3.000webhostapp.com/mvc/controller/getAllPosts.php",
            method: "POST",
            success: function(result){
                var dados = JSON.parse(result);
                var postSelect = "";
                for(let i in dados){
                    if(dados[i]['id'] == idVoucher){
                        postSelect = dados[i];
                        $('#modalOpt').modal('open');
                        document.getElementById("idPost").value = postSelect.id;
                        document.getElementById("loginPost").value = postSelect.login;
                        document.getElementById("namePostModal").innerHTML = postSelect.name;
                        document.getElementById("postPostModal").innerHTML = postSelect.post;
                        document.getElementById("dataPostModal").innerHTML = postSelect.data;
                    }
                }

            },error: function(result){

            }
        });
    }

    deleteDataPost(id){
        $.ajax({
            url: "http://betho3.000webhostapp.com/mvc/dao/deletePost.php",
            method: "POST",
            data: {"id" : id},
            success: function(result){
                if(result != false){

                    function allRight() {
                        location.reload();
                    }
                    
                    navigator.notification.alert(
                        'Apagado com sucesso', 
                        allRight,        
                        ';D',                     
                        'OK'                 
                    );
                } else {
                    navigator.vibrate([300 , 300 , 200 , 100]);
                    function erroDelet() {
                        location.reload();
                    }
                    
                    navigator.notification.alert(
                        'Erro ao apagar post', 
                        erroDelet,        
                        'Conexão a internet instavel',                     
                        'OK'                 
                    );
                }
            },error: function(result){
                navigator.vibrate([300 , 300 , 200 , 100]);
                function erroDelet1() {
                    location.reload();
                }
                
                navigator.notification.alert(
                    'Erro ao apagar post', 
                    erroDelet1,        
                    'Conexão a internet instavel',                     
                    'OK'                 
                );
            }
        });
    }

    postSave(idPost){
        let idUser = dados.id;
        $.ajax({
            url: "http://betho3.000webhostapp.com/mvc/dao/insertBestPosts.php",
            method: "POST",
            data:{"idPost" : idPost , "idUser" : idUser},
            success: function(result){
                if(result != false){
                    console.log("Adcionado aos favoritos com sucesso");
                } else {
                    function erroAdd() {
                        location.reload();
                    }
                    
                    navigator.notification.alert(
                        'Erro', 
                        erroAdd,        
                        'Conexão a internet instavel',                     
                        'OK'                 
                    );
                }
            }, error: function(result){
                function erroAdd() {
                    location.reload();
                }
                
                navigator.notification.alert(
                    'Erro', 
                    erroAdd,        
                    'Conexão a internet instavel',                     
                    'OK'                 
                );
            }
        });
    }


}