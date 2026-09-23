<?php

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Modules\DispatchOperation\Repositories\DispatchRepository;
use Tests\TestCase;

uses(TestCase::class, RefreshDatabase::class);

test('getDispatchMetrics computes correct dispatch statistics', function () {
    $today = now()->format('Y-m-d');

    // Create dependencies
    DB::table('vendors')->insert(['id' => 1, 'name' => 'Test Vendor', 'email' => 'test@vendor.com', 'phone_number' => '12345', 'created_at' => now(), 'updated_at' => now()]);
    DB::table('drivers')->insert(['id' => 1, 'vendor_id' => 1, 'full_name' => 'John Doe', 'gender' => 'Male', 'phone_number' => '12345', 'status' => 'active', 'created_at' => now(), 'updated_at' => now()]);
    DB::table('vehicles')->insert([
        ['id' => 1, 'vendor_id' => 1, 'driver_id' => 1, 'plate_number' => 'ABC-123', 'type' => 'Type1', 'make' => 'Make1', 'engine_number' => 'E1', 'chassis_number' => 'C1', 'year_model' => '2020', 'owners_name' => 'Owner', 'registered_address' => 'Address', 'is_active' => 1, 'created_at' => now(), 'updated_at' => now()],
    ]);

    DB::table('clients')->insert(['id' => 1, 'name' => 'Test Client', 'email' => 'test@client.com', 'phone_number' => '54321', 'active' => 1, 'created_at' => now(), 'updated_at' => now()]);
    DB::table('locations')->insert([
        ['id' => 1, 'client_id' => 1, 'name' => 'Origin', 'type' => 'Plant', 'created_at' => now(), 'updated_at' => now()],
        ['id' => 2, 'client_id' => 1, 'name' => 'Destination', 'type' => 'Warehouse', 'created_at' => now(), 'updated_at' => now()],
    ]);

    // 1 plan with 5 vehicles needed
    DB::table('plans')->insert([
        'id' => 1,
        'client_id' => 1,
        'origin_id' => 1,
        'dispatch_date' => $today,
        'number_of_vehicles' => 5,
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    // 1 dispatch
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

    // 2 trip legs (one delivered, one pending)
    DB::table('trip_legs')->insert([
        [
            'id' => 1,
            'dispatch_id' => 1,
            'trip_sequence' => 1,
            'origin_location_id' => 1,
            'destination_location_id' => 2,
            'status' => 'delivered',
            'created_at' => now(),
            'updated_at' => now(),
        ],
        [
            'id' => 2,
            'dispatch_id' => 1,
            'trip_sequence' => 2,
            'origin_location_id' => 2,
            'destination_location_id' => 1,
            'status' => 'pending',
            'created_at' => now(),
            'updated_at' => now(),
        ],
    ]);

    $repository = new DispatchRepository;

    $filters = ['date_filter' => 'today'];
    $metrics = $repository->getDispatchMetrics($filters);

    expect($metrics['planned'])->toBe(5);
    expect($metrics['dispatched'])->toBe(2); // 2 trip legs
    expect($metrics['completed'])->toBe(1); // 1 delivered trip leg
    expect($metrics['remaining'])->toBe(3); // 5 - 2
});

test('getPaginatedDispatches sorts by dispatch_date descending by default and ascending when specified', function () {
    DB::table('vendors')->insert(['id' => 1, 'name' => 'Test Vendor', 'email' => 'test@vendor.com', 'phone_number' => '12345', 'created_at' => now(), 'updated_at' => now()]);
    DB::table('drivers')->insert(['id' => 1, 'vendor_id' => 1, 'full_name' => 'John Doe', 'gender' => 'Male', 'phone_number' => '12345', 'status' => 'active', 'created_at' => now(), 'updated_at' => now()]);
    DB::table('vehicles')->insert([
        ['id' => 1, 'vendor_id' => 1, 'driver_id' => 1, 'plate_number' => 'ABC-123', 'type' => 'Type1', 'make' => 'Make1', 'engine_number' => 'E1', 'chassis_number' => 'C1', 'year_model' => '2020', 'owners_name' => 'Owner', 'registered_address' => 'Address', 'is_active' => 1, 'created_at' => now(), 'updated_at' => now()],
    ]);
    DB::table('clients')->insert(['id' => 1, 'name' => 'Test Client', 'email' => 'test@client.com', 'phone_number' => '54321', 'active' => 1, 'created_at' => now(), 'updated_at' => now()]);

    // Create 3 dispatches on different dates
    DB::table('dispatches')->insert([
        [
            'id' => 1,
            'client_id' => 1,
            'vehicle_id' => 1,
            'driver_id' => 1,
            'service_type' => 'linehaul',
            'dispatch_date' => '2026-08-01',
            'assigned_call_time' => '08:00:00',
            'is_reversed' => 0,
            'created_at' => now()->subDays(5),
            'updated_at' => now()->subDays(5),
        ],
        [
            'id' => 2,
            'client_id' => 1,
            'vehicle_id' => 1,
            'driver_id' => 1,
            'service_type' => 'linehaul',
            'dispatch_date' => '2026-08-15',
            'assigned_call_time' => '09:00:00',
            'is_reversed' => 0,
            'created_at' => now()->subDays(10), // created earlier, but later dispatch_date
            'updated_at' => now()->subDays(10),
        ],
        [
            'id' => 3,
            'client_id' => 1,
            'vehicle_id' => 1,
            'driver_id' => 1,
            'service_type' => 'linehaul',
            'dispatch_date' => '2026-08-10',
            'assigned_call_time' => '10:00:00',
            'is_reversed' => 0,
            'created_at' => now()->subDays(1),
            'updated_at' => now()->subDays(1),
        ],
    ]);

    $repository = new DispatchRepository;

    // Default sorting (descending by dispatch_date)
    $resultsDesc = $repository->getPaginatedDispatches(filters: ['date_filter' => 'all']);
    $datesDesc = collect($resultsDesc->items())->pluck('dispatch_date')->all();
    expect($datesDesc)->toBe(['2026-08-15', '2026-08-10', '2026-08-01']);

    // Ascending sorting by dispatch_date
    $resultsAsc = $repository->getPaginatedDispatches(filters: ['date_filter' => 'all', 'sort_direction' => 'asc']);
    $datesAsc = collect($resultsAsc->items())->pluck('dispatch_date')->all();
    expect($datesAsc)->toBe(['2026-08-01', '2026-08-10', '2026-08-15']);
});
