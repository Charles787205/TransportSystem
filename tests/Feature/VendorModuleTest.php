<?php

use Illuminate\Foundation\Testing\RefreshDatabase;
use Modules\User\Models\Permission;
use Modules\User\Models\Role;
use Modules\User\Models\User;
use Modules\Vendor\Classes\Data\Request\CreateDriverData;
use Modules\Vendor\Classes\Data\Request\CreateVendorData;
use Modules\Vendor\Classes\Data\Response\VendorData;
use Modules\Vendor\Models\Driver;
use Modules\Vendor\Services\DriverService;
use Modules\Vendor\Services\VendorService;

uses(RefreshDatabase::class);

function createVendorAdminUser(): User
{
    $role = Role::create(['name' => 'Admin', 'slug' => 'admin', 'description' => 'Admin Role']);
    $perm = Permission::create(['name' => 'Vendors', 'slug' => 'vendors']);
    $role->permissions()->attach($perm->id, [
        'view' => true,
        'create' => true,
        'edit' => true,
        'delete' => true,
    ]);

    return User::factory()->create(['role_id' => $role->id]);
}

it('creates vendor and driver via VendorService and DriverService', function () {
    $vendorService = app(VendorService::class);
    $driverService = app(DriverService::class);

    $vendorData = CreateVendorData::from([
        'name' => 'Express Logistics',
        'email' => 'express@vendor.com',
        'phone_number' => '09123456789',
        'is_active' => true,
    ]);

    $vendor = $vendorService->createVendor($vendorData);

    expect($vendor)->toBeInstanceOf(VendorData::class)
        ->and($vendor->name)->toBe('Express Logistics');

    $driverData = CreateDriverData::from([
        'vendor_id' => $vendor->id,
        'driver_id_number' => 'DRV-101',
        'full_name' => 'John Doe',
        'gender' => 'Male',
        'birthday' => '1995-05-15',
        'phone_number' => '09123456789',
        'address' => '456 Express Rd',
        'license_expiry' => '2030-05-15',
        'license_number' => 'LIC-101',
        'emergency_contact_full_name' => 'Jane Doe',
        'emergency_contact_phone_number' => '09987654321',
    ]);

    $driverService->createDriver($driverData);

    $this->assertDatabaseHas('drivers', [
        'vendor_id' => $vendor->id,
        'driver_id_number' => 'DRV-101',
        'full_name' => 'John Doe',
    ]);
});

it('allows authorized users to view vendor index via HTTP', function () {
    $user = createVendorAdminUser();

    $response = $this->actingAs($user)->get(route('vendor.index'));
    $response->assertStatus(200);
});

it('allows viewing driver detail page and updating driver status', function () {
    $user = createVendorAdminUser();
    $vendorService = app(VendorService::class);
    $driverService = app(DriverService::class);

    $vendor = $vendorService->createVendor(CreateVendorData::from([
        'name' => 'Logistics Express',
        'email' => 'logistics@vendor.com',
        'phone_number' => '09123456789',
        'is_active' => true,
    ]));

    $driverData = CreateDriverData::from([
        'vendor_id' => $vendor->id,
        'driver_id_number' => 'DRV-500',
        'full_name' => 'Master Driver',
        'gender' => 'Male',
        'birthday' => '1990-01-01',
        'phone_number' => '09123456789',
        'address' => '123 Main St',
        'license_expiry' => '2030-01-01',
        'license_number' => 'LIC-500',
        'emergency_contact_full_name' => 'Emergency Contact',
        'emergency_contact_phone_number' => '09987654321',
    ]);

    $driverService->createDriver($driverData);
    $driverModel = Driver::where('full_name', 'Master Driver')->firstOrFail();

    $showResponse = $this->actingAs($user)->get(route('vendor.driver.show', ['vendor' => $vendor->id, 'driver' => $driverModel->id]));
    $showResponse->assertStatus(200);

    $updateResponse = $this->actingAs($user)->patch(route('vendor.driver.update', ['vendor' => $vendor->id, 'driver' => $driverModel->id]), [
        'status' => 'Temporary Stop Hiring',
    ]);
    $updateResponse->assertSessionHasNoErrors();

    $this->assertDatabaseHas('drivers', [
        'id' => $driverModel->id,
        'status' => 'Temporary Stop Hiring',
    ]);
});

it('creates driver with null address, license number, and license expiry', function () {
    $vendorService = app(VendorService::class);
    $driverService = app(DriverService::class);

    $vendor = $vendorService->createVendor(CreateVendorData::from([
        'name' => 'Minimal Logistics',
        'email' => 'minimal@vendor.com',
        'phone_number' => '09123456789',
        'is_active' => true,
    ]));

    $driverData = CreateDriverData::from([
        'vendor_id' => $vendor->id,
        'driver_id_number' => 'DRV-999',
        'full_name' => 'Nullable Field Driver',
        'gender' => 'Female',
        'phone_number' => '09123456789',
        'address' => null,
        'license_expiry' => null,
        'license_number' => null,
        'emergency_contact_full_name' => 'Emergency Contact',
        'emergency_contact_phone_number' => '09987654321',
    ]);

    $driverService->createDriver($driverData);

    $this->assertDatabaseHas('drivers', [
        'vendor_id' => $vendor->id,
        'driver_id_number' => 'DRV-999',
        'full_name' => 'Nullable Field Driver',
        'address' => null,
        'license_number' => null,
        'license_expiry_date' => null,
    ]);
});
