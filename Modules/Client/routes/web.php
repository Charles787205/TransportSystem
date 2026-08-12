<?php

use Illuminate\Support\Facades\Route;
use Modules\Client\Http\Controllers\ClientController;
use Modules\Client\Http\Controllers\ClientLocationController;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('clients', ClientController::class)->names('client');
    Route::post('clients/{client}/locations', [ClientLocationController::class, 'store'])->name('client.location.store');
});
