
<?php

require "../service/conexao.php";
require "../lib/WideImage.php";

    date_default_timezone_set('America/Fortaleza');
    $hora = date("H:i:s");
    $idUser1 = $_POST['idUser1'];
    $idUser2 = $_POST['idUser2'];
    $mensagem = $_POST['mensagem'];
    if($mensagem == ""){
        $mensagem = $hora;
    }
    
    $titulo = $idUser".".$hora;
    $imgExt = strtolower(pathinfo($_FILES['imagem']['name'],PATHINFO_EXTENSION));
    $src = $titulo.".".$imgExt;

    
    $sql = "INSERT INTO chat (IdMensagem , idUser1 , idUser2 , hora , mensagem , src ) VALUES ('$idUser1' , '$idUser1' , '$idUser2' , '$hora' , '$mensagem' , '$src')";
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
        $valid_extensions = array('jpeg', 'jpg', 'png', 'gif'); //valida ext

        // RENOMEAR IMAGEM
        $userpic = $titulo.".".$imgExt;


        if(in_array($imgExt, $valid_extensions)){
            // Check file size '5MB'
            if($imgSize < 50000000)    {
                move_uploaded_file($tmp_dir,$upload_dir.$userpic);

                // //IMAGENS SMALL

                $img = WideImage::load($upload_dir.$userpic);
                //REDIMENCIONAR IMAGEM
                $red = $img->resize(200, 200 , 'inside');
                //SALVANDO EM QUALQUER FORMATO
                $red->saveToFile($upload_dir.'small/'.$userpic,100);


                //IMAGENS MEDIUM

                $img = WideImage::load($upload_dir.$userpic);
                //REDIMENCIONAR IMAGEM
                $red = $img->resize(200, 200 , 'inside');
                //SALVANDO EM QUALQUER FORMATO
                $red->saveToFile($upload_dir.'medium/'.$userpic,100);

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