//DADOS DO USUÁRIO SELECIONADO
var dadosChat = localStorage.getItem("idUserChat");
//DADOS DO LOGADO
var dados = JSON.parse(localStorage.getItem("result"));

class Crud{

    updateData(){
        $.ajax({
            url: "http://betho3.000webhostapp.com/mvc/controller/getAllPosts.php",
            method: "POST",
            data:{},
            success: function(result){
                new DadosController().getAllPosts();
                loadPerfil();
            },error: function(result){
                
            }
        });
    }

    loadDataChat(idUser1 , idUser2 ){
        $.ajax({
            url: "http://betho3.000webhostapp.com/mvc/controller/getAllMessagesChat.php",
            method: "POST",
            data:{"idUser" : idUser1 , "idUser2" : idUser2 },
            success: function(result){
                new DadosController().dataChat();
                loadDataChat();
            },error:function(result){
                console.log("Erro crud");
            }
        })
    }

}