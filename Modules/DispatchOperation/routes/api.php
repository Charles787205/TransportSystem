<?php

use Illuminate\Support\Facades\Route;
use Modules\DispatchOperation\Http\Controllers\DispatchOperationController;

Route::middleware(['auth:sanctum'])->prefix('v1')->group(function () {
    Route::apiResource('dispatchoperations', DispatchOperationController::class)->names('dispatchoperation');
});
