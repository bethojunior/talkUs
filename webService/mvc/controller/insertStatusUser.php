<?php 

    require "../service/conexao.php";

    $idUser = $_POST['idUser'];
    $status = $_POST['status'];
    
    $sql = "UPDATE users SET status = '$status' WHERE id = '$idUser' ";
    $exc = mysqli_query($conexao , $sql);

    if($exc){
        echo true;
    } else {
        echo false;
    }
