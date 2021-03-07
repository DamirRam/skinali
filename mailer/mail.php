<?php 

$name          = $_POST['user_name'];
$phone         = $_POST['user_phone'];
$message       = $_POST['user_message'];
$kind_of_glass = $_POST['kind_of_glass'];
$glass_width   = $_POST['glass_width'];
$glass_height  = $_POST['glass_height'];
$delivery      = $_POST['delivery'];
$mount         = $_POST['mount'];
$price         = $_POST['price'];

if($message != '') {
  $message = 'Сообщение: ' . $message . '<br>';
}
if($kind_of_glass != '') {
  $kind_of_glass = 'Вид стекла: ' . $kind_of_glass . '<br>';
}
if($glass_width != '') {
  $glass_width = 'Ширина стекла: ' . $glass_width . ' см <br>';
}
if($glass_height != '') {
  $glass_height = 'Высота стекла: ' . $glass_height . ' см <br>';
}
if($delivery != '') {
  $delivery = 'Доставка: ' . $delivery . '<br>';
}
if($mount != '') {
  $mount = 'Монтаж: ' . $mount . '<br>';
}
if($price != '') {
  $price = 'Цена: ' . $price . '<br>';
}

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'sendmailfromsite@yandex.ru';                 // Наш логин
$mail->Password = 'ucgpwjsckdefidky';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('sendmailfromsite@yandex.ru', 'Фабрика скинали');   // От кого письмо 
$mail->addAddress('d.a.ramazanov@yandex.ru');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = $name;
$mail->Body    = '
	Клиент оставил свои данные <br> 
	Имя: ' . $name . ' <br>
  Телефон: ' . $phone . '<br>' 
  . $kind_of_glass
  . $glass_width
  . $glass_height
  . $mount
  . $delivery
  . $price
  . $message . '';
	//	Сайт: ' . $site . ' <br>//
/*$mail->AltBody = 'Это альтернативный текст';*/

if(!$mail->send()) {
    return false;
} else {
	return true;
}

?>
