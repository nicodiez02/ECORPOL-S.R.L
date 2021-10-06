<?php

$nombre = $_POST['nombre'];
$razon = $_POST['razon'];
$apellido = $_POST['apellido'];
$rubro = $_POST['rubrito'];
$email = $_POST['email'];
$msj = $_POST['mensajito'];
$patron_msj= "/^[[:digit:]]+$/";

$emailEcoprol = "nicoo.diez02@gmail.com";
$asunto = "CONSULTA DE PRODUCTO!";

$cuerpo = "<p>
            <b>Nombre:</b> $nombre,
            <br/>
            <b>Apellido:</b> $apellido,
            <br/>
            <b>Razon:</b> $razon,
            <br/>
            <b>Rubro:</b> $rubro,
            <br/>
            <b>Email:</b> $email.
            <br/>
            <br/>
            <b>Mensaje:</b> $msj
            </p>";

if($nombre === '' || $razon=== '' || $apellido === '' || $rubro === '' || $email === '' || $msj === ''){
    echo json_encode('unsuccess3');
}else if(is_numeric($nombre) || is_numeric($razon) || is_numeric($apellido) || is_numeric($rubro) ||
        preg_match($patron_msj, $msj)  || strlen($msj) > 200){
        echo json_encode('unsuccess2');

}else if(filter_var($email, FILTER_VALIDATE_EMAIL)){   
    $headers =  'MIME-Version: 1.0' . "\r\n"; 
    $headers .= 'From: noreply@example.com' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 

    $mail = mail($emailEcoprol,$asunto,$cuerpo,$headers);

    if($mail){
        echo json_encode('success');
        
    }else{
       echo json_encode('unsuccess-mail'); 
    }
    
    
}else{
    echo json_encode('unsuccess1');
}

?>