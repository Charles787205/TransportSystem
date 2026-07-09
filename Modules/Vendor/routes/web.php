<?php

use Illuminate\Support\Facades\Route;
use Modules\Vendor\Http\Controllers\DriverController;
use Modules\Vendor\Http\Controllers\VendorController;
use Modules\Vendor\Http\Controllers\VendorDriverController;
use Modules\Vendor\Http\Controllers\VendorVehicleController;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('vendors', VendorController::class)->names('vendor');
    Route::resource('vendors.drivers', VendorDriverController::class)->names('vendor.driver');
    Route::resource('vendors.vehicles', VendorVehicleController::class)->names('vendor.vehicle');
    Route::patch(
        'vendors/{vendor}/vehicles/{vehicle}/attach-vehicle-to-driver',
        [VendorVehicleController::class, 'attachDriver']
    )->name('vendors.attach-vehicle-to-driver');
});
