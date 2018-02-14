<?php
    
    require_once "../service/conexao.php";
    
    $idUser = $_POST['idUser'];
    $status = $_POST['status'];
    
    $sql = mysqli_query($conexao , "SELECT * FROM  statusUser WHERE idUser = '$idUser' ORDER BY id DESC") or die (mysqli_error($conexao));
    
    $result = mysqli_fetch_object($sql);
    echo json_encode($result);