<?php

use Illuminate\Validation\ValidationException;
use Modules\Client\Models\Client;
use Modules\Client\Models\Location;
use Modules\DispatchOperation\Classes\Data\Request\CreateTripLegData;
use Modules\DispatchOperation\Classes\Data\Request\EditTripLegData;
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

    $location = Location::create([
        'client_id' => $client->id,
        'name' => 'Operations Hub',
        'touchpoint' => 'MFM',
        'type' => 'BU',
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
        'client_id' => $client->id,
        'vehicle_id' => $vehicle->id,
        'driver_id' => $driver->id,
        'service_type' => 'oncall',
        'dispatch_date' => '2026-07-24',
        'assigned_call_time' => '08:00:00',
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
        ->and($updatedTripLeg->trip_sequence)->toBe(1)
        ->and($updatedTripLeg->total_parcel)->toBe(11)
        ->and($updatedTripLeg->odometer_start)->toEqual(110.0)
        ->and($updatedTripLeg->odometer_end)->toEqual(130.0)
        ->and($updatedTripLeg->departure_time)->toBe('09:00:00')
        ->and($updatedTripLeg->end_time)->toBe('11:00:00')
        ->and($updatedTripLeg->arrived_time)->toBe('11:15:00');
});

it('allows adding a new trip leg when the previous leg status is delivered', function () {
    $client = Client::create([
        'name' => 'Test Client',
        'email' => 'client@example.com',
        'phone_number' => '1234567890',
        'active' => true,
    ]);

    $vendor = Vendor::create([
        'name' => 'Test Vendor',
        'email' => 'vendor@example.com',
        'phone_number' => '555-0101',
        'is_active' => true,
    ]);

    $driver = Driver::create([
        'vendor_id' => $vendor->id,
        'driver_id_number' => 'DRV-002',
        'full_name' => 'John Driver',
        'birthday' => '1992-01-01',
        'gender' => 'Male',
        'phone_number' => '555-8888',
        'address' => '2 Main St',
        'license_number' => 'LIC-002',
        'status' => 'active',
        'license_expiry_date' => '2030-01-01',
    ]);

    $vehicle = Vehicle::create([
        'vendor_id' => $vendor->id,
        'driver_id' => $driver->id,
        'plate_number' => 'XYZ-999',
        'type' => 'truck',
        'make' => 'Isuzu',
        'engine_number' => 'ENG-002',
        'chassis_number' => 'CH-002',
        'year_model' => 2023,
        'owners_name' => 'John Driver',
        'registered_address' => '2 Main St',
        'is_active' => true,
    ]);

    $dispatch = Dispatch::create([
        'client_id' => $client->id,
        'vehicle_id' => $vehicle->id,
        'driver_id' => $driver->id,
        'service_type' => 'oncall',
        'dispatch_date' => '2026-08-31',
        'assigned_call_time' => '08:00:00',
    ]);

    TripLeg::create([
        'dispatch_id' => $dispatch->id,
        'trip_sequence' => 1,
        'linehaul_trip_no' => 'LH-200',
        'status' => 'delivered',
        'end_time' => null,
    ]);

    $service = app(TripLegService::class);
    $data = CreateTripLegData::from([
        'dispatch_id' => $dispatch->id,
        'linehaul_trip_no' => 'LH-201',
    ]);

    $service->addTripLeg($data);

    expect($dispatch->fresh()->tripLegs)->toHaveCount(2);
});

it('prevents updating trip leg status to delivered if timestamps, parcels, or odometers are missing', function () {
    $client = Client::create([
        'name' => 'Validation Client',
        'email' => 'val@example.com',
        'phone_number' => '123-000-0000',
        'active' => true,
    ]);

    $vendor = Vendor::create([
        'name' => 'Test Vendor',
        'email' => 'vendor@example.com',
        'phone_number' => '555-0101',
        'is_active' => true,
    ]);

    $driver = Driver::create([
        'vendor_id' => $vendor->id,
        'driver_id_number' => 'DRV-101',
        'full_name' => 'Val Driver',
        'birthday' => '1990-01-01',
        'gender' => 'Male',
        'phone_number' => '555-0000',
        'address' => '100 St',
        'license_number' => 'LIC-101',
        'status' => 'active',
        'license_expiry_date' => '2030-01-01',
    ]);

    $vehicle = Vehicle::create([
        'vendor_id' => $vendor->id,
        'driver_id' => $driver->id,
        'plate_number' => 'VAL-101',
        'type' => 'truck',
        'make' => 'Isuzu',
        'engine_number' => 'ENG-101',
        'chassis_number' => 'CH-101',
        'year_model' => 2024,
        'owners_name' => 'Val Driver',
        'registered_address' => '100 St',
        'is_active' => true,
    ]);

    $dispatch = Dispatch::create([
        'client_id' => $client->id,
        'vehicle_id' => $vehicle->id,
        'driver_id' => $driver->id,
        'service_type' => 'oncall',
        'dispatch_date' => '2026-09-01',
        'assigned_call_time' => '08:00:00',
    ]);

    $tripLeg = TripLeg::create([
        'dispatch_id' => $dispatch->id,
        'trip_sequence' => 1,
        'linehaul_trip_no' => 'LH-300',
        'status' => 'pending',
    ]);

    $service = app(TripLegService::class);
    $data = EditTripLegData::from([
        'status' => 'delivered',
    ]);

    expect(fn () => $service->editTripLeg($data, $tripLeg->id))
        ->toThrow(ValidationException::class);
});

