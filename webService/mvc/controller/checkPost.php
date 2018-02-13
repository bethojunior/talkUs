<?php 

    require "../service/conexao.php";
    
    $idUser = $_POST['iduser'];
    $idPost = $_POST['idPost'];

    $sql = "SELECT * FROM bestPosts INNER JOIN postagens on bestPosts.idPost = postagens.id WHERE bestPosts.idUser = '$idUser' and bestPosts.idPost = '$idPost'";
    $dados = mysqli_query($conexao , $sql);
 
    if($result = mysqli_fetch_array($dados)){
       echo true; 
    } else {
        echo false;
    }
    
