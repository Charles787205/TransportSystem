<?php

use Illuminate\Support\Facades\Route;
use Modules\DispatchOperation\Http\Controllers\DispatchOperationController;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('dispatchoperations', DispatchOperationController::class)->names('dispatchoperation');
});
