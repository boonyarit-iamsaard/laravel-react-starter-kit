<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::get('about', function () {
    return Inertia::render('about');
})->name('about');

require __DIR__.'/admin.php';
require __DIR__.'/auth.php';
require __DIR__.'/settings.php';
