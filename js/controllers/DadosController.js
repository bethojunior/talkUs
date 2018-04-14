const PRODUCTION = "http://bethojunior.fabrica704.com.br/mvc/";
var dados = JSON.parse(localStorage.getItem("result"));
//DADOS DO USUÁRIO SELECIONADO
var dadosChat = localStorage.getItem("idUserChat");

class DadosController{

    getMyPosts(idUser , callback){
        $.ajax({
            url: PRODUCTION+"controller/getMyPosts.php",
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
            url: PRODUCTION+"dao/updateSobre.php",
            method: "POST",
            data: {"id" : id , "sobre" : sobre},
            success: function(result){
                function ok() {
                    let login = dados.login;
                    let pass = dados.pass;
                    $.ajax({
                        url: PRODUCTION+"controller/login.php",
                        method: "GET",
                        data: {"login" : login , "pass" : pass},
                        success: function(result){
                            //dialog.hide();
                            let dados = JSON.parse(result);
                            if(dados != null){
                                loadPerfil();
                            } else {
                                console.log("ERRO UPDATESOBRE");
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
            url: PRODUCTION+"dao/inserirPost.php",
            method: "POST",
            data: {"login" : login , "post" : post , "idUser" : idUser},
            success: function(result){
                if(result != "false"){
                    dialog.hide();
                }else {
                    console.log("ERRO SENDDATAPOST");
                }
            }, error: function(result){
                console.log("erro Ajax");
            }
        });
    }

    getAllPosts(callback){
        $.ajax({
            url: PRODUCTION+"controller/getAllPosts.php",
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
            url:PRODUCTION+"controller/getAllPosts.php",
            method: "POST",
            success: function(result){
                let dados = JSON.parse(result);
                var postSelect = "";
                for(let i in dados){
                    let src = "";
                    let path = "http://bethojunior.fabrica704.com.br/files/small/";
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

    deleteDataPost(id , callback){
        $.ajax({
            url: PRODUCTION+"dao/deletePost.php",
            method: "POST",
            data: {"id" : id},
            success: function(result){
                callback(result);
            },error: function(result){
            }
        });
    }

    postSave(idPost){
        let idUser = dados.id;
        $.ajax({
            url: PRODUCTION+"dao/insertBestPosts.php",
            method: "POST",
            data:{"idPost" : idPost , "idUser" : idUser},
            success: function(result){
                if(result != false){
                    console.log("Adcionado aos favoritos com sucesso");
                } else {
                }
            }, error: function(result){
            }
        });
    }

    disabelSavedPost(idPost , callback){
        $.ajax({
            url: PRODUCTION+"dao/deleteBestPostFromBestsPost.php",
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
            url: PRODUCTION+"controller/getBestPost.php",
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
            url: PRODUCTION+"controller/checkPost.php",
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
            url:PRODUCTION+"dao/insertStatusUser.php",
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
            url:PRODUCTION+"dao/updateStatusUser.php",
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
            url: PRODUCTION+"dao/uploadFile.php",
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
            url: PRODUCTION+"dao/uploadFileChat.php",
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

    sendPostFileChatPhoto(formData2 , callback){
        $.ajax({
            url: PRODUCTION+"dao/uploadPhotoChat.php",
            type: 'POST',
            data: formData2, 
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
            url:PRODUCTION+"dao/updateStatusUser.php",
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
            url: PRODUCTION+"dao/updatePhotoUser.php",
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
            url: PRODUCTION+"dao/insertMessageChat.php",
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
            url:PRODUCTION+"getAllMessagesChat.php",
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