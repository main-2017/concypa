<?php
// validamos el request para el login del sitio.
if (!isset($_SESSION)) {
  session_start();
}
 
$con = new mysqli("localhost","root","","basedatos");
 
// chequeamos la conexion
if (mysqli_connect_error()) {
    die('Falló al conectar a MySQL: (' . mysqli_connect_errno() . ') '
            . mysqli_connect_error());
}
 
//chequeamos el archivo include
// nos sevirá para validar datos dentro del sistema
if (is_file ('inc/include.php')){
     include ('inc/include.php');
    }
    else {
    include ('../inc/include.php');
}
 
?>