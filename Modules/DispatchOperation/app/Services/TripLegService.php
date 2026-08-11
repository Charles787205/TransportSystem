<?php

namespace Modules\DispatchOperation\Services;

use Modules\DispatchOperation\Classes\Data\Request\CreateTripLegData;
use Modules\DispatchOperation\Classes\Data\Request\EditTripLegData;
use Modules\DispatchOperation\Models\TripLeg;
use Modules\DispatchOperation\Repositories\DispatchRepository;
use Modules\DispatchOperation\Repositories\TripLegRepository;

class TripLegService
{
    public function __construct(
        private TripLegRepository $tripLegRepo,
        private DispatchRepository $dispatchRepo
    ) {}

    public function editTripLeg(EditTripLegData $data, int $tripId): TripLeg
    {
        return $this->tripLegRepo->editTripLeg($data->toModelAttributes(), $tripId);
    }

    public function addTripLeg(CreateTripLegData $data)
    {
        $dispatch = $this->dispatchRepo->getDispatch($data->dispatchId, with: ['tripLegs']);

        $hasIncomplete = $dispatch->tripLegs->contains(
            fn ($tripLeg) => $tripLeg->end_time === null
        );

        if ($hasIncomplete) {
            throw new \DomainException(
                'Cannot add a new trip leg while another trip leg is still in progress.'
            );
        }
        $tripSequence = $dispatch->tripLegs()->count() + 1;

        return $this->dispatchRepo->attachTripLegs($dispatch, [
            'dispatch_id' => $data->dispatchId,
            'linehaul_trip_no' => $data->linehaulTripNo,
            'trip_sequence' => $tripSequence,
        ]);
    }
}
