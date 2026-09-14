<?php

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Modules\Dashboard\Classes\Data\Request\DashboardFilterData;
use Modules\Dashboard\Repositories\DashboardRepository;
use Tests\TestCase;


uses(TestCase::class, RefreshDatabase::class);

test('getMetrics computes correct dashboard statistics', function () {
    // Setup minimal required data using DB facade to avoid factory dependencies
    $today = now()->format('Y-m-d');

    // Create 1 vendor, 1 driver, and 2 vehicles
    DB::table('vendors')->insert(['id' => 1, 'name' => 'Test Vendor', 'email' => 'test@vendor.com', 'phone_number' => '12345', 'created_at' => now(), 'updated_at' => now()]);
    DB::table('drivers')->insert(['id' => 1, 'vendor_id' => 1, 'full_name' => 'John Doe', 'gender' => 'Male', 'phone_number' => '12345', 'status' => 'active', 'created_at' => now(), 'updated_at' => now()]);
    DB::table('vehicles')->insert([
        ['id' => 1, 'vendor_id' => 1, 'driver_id' => 1, 'plate_number' => 'ABC-123', 'type' => 'Type1', 'make' => 'Make1', 'engine_number' => 'E1', 'chassis_number' => 'C1', 'year_model' => '2020', 'owners_name' => 'Owner', 'registered_address' => 'Address', 'is_active' => 1, 'created_at' => now(), 'updated_at' => now()],
        ['id' => 2, 'vendor_id' => 1, 'driver_id' => 1, 'plate_number' => 'XYZ-987', 'type' => 'Type2', 'make' => 'Make2', 'engine_number' => 'E2', 'chassis_number' => 'C2', 'year_model' => '2021', 'owners_name' => 'Owner', 'registered_address' => 'Address', 'is_active' => 1, 'created_at' => now(), 'updated_at' => now()],
    ]);

    // Create clients and locations for plans
    DB::table('clients')->insert(['id' => 1, 'name' => 'Test Client', 'email' => 'test@client.com', 'phone_number' => '54321', 'active' => 1, 'created_at' => now(), 'updated_at' => now()]);
    DB::table('locations')->insert([
        ['id' => 1, 'client_id' => 1, 'name' => 'Origin', 'type' => 'Plant', 'created_at' => now(), 'updated_at' => now()],
        ['id' => 2, 'client_id' => 1, 'name' => 'Destination', 'type' => 'Warehouse', 'created_at' => now(), 'updated_at' => now()],
    ]);

    // Create a plan with 10 vehicles needed
    DB::table('plans')->insert([
        'id' => 1,
        'client_id' => 1,
        'origin_id' => 1,
        'destination_id' => 2,
        'dispatch_date' => $today,
        'number_of_vehicles' => 10,
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    // Create a dispatch and trip leg
    DB::table('dispatches')->insert([
        'id' => 1,
        'client_id' => 1,
        'vehicle_id' => 1,
        'driver_id' => 1,
        'service_type' => 'linehaul',
        'dispatch_date' => $today,
        'assigned_call_time' => '08:00:00',
        'is_reversed' => 0,
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    DB::table('trip_legs')->insert([
        'id' => 1,
        'dispatch_id' => 1,
        'trip_sequence' => 1,
        'origin_location_id' => 1,
        'destination_location_id' => 2,
        'status' => 'in transit',
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    $repository = new DashboardRepository;

    // We created 1 plan with 10 vehicles, and 1 dispatch with 1 trip leg.
    $filters = new DashboardFilterData(datePreset: 'today');

    $metrics = $repository->getMetrics($filters);

    expect($metrics->plans)->toBe(10);
    expect($metrics->dispatches)->toBe(1);
    expect($metrics->vendors)->toBe(1);
    expect($metrics->vehicles)->toBe(2);
    expect($metrics->planVsDispatchPercentage)->toBe(10.0); // (1 / 10) * 100
});
