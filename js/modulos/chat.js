var dadosChat = localStorage.getItem("idUserChat");
function loadDataChat(){
    let id = dadosChat;
    alert(id);
    new UserController().getUserForId(id , callback);
    function callback(dataUser2){
        let txt = "";
        let src = "";
        var pathImg = "http://betho3.000webhostapp.com/profile/small/";
        let image = dataUser2.imgUser;
        if(image === null){
            src = "";
        }else if(image === ""){
            src = "";
        }else {
            src = pathImg+image;
        }
        txt += 
            "<div class='row divPerfilChat'>"+
                "<span>" + status + "</span><br>"+
                "<div class='col s4'><img class='col s12' src='" + src + "'></div>"+
                "<div class='col s8'>"+
                    "<span class='namePerfil'>" + dataUser2.name + "</span><br>"+
                    "<span><a href=tel:'"+ dataUser2.phone +"'>"+ dataUser2.phone +"</a></span><br>"+
                    "<span>" + dataUser2.sobre + "</span><br>"+
                "</div"+
            "</div>";
            document.getElementById("perfilUser2").innerHTML = txt;
    }
}

// function loadChat(){
//     new DadosController().dataChat();
// }