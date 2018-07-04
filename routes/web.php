<?php

// Localization
Route::get('/js/lang.js', function () {
    $strings = Cache::rememberForever('lang.js', function () {
        $lang = config('app.locale');

        $files   = glob(resource_path('lang/' . $lang . '/*.php'));
        $strings = ['asd'];

        foreach ($files as $file) {
            $name           = basename($file, '.php');
            $strings[$name] = require $file;
        }

        return $strings;
    });

    header('Content-Type: text/javascript');
    echo('window.i18n = ' . json_encode($strings) . ';');
    exit();
})->name('assets.lang');

Route::view('/', 'app');
Route::view('/products/create', 'app');
Route::view('/products/groups/create', 'app');
Route::view('/products/categories/create', 'app');
Route::view('/products/specifications/create', 'app');
Route::view('/traders/create', 'app');
Route::view('/warehouse/create', 'app');