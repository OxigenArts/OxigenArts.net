<?php
$to =$POST['email'];
$subject = 'Mensaje de la web';
$message = "Nombre: $POST['name']".PHP_EOL;
$message.= "Email: $POST['email']".PHP_EOL;
$message.= "Mensaje: $POST['msg']".PHP_EOL;
$headers ='From: contact@oxigenarts.net'."\r\n".'Reply-To: contact@oxigenarts.net'."\r\n".'X-Mailer: PHP/' . phpversion();
mail($to, $subject, $message, $headers);
?>
