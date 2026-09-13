<?php

use Modules\DispatchOperation\Classes\Data\Request\CreateDispatchData;
use Modules\DispatchOperation\Enums\ServiceType;
use Tests\TestCase;

uses(TestCase::class);

test('CreateDispatchData maps snake_case input to camelCase properties', function () {
    $data = CreateDispatchData::from([
        'client_id' => 5,
        'vehicle_id' => 10,
        'driver_id' => 3,
        'service_type' => 'oncall',
        'dispatch_date' => '2025-01-15',
        'assigned_call_time' => '08:00:00',
    ]);

    expect($data->clientId)->toBe(5);
    expect($data->vehicleId)->toBe(10);
    expect($data->driverId)->toBe(3);
    expect($data->serviceType)->toBe(ServiceType::ONCALL);
    expect($data->dispatchDate)->toBe('2025-01-15');
    expect($data->assignedCallTime)->toBe('08:00:00');
});

test('CreateDispatchData optional fields default to null', function () {
    $data = CreateDispatchData::from([
        'client_id' => 1,
        'vehicle_id' => 1,
        'driver_id' => 1,
        'service_type' => 'oncall',
        'dispatch_date' => '2025-01-15',
        'assigned_call_time' => '08:00:00',
    ]);

    expect($data->touchpoint)->toBeNull();
    expect($data->linehaulTripNo)->toBeNull();
    expect($data->originLocationId)->toBeNull();
    expect($data->destinationLocationId)->toBeNull();
});

test('CreateDispatchData dispatchAttributes returns correct snake_case array', function () {
    $data = CreateDispatchData::from([
        'client_id' => 5,
        'vehicle_id' => 10,
        'driver_id' => 3,
        'service_type' => 'oncall',
        'dispatch_date' => '2025-01-15',
        'assigned_call_time' => '08:00:00',
    ]);

    $attrs = $data->dispatchAttributes();

    expect($attrs)->toMatchArray([
        'client_id' => 5,
        'vehicle_id' => 10,
        'driver_id' => 3,
        'service_type' => ServiceType::ONCALL,
        'dispatch_date' => '2025-01-15',
        'assigned_call_time' => '08:00:00',
    ]);
});

test('CreateDispatchData initialTripLegAttributes maps location ids and sequence', function () {
    $data = CreateDispatchData::from([
        'client_id' => 1,
        'vehicle_id' => 1,
        'driver_id' => 1,
        'service_type' => 'oncall',
        'dispatch_date' => '2025-01-15',
        'assigned_call_time' => '08:00:00',
        'origin_location_id' => 7,
        'destination_location_id' => 9,
        'linehaul_trip_no' => 'LH-001',
    ]);

    $attrs = $data->initialTripLegAttributes();

    expect($attrs)->toMatchArray([
        'origin_location_id' => 7,
        'destination_location_id' => 9,
        'linehaul_trip_no' => 'LH-001',
        'trip_sequence' => 1,
    ]);
});
