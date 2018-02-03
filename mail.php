<?php
$to =$POST['email'];
$subject = 'Mensaje de la web';
$message = "Nombre: $POST['name']\r\nEmail: $POST['email']\r\nMensaje: $POST['msg']\r\n";
$headers = "From: contact@oxigenarts.net\r\nReply-To: contact@oxigenarts.net \r\n X-Mailer: PHP/". phpversion();
mail($to, $subject, $message, $headers);
?>
