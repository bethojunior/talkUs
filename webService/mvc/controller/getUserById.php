
<?php

require_once "../service/conexao.php";

$id = $_GET['id'];


$sql = mysqli_query($conexao , "SELECT * FROM  users WHERE id = '$id' ") or die (mysqli_error($conexao));

$result = mysqli_fetch_object($sql);
echo json_encode($result);