<?php

namespace Modules\Vendor\Repositories;

use Modules\Vendor\Models\Vehicle;
use Spatie\Activitylog\Models\Activity;

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

    public function getVehicleWithInsurancesAndRegistrations(int $id)
    {
        return Vehicle::with(['registrations', 'insurances','driver'])->find($id);
    }

    public function attachDriver(int $vehicleId, int $driverId){
        $vehicle = Vehicle::findOrFail($vehicleId);

        $vehicle->driver()->associate($driverId);
        $vehicle->save();
        return $vehicle;
    }
    public function getDriverHistory(int $vehicleId)
    {
        return Activity::query()
            ->where('subject_type', Vehicle::class)
            ->where('subject_id', $vehicleId)
            ->where('event', 'updated')
            ->latest()
            ->get()
            ->filter(fn ($activity) =>
                data_get($activity->attribute_changes, 'attributes.driver_id') !== null
            )
            ->take(6)
            ->values();
    }
}