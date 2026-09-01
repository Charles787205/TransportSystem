<?php

namespace Modules\DispatchOperation\Repositories;

use Modules\DispatchOperation\Models\TripRemark;

class TripRemarkRepository
{
    public function createRemark(array $attributes): TripRemark
    {
        return TripRemark::create($attributes);
    }
}
