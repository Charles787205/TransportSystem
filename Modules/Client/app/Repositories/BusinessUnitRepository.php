<?php

namespace Modules\Client\Repositories;
use Modules\Client\Models\BusinessUnit;
use Illuminate\Support\Collection;
use Illuminate\Pagination\LengthAwarePaginator;
class BusinessUnitRepository
{
    public function handle() {}


    public function createBusinessunit(array $data){
        $bu = BusinessUnit::create($data);
        return $bu->refresh();
    }

    public function getBusinessUnits(int $clientId): Collection
    {
        $bu = BusinessUnit::where('client_id', $clientId)->get();
        return $bu;
    }
    public function getPaginatedBusinessUnits(int $clientId, int $pageSize, int $page = 1): LengthAwarePaginator
    {
        return BusinessUnit::where('client_id', $clientId)
            ->paginate($pageSize, ['*'], 'page', $page);
    }
}
