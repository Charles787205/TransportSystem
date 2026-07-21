<?php

use Illuminate\Support\Facades\Route;
use Modules\DispatchOperation\Http\Controllers\DispatchOperationController;
use Modules\DispatchOperation\Http\Controllers\DispatchFormOptionsController;
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dispatchoperations/form-options', [DispatchFormOptionsController::class, 'index'])
    ->name('dispatch-operations.form-options');
    Route::resource('dispatchoperations', DispatchOperationController::class)->names('dispatchoperation');
});
