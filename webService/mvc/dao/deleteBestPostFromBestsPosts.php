<?php
    require "../service/conexao.php";

    $idPost = $_POST['idPost'];
    $sql = "DELETE FROM bestPosts WHERE idPost = '$idPost'";
    $dados = mysqli_query($conexao , $sql);

    if($dados){
        echo true;
    }else {
        echo false;
    }
    