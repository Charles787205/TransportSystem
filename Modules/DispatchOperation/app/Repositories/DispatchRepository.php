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

    public function getPaginatedDispatches(int $pageSize = 20, array $where = [], array $with = [], array $filters = [])
    {
        $query = Dispatch::with($with)->where($where);

        $query = $this->applyFilters($query, $filters);

        return $query->latest()->paginate($pageSize);
    }

    public function getDispatchMetrics(array $filters = [])
    {
        $query = Dispatch::query();
        $query = $this->applyFilters($query, $filters);

        // Fetch dispatches with their latest trip leg to determine status
        $dispatches = $query->with('tripLegs')->get();

        $metrics = [
            'planned' => 0,
            'completed' => 0,
            'dispatched' => 0,
            'remaining' => 0,
        ];

        foreach ($dispatches as $dispatch) {
            $metrics['planned']++;

            $status = $dispatch->currentStatus()?->value ?? 'pending';

            if ($status === 'delivered') {
                $metrics['completed']++;
            } elseif ($status === 'pending' || $status === 'cancelled') {
                $metrics['remaining']++;
            } else {
                $metrics['dispatched']++;
            }
        }

        return $metrics;
    }

    private function applyFilters($query, array $filters)
    {
        if (! empty($filters['search'])) {
            $search = $filters['search'];
            $query->where(function ($q) use ($search) {
                $q->whereHas('vehicle', function ($q2) use ($search) {
                    $q2->where('plate_number', 'like', "%{$search}%");
                })
                    ->orWhereHas('driver', function ($q2) use ($search) {
                        $q2->where('full_name', 'like', "%{$search}%");
                    })
                    ->orWhereHas('destination', function ($q2) use ($search) {
                        $q2->where('name', 'like', "%{$search}%");
                    });
            });
        }

        if (isset($filters['date_filter'])) {
            if ($filters['date_filter'] === 'today') {
                $query->whereDate('dispatch_date', today());
            } elseif ($filters['date_filter'] === 'custom') {
                if (! empty($filters['start_date'])) {
                    $query->whereDate('dispatch_date', '>=', $filters['start_date']);
                }
                if (! empty($filters['end_date'])) {
                    $query->whereDate('dispatch_date', '<=', $filters['end_date']);
                }
            }
        }

        return $query;
    }

    public function attachTripLegs(Dispatch $dispatch, array $tripLegs = [])
    {

        $dispatch->tripLegs()->create($tripLegs);
    }
}
