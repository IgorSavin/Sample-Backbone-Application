<?php
header("Content-type: application/json; charset=utf-8");

$news = [
    'Id' => 19677670,
    'Title' => 'JavaScript. Подробное руководство',
    'Author' => 'Символ-Плюс',
    'Publisher' => 'Символ-Плюс'
];

echo json_encode($news);
?>