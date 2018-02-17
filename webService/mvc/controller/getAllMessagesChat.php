<?php 

    require "../service/conexao.php";
    $idUser1 = $_POST['idUser1'];
    $idUser2 = $_POST['idUser2'];
    
    $sql = "SELECT * FROM chat WHERE idUser1 = '$idUser1' AND idUser2 = '$idUser2' ORDER BY id DESC";
    $dados = mysqli_query($conexao , $sql);
    $array = [];
    while($result = mysqli_fetch_object($dados)){
        $all[] = $result;
    }  
    echo json_encode($all);
