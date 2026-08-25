<?php

namespace Modules\Planning\Repositories;

use Illuminate\Pagination\LengthAwarePaginator;
use Modules\Planning\Models\Plan;

class PlanRepository
{
    public function createPlan(array $data): Plan
    {
        return Plan::create($data);
    }

    public function getPaginatedPlans(array $where = [], int $pageSize = 15, array $with = [], ?string $search = null): LengthAwarePaginator
    {
        $query = Plan::with($with)->where($where);

        if (! empty($search)) {
            $query->where(function ($q) use ($search) {
                $q->whereHas('client', function ($q2) use ($search) {
                    $q2->where('name', 'like', "%{$search}%");
                })
                    ->orWhereHas('origin', function ($q2) use ($search) {
                        $q2->where('name', 'like', "%{$search}%");
                    })
                    ->orWhereHas('destination', function ($q2) use ($search) {
                        $q2->where('name', 'like', "%{$search}%");
                    });
            });
        }

        return $query->latest()->paginate($pageSize);
    }

    public function getPlan(int $id, array $with = []): Plan
    {
        return Plan::with($with)->findOrFail($id);
    }
}
