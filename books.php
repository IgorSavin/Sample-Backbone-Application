<?php
header("Content-type: application/json; charset=utf-8");

$news = [
    [
        'Id' => 6287517,
        'Title' => 'JavaScript. Шаблоны',
        'Author' => 'Стоян Стефанов',
        'Publisher' => 'Символ-Плюс'
    ],
    [
        'Id' => 18421547,
        'Title' => 'JavaScript. Оптимизация производительности',
        'Author' => 'Стоян Стефанов',
        'Publisher' => 'Символ-Плюс'
    ],
    [
        'Id' => 19677670,
        'Title' => 'JavaScript. Подробное руководство',
        'Author' => 'Символ-Плюс',
        'Publisher' => 'Символ-Плюс'
    ]
];

echo json_encode($news);
?>