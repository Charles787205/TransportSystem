<?php

namespace Modules\DispatchOperation\Repositories;

use Modules\DispatchOperation\Models\Dispatch;
use Modules\DispatchOperation\Models\TripLeg;
use Modules\Planning\Models\Plan;

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
        return Dispatch::with($with)->where($where)->orderBy('dispatch_date', 'desc')->get();
    }

    public function getPaginatedDispatches(int $pageSize = 20, array $where = [], array $with = [], array $filters = [])
    {
        $query = Dispatch::with($with)->where($where);

        $query = $this->applyFilters($query, $filters);

        $sortDirection = in_array(strtolower($filters['sort_direction'] ?? 'desc'), ['asc', 'desc'], true)
            ? strtolower($filters['sort_direction'] ?? 'desc')
            : 'desc';

        return $query->orderBy('dispatch_date', $sortDirection)
            ->orderBy('assigned_call_time', $sortDirection)
            ->latest('id')
            ->paginate($pageSize)
            ->withQueryString();
    }

    public function getDispatchMetrics(array $filters = [])
    {
        $planQuery = Plan::query();
        if (isset($filters['date_filter'])) {
            if ($filters['date_filter'] === 'today') {
                $planQuery->whereDate('dispatch_date', today());
            } elseif ($filters['date_filter'] === 'month') {
                $planQuery->whereBetween('dispatch_date', [today()->subMonth(), today()]);
            } elseif ($filters['date_filter'] === 'custom') {
                if (! empty($filters['start_date'])) {
                    $planQuery->whereDate('dispatch_date', '>=', $filters['start_date']);
                }
                if (! empty($filters['end_date'])) {
                    $planQuery->whereDate('dispatch_date', '<=', $filters['end_date']);
                }
            }
        } else {
            $planQuery->whereBetween('dispatch_date', [today()->subMonth(), today()]);
        }

        $plans = $planQuery->get();
        $planned = $plans->sum('number_of_vehicles');

        $query = Dispatch::query();
        $query = $this->applyFilters($query, $filters);
        $dispatches = $query->with('tripLegs')->get();

        $dispatched = 0;
        $completed = 0;
        $unplanned = 0;

        foreach ($dispatches as $dispatch) {
            foreach ($dispatch->tripLegs as $tripLeg) {
                $status = $tripLeg->status?->value ?? 'pending';
                $dispatched++;

                if ($status === 'delivered') {
                    $completed++;
                }
            }
        }

        return [
            'planned' => (int) $planned,
            'completed' => $completed,
            'dispatched' => $dispatched,
            'unplanned' => $unplanned,
            'remaining' => max(0, $planned - $dispatched),
        ];
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
                    ->orWhereHas('client', function ($q2) use ($search) {
                        $q2->where('name', 'like', "%{$search}%");
                    });
            });
        }

        if (isset($filters['date_filter'])) {
            if ($filters['date_filter'] === 'today') {
                $query->whereDate('dispatch_date', today());
            } elseif ($filters['date_filter'] === 'month') {
                $query->whereBetween('dispatch_date', [today()->subMonth(), today()]);
            } elseif ($filters['date_filter'] === 'custom') {
                if (! empty($filters['start_date'])) {
                    $query->whereDate('dispatch_date', '>=', $filters['start_date']);
                }
                if (! empty($filters['end_date'])) {
                    $query->whereDate('dispatch_date', '<=', $filters['end_date']);
                }
            }
        }

        if (! empty($filters['status'])) {
            $status = $filters['status'];
            $query->whereHas('tripLegs', function ($q) use ($status) {
                $q->where('status', $status)
                    ->whereIn('id', function ($sub) {
                        $sub->selectRaw('MAX(id)')
                            ->from('trip_legs')
                            ->whereColumn('dispatch_id', 'dispatches.id');
                    });
            });
        }

        return $query;
    }

    public function attachTripLegs(Dispatch $dispatch, array $tripLegs = [])
    {
        $dispatch->tripLegs()->create($tripLegs);
    }

    public function getDispatchesForPlanRoute(int $clientId, string $dispatchDate, int $originId, ?int $destinationId = null)
    {
        return Dispatch::where('client_id', $clientId)
            ->whereDate('dispatch_date', $dispatchDate)
            ->whereHas('tripLegs', function ($q) use ($originId, $destinationId) {
                $q->where('origin_location_id', $originId);
                if ($destinationId !== null) {
                    $q->where('destination_location_id', $destinationId);
                }
            })
            ->with(['vehicle', 'driver', 'client', 'tripLegs.originLocation', 'tripLegs.destinationLocation'])
            ->get();
    }
}
