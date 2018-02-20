var dados = JSON.parse(localStorage.getItem("result"));
//DADOS DO USUÁRIO SELECIONADO
var dadosChat = localStorage.getItem("idUserChat");

class DadosController{

    getMyPosts(idUser , callback){
        $.ajax({
            url: "http://betho3.000webhostapp.com/mvc/controller/getMyPosts.php",
            method:"POST",
            data:{"idUser" : idUser},
            success: function(result){
                callback(result);
            },error:function(data){
                console.log("Erro ajax get my posts");
            }
        });
    }

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
                                console.log("ERRO UPDATESOBRE");
                                // navigator.vibrate([300 , 300 , 200 , 100]);
                                // function err() {
                                //     //location.reload();
                                // }
                                
                                // navigator.notification.alert(
                                //     'Erro ao atualizar página.', 
                                //     err,        
                                //     'Conexão a internet instavel',                     
                                //     'OK'                 
                                // );
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
                //alert("Desculpe , houve um erro");
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
                if(result != "false"){
                    dialog.hide();
                }else {
                    console.log("ERRO SENDDATAPOST");
                    // navigator.vibrate([300 , 300 , 200 , 100]);
                    // function erroPost() {
                    //     //location.reload();
                    //     dialog.hide();
                    // }
                    
                    // navigator.notification.alert(
                    //     'Erro ao enviar post.', 
                    //     erroPost,        
                    //     'Conexão a internet instavel',                     
                    //     'OK'                 
                    // );
                }
            }, error: function(result){
                console.log("erro Ajax");
            }
        });
    }

    getAllPosts(callback){
        $.ajax({
            url: "http://betho3.000webhostapp.com/mvc/controller/getAllPosts.php",
            method: "POST",
            success: function(result){
                callback(result);
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
                let dados = JSON.parse(result);
                var postSelect = "";
                for(let i in dados){
                    let src = "";
                    let path = "http://betho3.000webhostapp.com/files/small/";
                    let image = dados[i].src;
                    if(image === null){
                        src = "";
                    } else {
                        src = path+image;
                    }
                    if(dados[i]['id'] == idVoucher){
                        postSelect = dados[i];
                        $('#modalOpt').modal('open');
                        document.getElementById("idPost").value = postSelect.id;
                        document.getElementById("loginPost").value = postSelect.login;
                        document.getElementById("namePostModal").innerHTML = postSelect.name;
                        document.getElementById("postPostModal").innerHTML = postSelect.post;
                        document.getElementById("imagemModalPost").src = src;
                        document.getElementById("dataPostModal").innerHTML = postSelect.data;

                        //MUDA ICONE DE ADD OU NÃO POST AOS FAVORITOS
                        
                    }
                    let idPost = postSelect.id;
                    localStorage.setItem("idPost" , idPost);
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

                    // function allRight() {
                    //     //location.reload();
                    // }
                    
                    // navigator.notification.alert(
                    //     'Apagado com sucesso', 
                    //     allRight,        
                    //     ';D',                     
                    //     'OK'                 
                    // );
                } else {
                    // navigator.vibrate([300 , 300 , 200 , 100]);
                    // function erroDelet() {
                    //     //location.reload();
                    // }
                    
                    // navigator.notification.alert(
                    //     'Erro ao apagar post', 
                    //     erroDelet,        
                    //     'Conexão a internet instavel',                     
                    //     'OK'                 
                    // );
                }
            },error: function(result){
                // navigator.vibrate([300 , 300 , 200 , 100]);
                // function erroDelet1() {
                //     //location.reload();
                // }
                
                // navigator.notification.alert(
                //     'Erro ao apagar post', 
                //     erroDelet1,        
                //     'Conexão a internet instavel',                     
                //     'OK'                 
                // );
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
                    // function erroAdd() {
                        
                    // }
                    
                    // navigator.notification.alert(
                    //     'Erro', 
                    //     erroAdd,        
                    //     'Conexão a internet instavel1',                     
                    //     'OK'                 
                    // );
                }
            }, error: function(result){
                // function erroAdd() {
                //     location.reload();
                // }
                
                // navigator.notification.alert(
                //     'Erro', 
                //     erroAdd,        
                //     'Conexão a internet instavel2',                     
                //     'OK'                 
                // );
            }
        });
    }

    disabelSavedPost(idPost , callback){
        $.ajax({
            url: "http://betho3.000webhostapp.com/mvc/dao/deleteBestPostFromBestsPost.php",
            method: "GET",
            data:{"idPost" : idPost},
            success: function(data){
                callback(data);
            },error: function(data){
                console.log("erro ajax remove post favorite");
            }
        });
    }

    getBestPost(idUser , callback){
        $.ajax({
            url: "http://betho3.000webhostapp.com/mvc/controller/getBestPost.php",
            method: "POST",
            data: {"idUser" : idUser},
            success: function(result){
                callback(result);
            },error: function(result){
                console.log("Erro bestPost");
            }
        });
    }

    checkPost(callback){
        let idPost = localStorage.getItem("idPost");
        let idUser = dados.id;
        $.ajax({
            url: "http://betho3.000webhostapp.com/mvc/controller/checkPost.php",
            method: "POST",
            data:{"idPost" : idPost , "idUser" : idUser},
            success: function(result){
                callback(result);
            }, error: function(result){
                //alert("ERRO AO CHECKAR POST SALVO/NOTSALVO");
            }
        });
    }

    insertStatusUser(idUser){
        let status = "online";
        $.ajax({
            url:"http://betho3.000webhostapp.com/mvc/dao/insertStatusUser.php",
            method: "POST",
            data:{"idUser" : idUser , "status" : status},
            success: function(result){
                console.log("ON THE LINE");
            },error:function(result){
                console.log("Não On The Line");
            }
        })
        
    }

    changeStatusUser(idUser , callback){
        let status = "ausente";
        $.ajax({
            url:"http://betho3.000webhostapp.com/mvc/dao/updateStatusUser.php",
            method: "POST",
            data:{"idUser" : idUser , "status" : status},
            success: function(result){
                callback(result);
            },error: function(result){
                console.log("Erro ajax change status user");
            }
        });
    }

    sendPostFile(formData , callback){
        
        $.ajax({
            url: "http://betho3.000webhostapp.com/mvc/dao/uploadFile.php",
            type: 'POST',
            data: formData,
            success: function (data) {
                callback(data)
            },error: function(data){
                //alert("erro");
                callback(data);
            },
            cache: false,
            contentType: false,
            processData: false,
            xhr: function() {  // Custom XMLHttpRequest
                var myXhr = $.ajaxSettings.xhr();
                if (myXhr.upload) { // Avalia se tem suporte a propriedade upload
                    myXhr.upload.addEventListener('progress', function () {
                        /* faz alguma coisa durante o progresso do upload */
                    }, false);
                }
            return myXhr;
            }
        });
        
    }

    sendPostFileChat(formData , callback){
        $.ajax({
            url: "http://betho3.000webhostapp.com/mvc/dao/uploadFileChat.php",
            type: 'POST',
            data: formData, 
            success: function (data) {
                callback(data)
            },error: function(data){
                callback(data);
            },
            cache: false,
            contentType: false,
            processData: false,
            xhr: function() {  // Custom XMLHttpRequest
                var myXhr = $.ajaxSettings.xhr();
                if (myXhr.upload) { // Avalia se tem suporte a propriedade upload
                    myXhr.upload.addEventListener('progress', function () {
                        /* faz alguma coisa durante o progresso do upload */
                    }, false);
                }
            return myXhr;
            }
        });
    }

    
    statusOffline(idUser , callback){
        let status = "offline";
        $.ajax({
            url:"http://betho3.000webhostapp.com/mvc/dao/updateStatusUser.php",
            method: "POST",
            data:{"idUser" : idUser , "status" : status},
            success: function(result){
                callback(result);
            },error: function(result){
                console.log("Erro ajax change status user");
            }
        });
    }

    sendImageUser(form , callback){

        $.ajax({
            url: "http://betho3.000webhostapp.com/mvc/dao/updatePhotoUser.php",
            type: 'POST',
            data: form,
            success: function (data) {
                callback(data)
            },error: function(data){
                //alert("erro");
                callback(data);
            },
            cache: false,
            contentType: false,
            processData: false,
            xhr: function() {  // Custom XMLHttpRequest
                var myXhr = $.ajaxSettings.xhr();
                if (myXhr.upload) { // Avalia se tem suporte a propriedade upload
                    myXhr.upload.addEventListener('progress', function () {
                        /* faz alguma coisa durante o progresso do upload */
                    }, false);
                }
            return myXhr;
            }
        });        
    }

    sendMessage(idUser1 , idUser2 , mensagem , callback) {
        let src = "";
        $.ajax({
            url: "http://betho3.000webhostapp.com/mvc/dao/insertMessageChat.php",
            method:"POST",
            data:{"idUser1" : idUser1 , "idUser2" : idUser2 , "mensagem" : mensagem},
            success: function(data){
                callback(data);
            },error:function(data){
                console.log("ERRO AJAX SEND MESSAGE CHAT");
            }
        });
    }

    //PEGA MENSAGENS DO CHAT
    
    dataChat(callback){
        let idUser1 = dados.id;
        let idUser2 = dadosChat;
        $.ajax({
            url:"http://betho3.000webhostapp.com/mvc/controller/getAllMessagesChat.php",
            method: "POST",
            data:{"idUser1" : idUser1 , "idUser2" : idUser2},
            success: function(result){
                callback(result);
            },error: function(result){
                console.log("ERROR");
            }
        });
    }

}