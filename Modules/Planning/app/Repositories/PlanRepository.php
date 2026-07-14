<?php

namespace Modules\Planning\Repositories;

use Illuminate\Pagination\LengthAwarePaginator;
use Modules\Planning\Models\Plan;
class PlanRepository
{
    public function handle() {}

    public function createPlan(array $data){
        return Plan::create($data);
    }

    public function getPaginatedPlans(array $where =[], int $pageSize = 15): LengthAwarePaginator
    {
        return Plan::where($where)
        ->latest()
        ->paginate($pageSize);
    }

}
