<?php 

    require "../service/conexao.php";

    $idUser = $_POST['idUser'];
    $hora = date("H:i:s");
    $status = $_POST['status'];
    
    $sql = "INSERT INTO statusUser (idUser , hora , status ) values ('$idUser' , '$hora' , '$status')";
    $exc = mysqli_query($conexao , $sql);

    if($exc){
        echo true;
    } else {
        echo false;
    }