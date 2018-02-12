<?php 

    require "../service/conexao.php";
    $id = $_POST['id'];
    $sobre = $_POST['sobre'];

    $sql = "UPDATE users SET sobre = '$sobre' WHERE id = '$id' ";
    $exc = mysqli_query($conexao , $sql);

    if($exc){
        echo true;
    } else {
        echo false;
    }