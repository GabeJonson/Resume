<?php

$recepient = "sky3107@gmail.com";
$sitename = "alexweb";

$name = trim($_POST["name"]);
$mail = trim($_POST["mail"]);
$text = trim($_POST["text"]);
$message = "Имя: $name \nКомпания: $mail \nТекст: $text";

$pagetitle = "Письмо с \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");