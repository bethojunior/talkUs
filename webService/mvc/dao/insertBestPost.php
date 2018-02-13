<?php 

    require "../service/conexao.php";
    
    $idPost = $_POST['idPost'];
    $idUser = $_POST['idUser'];

    $sql = "INSERT INTO bestPosts (idPost , idUser) values ('$idPost' , '$idUser')";
    $exc = mysqli_query($conexao , $sql);

    if($exc){
        echo true;
    } else {
        echo false;
    }