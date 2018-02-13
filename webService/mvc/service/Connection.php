<?php
    final class Connection {
        
        $host = '704art.mysql.uhserver.com';
        $login =  '704art';
        $pass = '@cdc53080b';
        $dataBase = '704art';
        // $host = 'localhost';
        // $login =  'root';
        // $pass = '';
        // $dataBase = '704art';


        $conexao = mysqli_connect($host , $login , $pass , $dataBase);
        return $conexao;
    }