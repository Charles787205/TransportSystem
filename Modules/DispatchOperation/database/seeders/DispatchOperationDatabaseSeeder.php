<?php

namespace Modules\DispatchOperation\Database\Seeders;

use Illuminate\Database\Seeder;
use Modules\Client\Models\BusinessUnit;
use Modules\Client\Models\Destination;
use Modules\DispatchOperation\Enums\ServiceType;
use Modules\DispatchOperation\Enums\TripStatus;
use Modules\DispatchOperation\Models\Dispatch;
use Modules\DispatchOperation\Models\TripLeg;
use Modules\Vendor\Models\Driver;
use Modules\Vendor\Models\Vehicle;

class DispatchOperationDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $vehicle = Vehicle::first();
        $driver = Driver::first();
        $businessUnit = BusinessUnit::first();
        $destination = Destination::first();

        if ($vehicle && $driver && $businessUnit && $destination) {
            $dispatch1 = Dispatch::create([
                'vehicle_id' => $vehicle->id,
                'driver_id' => $driver->id,
                'business_unit_id' => $businessUnit->id,
                'destination_id' => $destination->id,
                'service_type' => ServiceType::ONCALL,
                'dispatch_date' => '2026-08-04',
                'assigned_call_time' => '08:00:00',
                'odometer_start' => 1000.0,
                'odometer_end' => 1200.0,
            ]);

            TripLeg::create([
                'dispatch_id' => $dispatch1->id,
                'trip_sequence' => 1,
                'total_parcel' => 10,
                'status' => TripStatus::Delivered,
                'odometer_start' => 1000.0,
                'odometer_end' => 1100.0,
                'departure_time' => '08:30:00',
                'arrived_time' => '09:30:00',
                'end_time' => '10:00:00',
                'linehaul_trip_no' => 'LH-99001',
            ]);

            TripLeg::create([
                'dispatch_id' => $dispatch1->id,
                'trip_sequence' => 2,
                'total_parcel' => 5,
                'status' => TripStatus::Pending,
                'odometer_start' => 1100.0,
                'odometer_end' => 1200.0,
                'departure_time' => '10:30:00',
                'arrived_time' => '11:30:00',
                'end_time' => '12:00:00',
                'linehaul_trip_no' => 'LH-99002',
            ]);
        }
    }
}