it('allows updating trip leg status to delivered when all required fields are present', function () {
    $client = Client::create([
        'name' => 'Complete Client',
        'email' => 'complete@example.com',
        'phone_number' => '123-111-2222',
        'active' => true,
    ]);

    $vendor = Vendor::create([
        'name' => 'Test Vendor 2',
        'email' => 'vendor2@example.com',
        'phone_number' => '555-0102',
        'is_active' => true,
    ]);

    $driver = Driver::create([
        'vendor_id' => $vendor->id,
        'driver_id_number' => 'DRV-102',
        'full_name' => 'Comp Driver',
        'birthday' => '1990-01-01',
        'gender' => 'Male',
        'phone_number' => '555-1111',
        'address' => '200 St',
        'license_number' => 'LIC-102',
        'status' => 'active',
        'license_expiry_date' => '2030-01-01',
    ]);

    $vehicle = Vehicle::create([
        'vendor_id' => $vendor->id,
        'driver_id' => $driver->id,
        'plate_number' => 'CMP-102',
        'type' => 'truck',
        'make' => 'Isuzu',
        'engine_number' => 'ENG-102',
        'chassis_number' => 'CH-102',
        'year_model' => 2024,
        'owners_name' => 'Comp Driver',
        'registered_address' => '200 St',
        'is_active' => true,
    ]);

    $dispatch = Dispatch::create([
        'client_id' => $client->id,
        'vehicle_id' => $vehicle->id,
        'driver_id' => $driver->id,
        'service_type' => 'oncall',
        'dispatch_date' => '2026-09-01',
        'assigned_call_time' => '08:00:00',
    ]);

    $tripLeg = TripLeg::create([
        'dispatch_id' => $dispatch->id,
        'trip_sequence' => 1,
        'linehaul_trip_no' => 'LH-301',
        'status' => 'pending',
    ]);

    $service = app(TripLegService::class);
    $data = EditTripLegData::from([
        'status' => 'delivered',
        'cargo_parcel' => 10,
        'odometer_start' => 50.0,
        'odometer_end' => 100.0,
        'origin_arrived_time' => '08:00:00',
        'origin_start_loading_time' => '08:15:00',
        'origin_end_loading_time' => '08:45:00',
        'departure_time' => '09:00:00',
        'destination_arrived_time' => '10:00:00',
        'destination_start_unloading_time' => '10:15:00',
        'destination_end_unloading_time' => '10:45:00',
        'destination_departed_time' => '11:00:00',
    ]);

    $updated = $service->editTripLeg($data, $tripLeg->id);

    expect($updated->status->value)->toBe('delivered')
        ->and($updated->total_parcel)->toBe(10)
        ->and($updated->odometer_start)->toEqual(50.0)
        ->and($updated->odometer_end)->toEqual(100.0);
});

it('deletes trip leg via trip leg service', function () {
    $client = Client::create([
        'name' => 'Delete Client',
        'email' => 'del@example.com',
        'phone_number' => '123-222-3333',
        'active' => true,
    ]);

    $vendor = Vendor::create([
        'name' => 'Delete Vendor',
        'email' => 'delvendor@example.com',
        'phone_number' => '555-0103',
        'is_active' => true,
    ]);

    $driver = Driver::create([
        'vendor_id' => $vendor->id,
        'driver_id_number' => 'DRV-103',
        'full_name' => 'Del Driver',
        'birthday' => '1990-01-01',
        'gender' => 'Male',
        'phone_number' => '555-2222',
        'address' => '300 St',
        'license_number' => 'LIC-103',
        'status' => 'active',
        'license_expiry_date' => '2030-01-01',
    ]);

    $vehicle = Vehicle::create([
        'vendor_id' => $vendor->id,
        'driver_id' => $driver->id,
        'plate_number' => 'DEL-103',
        'type' => 'truck',
        'make' => 'Isuzu',
        'engine_number' => 'ENG-103',
        'chassis_number' => 'CH-103',
        'year_model' => 2024,
        'owners_name' => 'Del Driver',
        'registered_address' => '300 St',
        'is_active' => true,
    ]);

    $dispatch = Dispatch::create([
        'client_id' => $client->id,
        'vehicle_id' => $vehicle->id,
        'driver_id' => $driver->id,
        'service_type' => 'oncall',
        'dispatch_date' => '2026-09-01',
        'assigned_call_time' => '08:00:00',
    ]);

    $tripLeg1 = TripLeg::create([
        'dispatch_id' => $dispatch->id,
        'trip_sequence' => 1,
        'linehaul_trip_no' => 'LH-400',
        'status' => 'delivered',
    ]);

    $tripLeg2 = TripLeg::create([
        'dispatch_id' => $dispatch->id,
        'trip_sequence' => 2,
        'linehaul_trip_no' => 'LH-401',
        'status' => 'pending',
    ]);

    $service = app(TripLegService::class);

    // Deleting leg when dispatch has 2 legs should succeed
    $result = $service->deleteTripLeg($tripLeg2->id);

    expect($result)->toBeTrue()
        ->and(TripLeg::find($tripLeg2->id))->toBeNull();

    // Deleting the last remaining leg should throw a ValidationException
    expect(fn () => $service->deleteTripLeg($tripLeg1->id))
        ->toThrow(ValidationException::class);
});
