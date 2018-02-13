<?php
    require "../service/conexao.php";

    $id = $_POST['id'];
    $sql = "DELETE FROM postagens WHERE id = '$id'";
    $dados = mysqli_query($conexao , $sql);

    if($dados){
        echo true;
    }else {
        echo false;
    }
    