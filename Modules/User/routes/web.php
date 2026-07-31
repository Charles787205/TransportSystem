<?php

use Illuminate\Support\Facades\Route;
use Modules\User\Http\Controllers\UserController;
use Modules\User\Http\Controllers\UserRolesController;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('roles', UserRolesController::class);
    Route::resource('users', UserController::class)->names('user');
});
