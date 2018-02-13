<?php 

    require "../service/conexao.php";
    $idUser = $_POST['idUser'];
    $login = $_POST['login'];
    $post = $_POST['post'];
    $data = date("Y-m-d H:i:s");

    $sql = "INSERT INTO postagens (idUser , post , data , login , name ) values ('$idUser' , '$post' , '$data' , '$login' , '$login')";
    $exc = mysqli_query($conexao , $sql);

    if($exc){
        echo "true";
    } else {
        echo "false";
    }