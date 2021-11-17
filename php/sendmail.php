<?php
    /* Парсинг данных и подготовка их к отправке. */
    $subject = "Вопрос(тестовое задние)";

    $to = "join@ecwid.com";
    $name = $_POST['name'];
    $date = $_POST['date'];
    $number = $_POST['phone'];
    $from = trim($_POST['email']);


    /* Проверка вопроса на лишние пробелы нежелательные ссылки и тд. */
    $message_txt = htmlspecialchars($_POST['message']);
    $message_txt = urldecode($_POST['message']);
    $message_txt = trim($_POST['message']);

    $message = "От: $name, $date; " . "\r\n" . 
    "Контактные данные: $number;" . "\r\n" .
    "$message_txt";

    /* Тут мы смотрим успешно ли отправилось письмо */
    if(mail($to, $subject, $message, $from))
    {
        echo "Письмо отправлено!";
    } else {
        echo "Письмо не отправлено.";
    }
?>