<?php

namespace Modules\DispatchOperation\Services;

use Modules\DispatchOperation\Repositories\TripLegRepository;
use Modules\DispatchOperation\Classes\Data\EditTripLegData;
use Modules\DispatchOperation\Models\TripLeg;
use Illuminate\Support\Facades\Log;
use Modules\DispatchOperation\Repositories\DispatchRepository;
use Spatie\LaravelData\Mappers\SnakeCaseMapper;
class TripLegService
{
    public function __construct(
        private TripLegRepository $tripLegRepo,
        private DispatchRepository $dispatchRepo
    )
    { }
    public function editTripLeg(EditTripLegData $data, int $tripId): TripLeg
    {
        return $this->tripLegRepo->editTripLeg($data->toModelAttributes(), $tripId);
    }
    public function addTripLeg(int $dispatchId)
    {
        $dispatch = $this->dispatchRepo->getDispatch($dispatchId, with: ['tripLegs']);

        $hasIncomplete = $dispatch->tripLegs->contains(
            fn ($tripLeg) => $tripLeg->end_time === null
        );

        if ($hasIncomplete) {
            throw new \DomainException(
                'Cannot add a new trip leg while another trip leg is still in progress.'
            );
        }
        $tripSequence = $dispatch->tripLegs()->count() + 1;

        return $this->dispatchRepo->attachTripLegs($dispatch, ['dispatch_id' => $dispatchId, 'trip_sequence' => $tripSequence]);
    }
}
