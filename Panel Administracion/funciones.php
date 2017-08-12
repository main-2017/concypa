<?php
 
    //funcion para limpiar variables
    function limpiar($var)
    {
        $var = trim($var);
        $var = htmlspecialchars($var);
        $var = str_replace(chr(160),'',$var);
        return $var;
    }
   
    /*generando el codigo aleatorio para envio de email*/
    function generarPassword($longitud, $tipo=0)
        {
            //creamos la variable codigo
            $codigo = "";
            //caracteres a ser utilizados
            $caracteres="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            //el maximo de caracteres a usar
            $max=strlen($caracteres)-1;
            //creamos un for para generar el codigo aleatorio utilizando parametros min y max
            for($i=0;$i < $longitud;$i++) { $codigo.=$caracteres[rand(0,$max)]; } //regresamos codigo como valor return $codigo; } /*mostramos tiempo real de registro*/ function MostrarTime($t) { $t = strtotime($t); if(date('d')==date('d',$t)) { return date('h:i A',$t);} else{ return date('F jS Y h:i A',$t);} // Si se registro hoy muestre hora y minuto // caso contrario muestre fecha completa } /*enviamos email*/ function send_mail($from,$to,$subject,$body) { $headers = ''; $headers .= "From: $from\n"; $headers .= "Reply-to: $from\n"; $headers .= "Return-Path: $from\n"; $headers .= "Message-ID: <" . md5(uniqid(time())) . "@" . $_SERVER['SERVER_NAME'] . ">\n";
            $headers .= "MIME-Version: 1.0\n";
            $headers .= "Date: " . date('r', time()) . "\n";
            $headers .= "Content-type: text/html; charset=utf-8 " ."\n";
         
            mail($to,$subject,$body,$headers);
        }
    //eliminamos espacios en blanco
    function limpia_espacios($cadena)
        {
            $cadena = str_replace(' ', '_', $cadena);
            return $cadena;
        }
?>