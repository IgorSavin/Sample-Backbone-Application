<?php
header("Content-type: application/json; charset=utf-8");

$news = [
    'Id' => 6287517,
    'Title' => 'JavaScript. Шаблоны',
    'Author' => 'Стоян Стефанов',
    'Publisher' => 'Символ-Плюс'
];

echo json_encode($news);
?>