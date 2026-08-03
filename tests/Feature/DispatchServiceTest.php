<?php

use Modules\Client\Models\BusinessUnit;
use Modules\Client\Models\Client;
use Modules\Client\Models\Destination;
use Modules\DispatchOperation\Classes\Data\EditTripLegData;
use Modules\DispatchOperation\Models\Dispatch;
use Modules\DispatchOperation\Models\TripLeg;
use Modules\DispatchOperation\Services\TripLegService;
use Modules\Vendor\Models\Driver;
use Modules\Vendor\Models\Vehicle;
use Modules\Vendor\Models\Vendor;

it('updates an existing trip leg through dispatch service', function () {
    $client = Client::create([
        'name' => 'Acme Transport',
        'email' => 'acme@example.com',
        'phone_number' => '123-456-7890',
        'touchpoint' => 'HQ',
        'active' => true,
    ]);

    $businessUnit = BusinessUnit::create([
        'client_id' => $client->id,
        'name' => 'Operations',
        'touchpoint' => 'North Hub',
        'active' => true,
    ]);

    $destination = Destination::create([
        'client_id' => $client->id,
        'name' => 'Phoenix Depot',
    ]);

    $vendor = Vendor::create([
        'name' => 'Fleet Vendor',
        'email' => 'fleet@example.com',
        'phone_number' => '555-0101',
        'is_active' => true,
    ]);

    $driver = Driver::create([
        'vendor_id' => $vendor->id,
        'driver_id_number' => 'DRV-001',
        'full_name' => 'Jane Driver',
        'birthday' => '1990-01-01',
        'gender' => 'Female',
        'phone_number' => '555-9999',
        'address' => '1 Main St',
        'license_number' => 'LIC-001',
        'status' => 'active',
        'license_expiry_date' => '2030-01-01',
    ]);

    $vehicle = Vehicle::create([
        'vendor_id' => $vendor->id,
        'driver_id' => $driver->id,
        'plate_number' => 'ABC-123',
        'type' => 'truck',
        'make' => 'Volvo',
        'engine_number' => 'ENG-001',
        'chassis_number' => 'CH-001',
        'year_model' => 2024,
        'owners_name' => 'Jane Driver',
        'registered_address' => '1 Main St',
        'is_active' => true,
    ]);

    $dispatch = Dispatch::create([
        'vehicle_id' => $vehicle->id,
        'driver_id' => $driver->id,
        'business_unit_id' => $businessUnit->id,
        'destination_id' => $destination->id,
        'service_type' => 'oncall',
        'dispatch_date' => '2026-07-24',
        'assigned_call_time' => '08:00:00',
        'linehaul_trip_no' => 'LH-100',
        'odometer_start' => 100.0,
        'odometer_end' => 250.0,
    ]);

    $tripLeg = TripLeg::create([
        'dispatch_id' => $dispatch->id,
        'trip_sequence' => 1,
        'total_parcel' => 5,
        'odometer_start' => 100.0,
        'odometer_end' => 120.0,
        'departure_time' => '08:30:00',
        'end_time' => '10:00:00',
        'arrived_time' => '10:30:00',
        'linehaul_trip_no' => 'LH-100',
        'status' => 'pending',
    ]);

    $service = app(TripLegService::class);
    $data = EditTripLegData::from([
        'trip_sequence' => 2,
        'total_parcel' => 11,
        'odometer_start' => 110.0,
        'odometer_end' => 130.0,
        'departure_time' => '09:00:00',
        'end_time' => '11:00:00',
        'arrived_time' => '11:15:00',
    ]);

    $updatedTripLeg = $service->editTripLeg($data, $tripLeg->id);

    expect($updatedTripLeg)->toBeInstanceOf(TripLeg::class)
        ->and($updatedTripLeg->trip_sequence)->toBe(2)
        ->and($updatedTripLeg->total_parcel)->toBe(11)
        ->and($updatedTripLeg->odometer_start)->toBe(110.0)
        ->and($updatedTripLeg->odometer_end)->toBe(130.0)
        ->and($updatedTripLeg->departure_time)->toBe('09:00:00')
        ->and($updatedTripLeg->end_time)->toBe('11:00:00')
        ->and($updatedTripLeg->arrived_time)->toBe('11:15:00');
});
