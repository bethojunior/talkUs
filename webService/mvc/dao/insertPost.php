<?php 

    require "../service/conexao.php";
    
    $login = $_POST['login'];
    $post = $_POST['post'];
    $data = date("Y/m/d");

    $sql = "INSERT INTO postagens (name , post , data , login ) values ('$login' , '$post' , '$data' , '$login')";
    $exc = mysqli_query($conexao , $sql);

    if($exc){
        echo true;
    } else {
        echo false;
    }