<?php

namespace Modules\Vendor\Services;

use Modules\Vendor\Classes\Data\Request\CreateDriverData;
use Modules\Vendor\Classes\Data\Response\DriverAssignedVehicleData;
use Modules\Vendor\Classes\Data\Response\DriverData;
use Modules\Vendor\Classes\Data\Response\EmergencyContactData;
use Modules\Vendor\Classes\Data\Response\VehicleDriverData;
use Modules\Vendor\Repositories\DriverRepository;

class DriverService
{
    public function __construct(
        private readonly DriverRepository $driverRepo
    ) {}

    public function createDriver(CreateDriverData $data)
    {
        $this->driverRepo->createDriver($data->driverAttributes());
    }

    public function getDriversFromVendor(int $vendorId)
    {
        return $this->driverRepo->getDriverFromVendor($vendorId)
            ->map(fn ($driver) => VehicleDriverData::from($driver));
    }

    public function getDriverDetails(int $driverId): DriverData
    {
        $driver = $this->driverRepo->getDriverWithDetails($driverId);
        $assignedVehicle = $driver->vehicles->first();

        $formatDate = fn ($val) => $val instanceof \DateTimeInterface ? $val->format('Y-m-d') : (is_string($val) ? $val : null);

        return new DriverData(
            id: $driver->id,
            driverIdNumber: $driver->driver_id_number,
            fullName: $driver->full_name,
            birthday: $formatDate($driver->birthday),
            gender: $driver->gender instanceof \BackedEnum ? $driver->gender->value : (string) $driver->gender,
            phoneNumber: $driver->phone_number,
            address: $driver->address,
            licenseNumber: $driver->license_number,
            licenseExpiryDate: $formatDate($driver->license_expiry_date),
            status: $driver->status instanceof \BackedEnum ? $driver->status->value : (string) $driver->status,
            vendorId: $driver->vendor_id,
            emergencyContact: $driver->emergencyContact ? EmergencyContactData::from($driver->emergencyContact) : null,
            vehicle: $assignedVehicle ? DriverAssignedVehicleData::from($assignedVehicle) : null,
        );
    }

    public function updateDriverStatus(int $driverId, string $status): bool
    {
        return $this->driverRepo->updateStatus($driverId, $status);
    }
}
