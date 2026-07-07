<?php

namespace Modules\Vendor\Repositories;

use Modules\Vendor\Enums\GenderEnum;
use Modules\Vendor\Models\Driver;
class DriverRepository
{
    public function createDriver(
        array $data
    ){
        $driver = Driver::create($data);
        return $driver;
    }
}
