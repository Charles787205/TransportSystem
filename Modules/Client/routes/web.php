<?php

use Illuminate\Support\Facades\Route;
use Modules\Client\Http\Controllers\ClientController;
use Modules\Client\Http\Controllers\ClientBusinessUnitController;
use Modules\Client\Http\Controllers\ClientDestinationController;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('clients', ClientController::class)->names('client');
    Route::resource('clients.bu', ClientBusinessUnitController::class)->names('client.bu');
    Route::resource('clients.destination', ClientDestinationController::class)->names('client.destination');
});
