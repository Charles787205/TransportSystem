<?php

namespace Modules\DispatchOperation\Services;

use Illuminate\Support\Facades\DB;
use Modules\Client\Repositories\ClientRepository;
use Modules\Client\Repositories\LocationRepository;
use Modules\Core\Classes\Data\Response\PaginatedData;
use Modules\Core\Classes\Data\Response\SelectOptionData;
use Modules\DispatchOperation\Classes\Data\Request\CreateDispatchData;
use Modules\DispatchOperation\Classes\Data\Response\DispatchData;
use Modules\DispatchOperation\Classes\Data\Response\DispatchFormOptionsData;
use Modules\DispatchOperation\Classes\Data\Response\LocationOptionData;
use Modules\DispatchOperation\Classes\Data\Response\ResourceStatusOptionData;
use Modules\DispatchOperation\Repositories\DispatchRepository;
use Modules\DispatchOperation\Repositories\TripLegRepository;
use Modules\Vendor\Repositories\DriverRepository;
use Modules\Vendor\Repositories\VehicleRepository;

class DispatchService
{
    public function __construct(
        private DispatchRepository $dispatchRepo,
        private TripLegRepository $tripLegRepo,
        private VehicleRepository $vehicleRepo,
        private DriverRepository $driverRepo,
        private ClientRepository $clientRepo,
        private LocationRepository $locationRepo
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
            $activeVehicleLeg = $this->tripLegRepo->findLatestTripLegByVehicleId($data->vehicleId);

            if ($activeVehicleLeg && ! in_array($activeVehicleLeg->status?->value, $terminalStatuses, true)) {
                throw new \DomainException(
                    "Vehicle is currently in ongoing dispatch status '{$activeVehicleLeg->status->value}' and cannot be assigned to a new dispatch."
                );
            }

            // Check if driver has an active ongoing dispatch
            $activeDriverLeg = $this->tripLegRepo->findLatestTripLegByDriverId($data->driverId);

            if ($activeDriverLeg && ! in_array($activeDriverLeg->status?->value, $terminalStatuses, true)) {
                throw new \DomainException(
                    "Driver is currently in ongoing dispatch status '{$activeDriverLeg->status->value}' and cannot be assigned to a new dispatch."
                );
            }
            $vehicle = $this->vehicleRepo->find($data->vehicleId);
            $driver = $this->driverRepo->find($data->driverId);

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

    public function getDispatchModel(int $id)
    {
        return $this->dispatchRepo->getDispatch($id);
    }

    public function getDispatchFormOptions(): DispatchFormOptionsData
    {
        $terminalStatuses = ['delivered', 'cancelled', 'foul trip'];

        $vehicles = $this->vehicleRepo->getVehiclesWithLatestDispatch()->map(function ($v) use ($terminalStatuses) {
            $latestTripLeg = $v->dispatches
                ->flatMap->tripLegs
                ->sortByDesc('created_at')
                ->first();

            $tripStatus = $latestTripLeg?->status?->value;
            $hasActiveTrip = $tripStatus && ! in_array($tripStatus, $terminalStatuses, true);

            if ($hasActiveTrip) {
                $isAvailable = false;
                $activeStatus = $tripStatus;
            } elseif (! $v->is_active) {
                $isAvailable = false;
                $activeStatus = 'Inactive';
            } else {
                $isAvailable = true;
                $activeStatus = null;
            }

            return new ResourceStatusOptionData(
                id: $v->id,
                label: $v->label,
                isAvailable: $isAvailable,
                activeStatus: $activeStatus,
                vendorId: $v->vendor_id,
                driverId: $v->driver_id
            );
        });

        $drivers = $this->driverRepo->getDriversWithLatestDispatch()->map(function ($d) use ($terminalStatuses) {
            $latestTripLeg = $d->dispatches
                ->flatMap->tripLegs
                ->sortByDesc('created_at')
                ->first();

            $tripStatus = $latestTripLeg?->status?->value;
            $hasActiveTrip = $tripStatus && ! in_array($tripStatus, $terminalStatuses, true);

            $driverStatus = $d->status?->value ?? (string) $d->status;
            $isDriverActive = ($driverStatus === 'Active');

            if ($hasActiveTrip) {
                $isAvailable = false;
                $activeStatus = $tripStatus;
            } elseif (! $isDriverActive) {
                $isAvailable = false;
                $activeStatus = $driverStatus;
            } else {
                $isAvailable = true;
                $activeStatus = null;
            }

            return new ResourceStatusOptionData(
                id: $d->id,
                label: $d->label,
                isAvailable: $isAvailable,
                activeStatus: $activeStatus,
                vendorId: $d->vendor_id
            );
        });

        $clients = $this->clientRepo->getClientOptions()
            ->map(fn ($c) => new SelectOptionData($c->id, $c->label));

        $locations = $this->locationRepo->getLocationOptions()
            ->map(fn ($l) => new LocationOptionData(
                id: $l->id,
                label: $l->label,
                clientId: $l->client_id,
                touchpoint: $l->touchpoint?->value ?? $l->touchpoint
            ));

        return DispatchFormOptionsData::from([
            'vehicles' => $vehicles,
            'drivers' => $drivers,
            'clients' => $clients,
            'locations' => $locations,
        ]);
    }
}
