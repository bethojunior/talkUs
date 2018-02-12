<?php 

    require "../service/conexao.php";
    
    $sql = "SELECT * FROM users";
    $dados = mysqli_query($conexao , $sql);
    $array = [];
    while($result = mysqli_fetch_object($dados)){
        $all[] = $result;
    }  
    echo json_encode($all);
