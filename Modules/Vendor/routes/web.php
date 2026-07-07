<?php

use Illuminate\Support\Facades\Route;
use Modules\Vendor\Http\Controllers\DriverController;
use Modules\Vendor\Http\Controllers\VendorController;
use Modules\Vendor\Http\Controllers\VendorDriverController;
use Modules\Vendor\Http\Controllers\VendorVehicleController;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('vendors', VendorController::class)->names('vendor');
    Route::resource('drivers', DriverController::class)->names('drivers');
    Route::resource('vendors.drivers', VendorDriverController::class)->shallow();
    Route::resource('vendors.vehicles', VendorVehicleController::class)->shallow();
    
});
