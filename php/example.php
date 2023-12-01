<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $chatId = "@helly_store"; // Замініть 'your_chat_id' на ваш реальний chat_id
    $message = $_POST["message"];

    $telegramApiUrl = "https://api.telegram.org/bot6698256121:AAHHOjKT96IWgDJFylmZoDXTsA_wF9RqMCk/sendMessage?chat_id={$chatId}&text={$message}";

    // Відправляємо запит до Telegram API
    $response = file_get_contents($telegramApiUrl);

    // Повертаємо відповідь сервера
    echo $response;
} else {
    header("HTTP/1.1 405 Method Not Allowed");
    echo "Method Not Allowed";
}
