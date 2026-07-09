<?php

namespace Modules\Vendor\Services;

use Modules\Vendor\Classes\Data\CreateDriverData;
use Modules\Vendor\Repositories\DriverRepository;
use Modules\Vendor\Classes\Data\VehicleDriverData;
class DriverService
{
    public function __construct(
        private readonly DriverRepository $driverRepo
    )
    {}

    

    public function createDriver(CreateDriverData $data) {
        $this->driverRepo->createDriver($data->driverAttributes());
    }

    public function getDriversFromVendor(int $vendorId){
        return $this->driverRepo->getDriverFromVendor($vendorId)
        ->map(fn ($driver) => VehicleDriverData::from($driver));
    }
    
    
}
