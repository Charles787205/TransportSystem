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

    public function getPaginatedPlans(array $where =[], int $pageSize = 15, array $with=[]): LengthAwarePaginator
    {
        return Plan::with($with)->where($where)
        ->latest()
        ->paginate($pageSize);
    }

    public function getPlan(int $id, array $with = []): Plan
    {
        return Plan::with($with)->findOrFail($id);
    }

}
