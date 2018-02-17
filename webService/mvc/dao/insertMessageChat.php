<?php 

    require "../service/conexao.php";

    date_default_timezone_set('America/Fortaleza');
    $hora = date("H:i:s");
    $idUser1 = $_POST['idUser1'];
    $idUser2 = $_POST['idUser2'];
    $mensagem = $_POST['mensagem'];
    
    $sql = "INSERT INTO chat (IdMensagem , idUser1 , idUser2 , hora , mensagem) VALUES ('$idUser1' , '$idUser1' , '$idUser2' , '$hora' , '$mensagem')";
    $dados = mysqli_query($conexao , $sql);
    
    if($dados){
        echo true;
    } else {
        echo false;
    }
