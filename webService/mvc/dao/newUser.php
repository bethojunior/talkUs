
<?php

require_once "../service/conexao.php";

$login = $_POST['login'];
$pass = $_POST['pass'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$data = $_POST['data'];
$status = "offline";

$sql = mysqli_query($conexao , "SELECT * FROM  users WHERE login = '$login' ") or die (mysqli_error($conexao));
$rows = mysqli_num_rows($sql);
if($rows >= 1){
    echo false;
    die();
} else {
        $sql = "INSERT INTO users (status login , pass , name , phone , dataNascimento) VALUES ('$status' , '$login' , '$pass' , '$name' , '$phone' , '$data')";
    $exc = mysqli_query($conexao , $sql);

    if($exc){
        echo true;
    } else {
        echo false;
    }
}

