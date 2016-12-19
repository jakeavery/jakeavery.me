<?php
var_dump($_POST);

//collect and sanitize form inputs
$name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);    
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

//prepare email
$email_to = "mail@jakeavery.me";
$email_subject = "Form Submission";
$email_from = "mail@jakeavery.me"

$email_message = "Form details below:\n\n";
$email_message .= "Name: ".$name."\n";
$email_message .= "Email: ".$email."\n";
$email_message .= "Message: ".$message."\n";


$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $email \r\n";

mail($email_to, $email_subject, $email_message, $headers);

?>