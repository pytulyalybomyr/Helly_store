<?php

$botToken = '6698256121:AAHHOjKT96IWgDJFylmZoDXTsA_wF9RqMCk';
$chatId = '@helly_store'; // Замініть на ваш ID каналу

// Зчитуємо дані з форми
$name = $_POST['username'];
$email = $_POST['email'];
$message = $_POST['message'];

// Створюємо текст повідомлення
$text = "Нова заявка:\nІм'я: $name\nEmail: $email\nПовідомлення: $message";

// Викликаємо Telegram API для відправлення повідомлення
file_get_contents("https://api.telegram.org/bot$botToken/sendMessage?chat_id=$chatId&text=" . urlencode($text));

echo 'Заявка успішно відправлена!';
