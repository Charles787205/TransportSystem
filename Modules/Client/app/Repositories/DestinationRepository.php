<?php

namespace Modules\Client\Repositories;

use Illuminate\Pagination\LengthAwarePaginator;
use Modules\Client\Models\Destination;
class DestinationRepository
{
    public function createDestination(array $data): Destination
     {
        $destination = Destination::create($data);
        return $destination->refresh();
    }
    public function getPaginatedDestinations(int $pageSize =25, array $where = []): LengthAwarePaginator
    {
        $destinations = Destination::where($where)->latest()->paginate($pageSize);
        return $destinations;
    }
    public function getDestinations(array $where=[]){
        return Destination::where($where)->get();
    }
}
