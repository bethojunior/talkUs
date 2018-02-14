
<?php

require_once "../service/conexao.php";

$login = $_POST['login'];
$pass = $_POST['pass'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$data = $_POST['data'];
$status = "offline";
$sobre = "*sem status*";

$sql = "INSERT INTO users (status , login , pass , name , phone , dataNascimento , imgUser , sobre) VALUES ('$status' , '$login' , '$pass' , '$name' , '$phone' , '$data' , '123' , '$sobre')";
$exc = mysqli_query($conexao , $sql);

    if($exc){
        echo true;
    } else {
        echo false;
    }

