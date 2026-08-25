<?php

namespace Modules\Vendor\Repositories;

use Illuminate\Support\Collection;
use Modules\Vendor\Models\Driver;

class DriverRepository
{
    public function createDriver(
        array $data
    ) {
        $driver = Driver::create($data);

        return $driver;
    }

    public function getDriverFromVendor(int $vendorId)
    {
        $drivers = Driver::where('vendor_id', $vendorId)
            ->select(['id', 'full_name', 'driver_id_number', 'status'])
            ->get();

        return $drivers;
    }

    public function getDriverWithDetails(int $driverId): Driver
    {
        return Driver::with(['emergencyContact', 'vehicles'])->findOrFail($driverId);
    }

    public function updateStatus(int $driverId, string $status): bool
    {
        $driver = Driver::findOrFail($driverId);

        return $driver->update(['status' => $status]);
    }

    public function findByIds(Collection|array $ids): Collection
    {
        return Driver::whereIn('id', $ids)
            ->get()
            ->keyBy('id');
    }
}
