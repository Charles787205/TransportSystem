<?php

namespace Modules\DispatchOperation\Repositories;

use Modules\DispatchOperation\Models\TripLeg;

class TripLegRepository
{
    public function createTripLeg(array $data)
    {
        return TripLeg::create($data)->refresh();

    }

    public function editTripLeg(array $data, int $id): TripLeg
    {
        $tripLeg = TripLeg::findOrFail($id);
        $tripLeg->update($data);

        return $tripLeg->refresh();
    }
}
