<?php

namespace Modules\Client\Repositories;

use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;
use Modules\Client\Models\Location;

class LocationRepository
{
    public function createLocation(array $data): Location
    {
        return Location::create($data)->refresh();
    }

    public function getPaginatedLocations(int $clientId, int $pageSize = 10, int $page = 1): LengthAwarePaginator
    {
        return Location::where('client_id', $clientId)
            ->latest()
            ->paginate($pageSize, ['*'], 'page', $page);
    }

    public function getLocations(array $where = []): Collection
    {
        return Location::where($where)->get();
    }

    public function getLocationOptions(): Collection
    {
        return Location::query()->get(['id', 'name as label', 'client_id', 'touchpoint']);
    }
}
