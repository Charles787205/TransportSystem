<?php

namespace Modules\DispatchOperation\Services;

use Illuminate\Support\Facades\DB;
use Modules\Core\Classes\Data\Response\PaginatedData;
use Modules\DispatchOperation\Classes\Data\Request\CreateDispatchData;
use Modules\DispatchOperation\Classes\Data\Response\DispatchData;
use Modules\DispatchOperation\Models\TripLeg;
use Modules\DispatchOperation\Repositories\DispatchRepository;
use Modules\DispatchOperation\Repositories\TripLegRepository;
use Modules\Vendor\Models\Driver;
use Modules\Vendor\Models\Vehicle;

class DispatchService
{
    public function __construct(
        private DispatchRepository $dispatchRepo,
        private TripLegRepository $tripLegRepo
    ) {}

    public function getDispatch(int $id)
    {
        $dispatch = $this->dispatchRepo->getDispatch($id);

        return DispatchData::from($dispatch);
    }

    public function getDispatchDetails(int $id)
    {
        $dispatch = $this->dispatchRepo->getDispatch($id, with: [
            'tripLegs.cancellationDetail',
            'tripLegs.originLocation',
            'tripLegs.destinationLocation',
            'tripLegs.drops.location',
            'tripLegs.cargoes',
            'tripLegs.remarks.user',
            'tripLegs.remarks.location',
            'returnTrips.originLocation',
            'returnTrips.destinationLocation',
            'driver',
            'client',
            'vehicle',
        ]);

        return DispatchData::from($dispatch);
    }

    public function createDispatch(CreateDispatchData $data)
    {
        return DB::transaction(function () use ($data) {
            $terminalStatuses = ['delivered', 'cancelled', 'foul trip'];

            // Check if vehicle has an active ongoing dispatch
            $activeVehicleLeg = TripLeg::whereHas('dispatch', function ($q) use ($data) {
                $q->where('vehicle_id', $data->vehicleId);
            })->latest()->first();

            if ($activeVehicleLeg && ! in_array($activeVehicleLeg->status?->value, $terminalStatuses, true)) {
                throw new \DomainException(
                    "Vehicle is currently in ongoing dispatch status '{$activeVehicleLeg->status->value}' and cannot be assigned to a new dispatch."
                );
            }

            // Check if driver has an active ongoing dispatch
            $activeDriverLeg = TripLeg::whereHas('dispatch', function ($q) use ($data) {
                $q->where('driver_id', $data->driverId);
            })->latest()->first();

            if ($activeDriverLeg && ! in_array($activeDriverLeg->status?->value, $terminalStatuses, true)) {
                throw new \DomainException(
                    "Driver is currently in ongoing dispatch status '{$activeDriverLeg->status->value}' and cannot be assigned to a new dispatch."
                );
            }
            $vehicle = Vehicle::find($data->vehicleId);
            $driver = Driver::find($data->driverId);

            if ($vehicle && $driver && $vehicle->vendor_id !== $driver->vendor_id) {
                throw new \DomainException(
                    'The selected vehicle and driver must belong to the same vendor.'
                );
            }

            $dispatch = $this->dispatchRepo->createDispatch($data->dispatchAttributes());
            $this->dispatchRepo->attachTripLegs($dispatch, $data->initialTripLegAttributes());

            return DispatchData::from($dispatch->fresh());
        });
    }

    public function getPaginatedDispatches(array $filters = [])
    {
        $dispatches = $this->dispatchRepo->getPaginatedDispatches(
            with: ['driver', 'client', 'vehicle', 'tripLegs.originLocation', 'tripLegs.destinationLocation'],
            filters: $filters
        );

        return PaginatedData::fromPaginator($dispatches, DispatchData::class);
    }

    public function getDispatchMetrics(array $filters = [])
    {
        return $this->dispatchRepo->getDispatchMetrics($filters);
    }
}
