<?php

namespace Modules\Vendor\Database\Seeders;

use Illuminate\Database\Seeder;
use Modules\Vendor\Enums\GenderEnum;
use Modules\Vendor\Enums\VehicleType;
use Modules\Vendor\Models\Driver;
use Modules\Vendor\Models\EmergencyContact;
use Modules\Vendor\Models\Helper;
use Modules\Vendor\Models\Insurance;
use Modules\Vendor\Models\Registration;
use Modules\Vendor\Models\Vehicle;
use Modules\Vendor\Models\Vendor;

class VendorDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Seed Helpers
        Helper::create([
            'full_name' => 'John Helper',
            'phone_number' => '+1-555-0301',
            'is_active' => true,
        ]);
        Helper::create([
            'full_name' => 'Bob Assistant',
            'phone_number' => '+1-555-0302',
            'is_active' => true,
        ]);

        // Seed Vendor 1
        $vendor1 = Vendor::create([
            'name' => 'Swift Fleet Services',
            'email' => 'contact@swiftfleet.com',
            'phone_number' => '+1-555-0401',
            'is_active' => true,
        ]);

        $driver1 = Driver::create([
            'vendor_id' => $vendor1->id,
            'driver_id_number' => 'DRV-10001',
            'full_name' => 'Jane Smith',
            'birthday' => '1985-05-15',
            'gender' => GenderEnum::Female,
            'phone_number' => '+1-555-0402',
            'address' => '123 Main St, Springfield',
            'license_number' => 'LIC-10001',
            'status' => 'active',
            'license_expiry_date' => '2030-05-15',
        ]);

        EmergencyContact::create([
            'driver_id' => $driver1->id,
            'full_name' => 'Robert Smith',
            'phone_number' => '+1-555-0403',
        ]);

        $vehicle1 = Vehicle::create([
            'vendor_id' => $vendor1->id,
            'driver_id' => $driver1->id,
            'plate_number' => 'XYZ-9876',
            'type' => VehicleType::FOUR_WHEELS,
            'make' => 'Toyota Hilux',
            'engine_number' => 'ENG-10001',
            'chassis_number' => 'CHS-10001',
            'year_model' => 2022,
            'owners_name' => 'Swift Fleet Services',
            'registered_address' => '123 Main St, Springfield',
            'is_active' => true,
        ]);

        Registration::create([
            'vehicle_id' => $vehicle1->id,
            'cr_number' => 'CR-10001',
            'cr_date' => '2022-01-15',
            'or_number' => 'OR-10001',
            'or_date' => '2022-01-15',
            'ltfrb_date' => '2022-01-15',
            'case_number' => 'CASE-10001',
        ]);

        Insurance::create([
            'vehicle_id' => $vehicle1->id,
            'provider_name' => 'Safety First Insurance',
            'policy_number' => 'POL-10001',
            'start_date' => '2026-01-01',
            'end_date' => '2027-01-01',
        ]);

        // Seed Vendor 2
        $vendor2 = Vendor::create([
            'name' => 'Titan Haulers',
            'email' => 'operations@titanhaulers.com',
            'phone_number' => '+1-555-0501',
            'is_active' => true,
        ]);

        $driver2 = Driver::create([
            'vendor_id' => $vendor2->id,
            'driver_id_number' => 'DRV-10002',
            'full_name' => 'Mark Miller',
            'birthday' => '1978-10-20',
            'gender' => GenderEnum::Male,
            'phone_number' => '+1-555-0502',
            'address' => '456 Oak Rd, Metroville',
            'license_number' => 'LIC-10002',
            'status' => 'active',
            'license_expiry_date' => '2028-10-20',
        ]);

        EmergencyContact::create([
            'driver_id' => $driver2->id,
            'full_name' => 'Sarah Miller',
            'phone_number' => '+1-555-0503',
        ]);

        $vehicle2 = Vehicle::create([
            'vendor_id' => $vendor2->id,
            'driver_id' => $driver2->id,
            'plate_number' => 'ABC-1234',
            'type' => VehicleType::SIX_WHEELS_FORWARD,
            'make' => 'Isuzu Elf',
            'engine_number' => 'ENG-10002',
            'chassis_number' => 'CHS-10002',
            'year_model' => 2021,
            'owners_name' => 'Titan Haulers',
            'registered_address' => '456 Oak Rd, Metroville',
            'is_active' => true,
        ]);

        Registration::create([
            'vehicle_id' => $vehicle2->id,
            'cr_number' => 'CR-10002',
            'cr_date' => '2021-06-20',
            'or_number' => 'OR-10002',
            'or_date' => '2021-06-20',
            'ltfrb_date' => '2021-06-20',
            'case_number' => 'CASE-10002',
        ]);

        Insurance::create([
            'vehicle_id' => $vehicle2->id,
            'provider_name' => 'Safety First Insurance',
            'policy_number' => 'POL-10002',
            'start_date' => '2026-06-01',
            'end_date' => '2027-06-01',
        ]);
    }
}
