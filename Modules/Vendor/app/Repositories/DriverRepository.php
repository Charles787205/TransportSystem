<?php

namespace Modules\Vendor\Repositories;

use Modules\Vendor\Enums\GenderEnum;
use Modules\Vendor\Models\Driver;
use Illuminate\Support\Collection;
class DriverRepository
{
    public function createDriver(
        array $data
    ){
        $driver = Driver::create($data);
        return $driver;
    }

    public function getDriverFromVendor(int $vendorId){
        $drivers = Driver::where('vendor_id', $vendorId)
        ->select(['id', 'full_name', 'driver_id_number', 'status'])
        ->get();
        return $drivers;
    }
    public function getDriver(int $driverId){
        return Driver::findOrFail($driverId);
    }

    public function findByIds(Collection|array $ids): Collection
    {
        return Driver::whereIn('id', $ids)
            ->get()
            ->keyBy('id');
    }
}
