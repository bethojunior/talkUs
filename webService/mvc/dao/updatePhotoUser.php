<?php 

    require "../service/conexao.php";
    require "../lib/WideImage.php";
    
    $id = $_POST['idPerfilUser'];    
    date_default_timezone_set('America/Fortaleza');
    $data = date('d-m-y-H-i-s');
    $titulo = $login.".".$data;
    $imgExt = strtolower(pathinfo($_FILES['imagemPerfilUser']['name'],PATHINFO_EXTENSION));
    $imgUser = $titulo.".".$imgExt;


    $sql = "UPDATE users SET imgUser = '$imgUser' WHERE id = '$id' ";
    $exc = mysqli_query($conexao , $sql);


// UPLOAD IMAGENS //////////////////////
    uploadImage($_FILES['imagemPerfilUser'],$titulo);
    function uploadImage($files, $titulo){
    $imgFile = $files['name'];
    $tmp_dir = $files['tmp_name'];
    $imgSize = $files['size'];
    if(!empty($imgFile)){
        $upload_dir = '../../profile/'; // diretório de uploadp

        $imgExt = strtolower(pathinfo($imgFile,PATHINFO_EXTENSION)); // pega ext da imagem

        // valid image extensions
        $valid_extensions = array('jpeg', 'jpg', 'png', 'gif'); //valida ext

        // RENOMEAR IMAGEM
        $userpic = $titulo.".".$imgExt;


        if(in_array($imgExt, $valid_extensions)){
            // Check file size '5MB'
            if($imgSize < 50000000)    {
                move_uploaded_file($tmp_dir,$upload_dir.$userpic);

                //IMAGENS SMALL

                $img = WideImage::load($upload_dir.$userpic);
                //REDIMENCIONAR IMAGEM
                $red = $img->resize(50,50);
                //SALVANDO EM QUALQUER FORMATO
                $red->saveToFile($upload_dir.'small/'.$userpic);


                //IMAGENS MEDIUM

                $img = WideImage::load($upload_dir.$userpic);
                //REDIMENCIONAR IMAGEM
                $red = $img->resize(300,300);
                //SALVANDO EM QUALQUER FORMATO
                $red->saveToFile($upload_dir.'medium/'.$userpic);

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