<?php

namespace Modules\DispatchOperation\Repositories;

use Modules\DispatchOperation\Models\ReturnTrip;

class ReturnTripRepository
{
    public function createReturnTrip(array $attributes): ReturnTrip
    {
        return ReturnTrip::create($attributes);
    }

    public function deleteReturnTrip(int $id): bool
    {
        $returnTrip = ReturnTrip::findOrFail($id);

        return (bool) $returnTrip->delete();
    }
}
