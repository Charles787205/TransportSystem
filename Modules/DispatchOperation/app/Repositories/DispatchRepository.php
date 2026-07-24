<?php

namespace Modules\DispatchOperation\Repositories;

use Modules\DispatchOperation\Models\Dispatch;
use Modules\DispatchOperation\Models\TripLeg;

class DispatchRepository
{
    public function handle() {}

    public function createDispatch(array $data)
    {
        return Dispatch::create($data)->refresh();
    }

    public function createTripLeg(array $data)
    {
        return TripLeg::create($data)->refresh();
    }

    public function getDispatch(int $id, array $with = [])
    {
        return Dispatch::with($with)->findOrFail($id);
    }

    public function getDispatches(array $where = [], array $with = [])
    {
        return Dispatch::with($with)->where($where)->get();
    }

    public function getPaginatedDispatches(int $pageSize = 20, array $where = [], array $with = [])
    {
        return Dispatch::with($with)->where($where)->latest()->paginate($pageSize);
    }

    public function attachTripLegs(Dispatch $dispatch, array $tripLegs = [])
    {

        $dispatch->tripLegs()->create($tripLegs);
    }
}
