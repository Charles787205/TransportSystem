<?php

namespace Modules\Vendor\Services;

use Modules\Vendor\Classes\Data\CreateDriverData;
use Modules\Vendor\Repositories\DriverRepository;
class DriverService
{
    public function __construct(
        private readonly DriverRepository $driverRepo
    )
    {}

    

    public function createDriver(CreateDriverData $data) {
        $this->driverRepo->createDriver($data->driverAttributes());
    }

    
}
