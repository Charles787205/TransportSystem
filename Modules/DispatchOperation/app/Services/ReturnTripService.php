<?php

namespace Modules\DispatchOperation\Services;

use Modules\DispatchOperation\Classes\Data\Request\CreateReturnTripData;
use Modules\DispatchOperation\Models\ReturnTrip;
use Modules\DispatchOperation\Repositories\ReturnTripRepository;

class ReturnTripService
{
    public function __construct(
        private ReturnTripRepository $returnTripRepo
    ) {}

    public function createReturnTrip(CreateReturnTripData $data): ReturnTrip
    {
        return $this->returnTripRepo->createReturnTrip($data->returnTripAttributes());
    }

    public function deleteReturnTrip(int $id): bool
    {
        return $this->returnTripRepo->deleteReturnTrip($id);
    }
}
