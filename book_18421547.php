<?php
header("Content-type: application/json; charset=utf-8");

$news = [
    'Id' => 18421547,
    'Title' => 'JavaScript. Оптимизация производительности',
    'Author' => 'Стоян Стефанов',
    'Publisher' => 'Символ-Плюс'
];

echo json_encode($news);
?>