<?php 

    require "../service/conexao.php";
    
    $idUser = $_POST['idUser'];

    $sql = "SELECT * FROM bestPosts INNER JOIN postagens on bestPosts.idPost = postagens.id WHERE bestPosts.idUser = '$idUser' ORDER BY bestPosts.id DESC";
    $dados = mysqli_query($conexao , $sql);
    $array = [];
    while($result = mysqli_fetch_object($dados)){
        $all[] = $result;
    }  
    echo json_encode($all);
