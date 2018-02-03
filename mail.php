<?php
$name =  $POST['name'];
$email = $POST['email'];
$msg = $POST['msg'];
$to = "contact@oxigenarts.net";
$subject = "Mensaje de la web";
$message = "Nombre: $name \r\nEmail: $email \r\nMensaje: $msg \r\n";
$headers = "From: contact@oxigenarts.net\r\nReply-To: contact@oxigenarts.net \r\n X-Mailer: PHP/". phpversion();
mail($to, $subject, $message, $headers);
?>
