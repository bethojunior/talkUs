<?php
/**
 * Created by PhpStorm.
 * User: Betho Junior
 * Date: 20/02/2018
 * Time: 14:05
 */


    require "../service/conexao.php";

    date_default_timezone_set('America/Fortaleza');
    $data = date('d-m-y-H-i-s');
    $idUser = $_POST['idUser'];
    $login = $_POST['login'];
    $post = $_POST['post'];
    $titulo = $login.".".$data;
    $imgExt = strtolower(pathinfo($_FILES['imagem']['name'],PATHINFO_EXTENSION));
    $src = $titulo.".".$imgExt;


    $sql = "INSERT INTO postagens (name , post , data , login , idUser , src) VALUES ('$login' , '$post' , '$data' , '$login' , '$idUser' , '$src')";
    $exc = mysqli_query($conexao , $sql) or die (mysqli_error($sql));



    // UPLOAD IMAGENS //////////////////////
    uploadImage($_FILES['imagem'],$titulo);
    function uploadImage($files, $titulo){
        $imgFile = $files['name'];
        $tmp_dir = $files['tmp_name'];
        $imgSize = $files['size'];
        if(!empty($imgFile)){
            $upload_dir = '../../files/'; // diretório de uploadp

            $imgExt = strtolower(pathinfo($imgFile,PATHINFO_EXTENSION)); // pega ext da imagem

            // valid image extensions
            $valid_extensions = array('mp3'); //valida ext

            // RENOMEAR IMAGEM
            $userpic = $titulo.".".$imgExt;


            if(in_array($imgExt, $valid_extensions)){
                // Check file size '5MB'
                if($imgSize < 50000000)    {
                    move_uploaded_file($tmp_dir,$upload_dir.$userpic);

                }
                else{
                    echo false;
                }
            }
            else{
                echo false;
            }
        }

        else{
            echo false;
        }
    }