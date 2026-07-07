<?php

namespace Modules\Vendor\Repositories;

use Modules\Vendor\Models\Vehicle;

class VehicleRepository
{
    public function createVehicle( 
        array $attributes
    ): Vehicle
    {
        $vehicle = Vehicle::create($attributes);
        return $vehicle->refresh();
    }

    public function getVehiclesPaginated(?int $vendorId, int $pageSize)
    {
        return Vehicle::query()
            ->when($vendorId, fn ($query) => $query->where('vendor_id', $vendorId))
            ->paginate($pageSize);
    }
}