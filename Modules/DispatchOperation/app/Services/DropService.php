<?php

namespace Modules\DispatchOperation\Services;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Validation\ValidationException;
use Modules\DispatchOperation\Classes\Data\Request\CreateDropData;
use Modules\DispatchOperation\Classes\Data\Request\EditDropData;
use Modules\DispatchOperation\Models\Drop;
use Modules\DispatchOperation\Repositories\DropRepository;
use Modules\DispatchOperation\Repositories\TripLegRepository;

class DropService
{
    public function __construct(
        private DropRepository $dropRepo,
        private TripLegRepository $tripLegRepo
    ) {}

    public function createDrop(CreateDropData $data): Drop
    {
        $tripLegs = $this->tripLegRepo->getTripLegs(['id' => $data->tripLegId]);
        $tripLeg = $tripLegs->first();

        if (! $tripLeg) {
            throw new ModelNotFoundException('Trip leg not found.');
        }

        if ($data->locationId === $tripLeg->origin_location_id || $data->locationId === $tripLeg->destination_location_id) {
            throw ValidationException::withMessages([
                'location_id' => 'Drop location cannot be the trip origin or destination location.',
            ]);
        }

        $nextSequence = $tripLeg->drops()->count() + 1;
        $attributes = $data->dropAttributes();
        $attributes['drop_sequence'] = $nextSequence;

        return $this->dropRepo->createDrop($attributes);
    }

    public function updateDrop(EditDropData $data, int $id): Drop
    {
        $drop = $this->dropRepo->findDropWithTripLeg($id);
        $tripLeg = $drop->tripLeg;

        if ($tripLeg && ($data->locationId === $tripLeg->origin_location_id || $data->locationId === $tripLeg->destination_location_id)) {
            throw ValidationException::withMessages([
                'location_id' => 'Drop location cannot be the trip origin or destination location.',
            ]);
        }

        return $this->dropRepo->updateDrop($id, $data->dropAttributes());
    }

    public function deleteDrop(int $id): bool
    {
        return $this->dropRepo->deleteDrop($id);
    }
}
