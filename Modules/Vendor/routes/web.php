<?php

use Illuminate\Support\Facades\Route;
use Modules\Vendor\Http\Controllers\VendorController;
use Modules\Vendor\Http\Controllers\VendorDriverController;
use Modules\Vendor\Http\Controllers\VendorVehicleController;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('vendors', VendorController::class)->names('vendor');
    Route::resource('vendors.drivers', VendorDriverController::class)->names('vendor.driver');
    Route::resource('vendors.vehicles', VendorVehicleController::class)->names('vendor.vehicle');

    Route::post('vendors/{vendor}/vehicles/{vehicle}/insurances', [VendorVehicleController::class, 'addInsurance'])
        ->name('vendors.vehicles.insurances.store');
    Route::post('vendors/{vendor}/vehicles/{vehicle}/registrations', [VendorVehicleController::class, 'addRegistration'])
        ->name('vendors.vehicles.registrations.store');

    Route::patch(
        'vendors/{vendor}/vehicles/{vehicle}/attach-vehicle-to-driver',
        [VendorVehicleController::class, 'attachDriver']
    )->name('vendors.attach-vehicle-to-driver');
});
