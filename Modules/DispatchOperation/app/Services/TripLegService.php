<?php

namespace Modules\DispatchOperation\Services;

use Illuminate\Validation\ValidationException;
use Modules\DispatchOperation\Classes\Data\Request\CreateTripLegData;
use Modules\DispatchOperation\Classes\Data\Request\EditTripLegData;
use Modules\DispatchOperation\Enums\TripStatus;
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
        $tripLeg = TripLeg::with('cargoes')->findOrFail($tripId);
        $attributes = $data->toModelAttributes();

        $targetStatus = $attributes['status'] ?? $tripLeg->status?->value;

        if ($targetStatus === TripStatus::Delivered->value || $targetStatus === 'delivered') {
            $missingFields = [];

            $parcelQty = $attributes['cargo_parcel'] ?? $attributes['total_parcel'] ?? $tripLeg->cargoes->firstWhere('cargo_type', 'per_parcel')?->quantity ?? $tripLeg->total_parcel;
            if ($parcelQty === null || $parcelQty === '' || (float) $parcelQty <= 0) {
                $missingFields[] = 'parcels count';
            }

            $odometerStart = $attributes['odometer_start'] ?? $tripLeg->odometer_start;
            if ($odometerStart === null || $odometerStart === '') {
                $missingFields[] = 'odometer start';
            }

            $odometerEnd = $attributes['odometer_end'] ?? $tripLeg->odometer_end;
            if ($odometerEnd === null || $odometerEnd === '') {
                $missingFields[] = 'odometer end';
            }

            $timestamps = [
                'origin arrival time' => $attributes['origin_arrived_time'] ?? $tripLeg->origin_arrived_time,
                'origin start loading time' => $attributes['origin_start_loading_time'] ?? $tripLeg->origin_start_loading_time,
                'origin end loading time' => $attributes['origin_end_loading_time'] ?? $tripLeg->origin_end_loading_time,
                'departure time' => $attributes['departure_time'] ?? $tripLeg->departure_time,
                'destination arrival time' => $attributes['destination_arrived_time'] ?? $attributes['arrived_time'] ?? $tripLeg->destination_arrived_time ?? $tripLeg->arrived_time,
                'destination start unloading time' => $attributes['destination_start_unloading_time'] ?? $tripLeg->destination_start_unloading_time,
                'destination end unloading time' => $attributes['destination_end_unloading_time'] ?? $tripLeg->destination_end_unloading_time,
                'destination departure time' => $attributes['destination_departed_time'] ?? $attributes['end_time'] ?? $tripLeg->destination_departed_time ?? $tripLeg->end_time,
            ];

            foreach ($timestamps as $label => $val) {
                if ($val === null || $val === '') {
                    $missingFields[] = $label;
                }
            }

            if (! empty($missingFields)) {
                throw ValidationException::withMessages([
                    'status' => 'Cannot change status to Delivered. Missing required fields: '.implode(', ', $missingFields).'.',
                ]);
            }
        }

        return $this->tripLegRepo->editTripLeg($attributes, $tripId);
    }

    public function addTripLeg(CreateTripLegData $data)
    {
        $dispatch = $this->dispatchRepo->getDispatch($data->dispatchId, with: ['tripLegs']);

        $terminalStatuses = [
            TripStatus::Delivered->value,
            TripStatus::FoulTrip->value,
            TripStatus::Cancelled->value,
        ];

        $hasIncomplete = $dispatch->tripLegs->contains(
            fn ($tripLeg) => ! in_array($tripLeg->status?->value ?? (string) $tripLeg->status, $terminalStatuses, true)
        );

        if ($hasIncomplete) {
            throw new \DomainException(
                'Cannot add a new trip leg while another trip leg is still in progress.'
            );
        }
        $firstLeg = $dispatch->tripLegs->firstWhere('trip_sequence', 1);
        $tripSequence = $dispatch->tripLegs()->count() + 1;

        return $this->dispatchRepo->attachTripLegs($dispatch, [
            'dispatch_id' => $data->dispatchId,
            'linehaul_trip_no' => $data->linehaulTripNo,
            'trip_sequence' => $tripSequence,
            'origin_location_id' => $firstLeg?->origin_location_id,
            'destination_location_id' => $firstLeg?->destination_location_id,
        ]);
    }

    public function deleteTripLeg(int $id): bool
    {
        $tripLeg = TripLeg::findOrFail($id);

        $legCount = TripLeg::where('dispatch_id', $tripLeg->dispatch_id)->count();

        if ($legCount <= 1) {
            throw ValidationException::withMessages([
                'trip_leg' => 'Cannot delete the trip leg. A dispatch must contain at least one trip leg.',
            ]);
        }

        return $this->tripLegRepo->deleteTripLeg($id);
    }
}
