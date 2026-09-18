<?php

namespace Modules\Planning\Repositories;

use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\DB;
use Modules\Planning\Models\Plan;

class PlanRepository
{
    public function createPlan(array $data): Plan
    {
        return Plan::create($data);
    }

    public function getPaginatedPlans(array $where = [], int $pageSize = 15, array $with = [], ?string $search = null): LengthAwarePaginator
    {
        $status = null;
        if (array_key_exists('status', $where)) {
            $status = $where['status'];
            unset($where['status']);
        }

        $query = Plan::with($with)->where($where);

        if ($status) {
            $query->whereExists(function ($q) use ($status) {
                $q->select(DB::raw(1))
                    ->from('dispatches')
                    ->whereColumn('dispatches.client_id', 'plans.client_id')
                    ->whereColumn('dispatches.dispatch_date', 'plans.dispatch_date')
                    ->whereExists(function ($q2) use ($status) {
                        $q2->select(DB::raw(1))
                            ->from('trip_legs')
                            ->whereColumn('trip_legs.dispatch_id', 'dispatches.id')
                            ->whereColumn('trip_legs.origin_location_id', 'plans.origin_id')
                            ->whereColumn('trip_legs.destination_location_id', 'plans.destination_id')
                            ->where('trip_legs.status', $status)
                            ->whereIn('trip_legs.id', function ($sub) {
                                $sub->selectRaw('MAX(id)')
                                    ->from('trip_legs as tl')
                                    ->whereColumn('tl.dispatch_id', 'dispatches.id');
                            });
                    });
            });
        }

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

        return $query->latest()->paginate($pageSize)->withQueryString();
    }

    public function getPlan(int $id, array $with = []): Plan
    {
        return Plan::with($with)->findOrFail($id);
    }
}
