<?php

namespace Modules\DispatchOperation\Services;

use Modules\DispatchOperation\Classes\Data\Request\CreateTripRemarkData;
use Modules\DispatchOperation\Models\TripRemark;
use Modules\DispatchOperation\Repositories\TripRemarkRepository;

class TripRemarkService
{
    public function __construct(
        private TripRemarkRepository $tripRemarkRepo
    ) {}

    public function createRemark(CreateTripRemarkData $request, int $userId): TripRemark
    {
        return $this->tripRemarkRepo->createRemark([
            'trip_leg_id' => $request->tripLegId,
            'remark' => $request->remark,
            'location_id' => $request->locationId,
            'user_id' => $userId,
        ]);
    }
}
