<?php

namespace Modules\DispatchOperation\Services;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Modules\Core\Classes\Data\PaginatedData;
use Modules\DispatchOperation\Classes\Data\CreateDispatchData;
use Modules\DispatchOperation\Classes\Data\DispatchData;
use Modules\DispatchOperation\Repositories\DispatchRepository;
use Modules\DispatchOperation\Repositories\TripLegRepository;

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
        $dispatch = $this->dispatchRepo->getDispatch($id, with: ['tripLegs.cancellationDetail', 'driver', 'destination', 'businessUnit', 'vehicle']);

        return DispatchData::from($dispatch);
    }

    public function createDispatch(CreateDispatchData $data)
    {
        return DB::transaction(function () use ($data) {
            $currentDispatches = $this->dispatchRepo->getDispatches(where: [
                'vehicle_id' => $data->vehicleId,
                'dispatch_date' => $data->dispatchDate,
            ]);
            Log::info(['current' => $data->toArray()]);
            if ($currentDispatches->isNotEmpty()) {
                throw new \DomainException(
                    'Cannot add a new trip leg while another trip leg is still in progress.'
                );
            }
            $dispatch = $this->dispatchRepo->createDispatch($data->dispatchAttributes());
            $this->dispatchRepo->attachTripLegs($dispatch, ['linehaul_trip_no' => $data->linehaulTripNo]);

            return DispatchData::from($dispatch->fresh());
        });
    }

    public function getPaginatedDispatches(array $filters = [])
    {
        $dispatches = $this->dispatchRepo->getPaginatedDispatches(
            with: ['driver', 'destination', 'businessUnit', 'vehicle', 'tripLegs'],
            filters: $filters
        );

        return PaginatedData::fromPaginator($dispatches, DispatchData::class);
    }

    public function getDispatchMetrics(array $filters = [])
    {
        return $this->dispatchRepo->getDispatchMetrics($filters);
    }
}
