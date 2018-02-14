<?php 

    require "../service/conexao.php";

    $idUser = $_POST['idUser'];
    $status = $_POST['status'];
    $hora = date("H:i:s");

    $sql = "UPDATE statusUser SET status = '$status' , hora = '$hora' WHERE idUser = '$idUser' ";
    $exc = mysqli_query($conexao , $sql);

    if($exc){
        echo true;
    } else {
        echo false;
    }