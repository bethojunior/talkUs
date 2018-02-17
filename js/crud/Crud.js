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

    loadDataChat(){
        $.ajax({
            url: "",
            method: "POST",
            data:{},
            success: function(result){
                new DadosController().dataChat();
                loadDataChat();
            },error:function(result){
                console.log("Erro crud");
            }
        })
    }

}