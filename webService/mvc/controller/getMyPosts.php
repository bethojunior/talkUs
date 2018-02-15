<?php 

    require "../service/conexao.php";
    $idUser = $_POST['idUser'];

    $sql = "SELECT * FROM postagens WHERE idUser = '$idUser' ORDER BY id DESC";
    $dados = mysqli_query($conexao , $sql);
    $array = [];
    while($result = mysqli_fetch_object($dados)){
        $all[] = $result;
    }  
    echo json_encode($all);
