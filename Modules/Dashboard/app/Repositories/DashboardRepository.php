<?php

namespace Modules\Dashboard\Repositories;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Modules\Client\Models\Client;
use Modules\DispatchOperation\Models\Dispatch;
use Modules\Planning\Models\Plan;
use Modules\Vendor\Models\Driver;
use Modules\Vendor\Models\Vehicle;
use Modules\Vendor\Models\Vendor;

class DashboardRepository
{
    public function getMetrics(array $filters): array
    {
        return [
            'plans' => Plan::count(),
            'dispatches' => $this->applyFilters(Dispatch::query(), $filters)->count(),
            'vendors' => Vendor::count(),
            'drivers' => Driver::count(),
            'vehicles' => Vehicle::count(),
            'clients' => Client::count(),
        ];
    }

    public function getStatusBreakdown(array $filters): array
    {
        $dispatches = $this->applyFilters(Dispatch::with(['tripLegs']), $filters)->get();

        $statusCounts = [
            'pending' => 0,
            'in transit' => 0,
            'delivered' => 0,
            'cancelled' => 0,
        ];

        foreach ($dispatches as $dispatch) {
            $status = $dispatch->currentStatus()?->value ?? 'pending';

            if (str_contains($status, 'transit') || str_contains($status, 'loading') || str_contains($status, 'unloading') || str_contains($status, 'waiting')) {
                $statusCounts['in transit']++;
            } elseif ($status === 'delivered') {
                $statusCounts['delivered']++;
            } elseif ($status === 'cancelled' || $status === 'foul trip') {
                $statusCounts['cancelled']++;
            } else {
                $statusCounts['pending']++;
            }
        }

        $result = [];
        foreach ($statusCounts as $key => $val) {
            $result[] = ['name' => ucfirst($key), 'value' => $val];
        }

        return $result;
    }

    public function getTopDestinations(array $filters, int $limit = 5): Collection
    {
        $query = DB::table('trip_legs')
            ->join('dispatches', 'trip_legs.dispatch_id', '=', 'dispatches.id')
            ->join('locations', 'trip_legs.destination_location_id', '=', 'locations.id')
            ->select('locations.name as destination', DB::raw('count(trip_legs.id) as count'));

        $this->applyQueryFilters($query, $filters);

        return $query->groupBy('locations.name')
            ->orderByDesc('count')
            ->limit($limit)
            ->get();
    }

    public function getDispatchesByClient(array $filters): Collection
    {
        $query = DB::table('dispatches')
            ->join('clients', 'dispatches.client_id', '=', 'clients.id')
            ->select('clients.name as name', DB::raw('count(dispatches.id) as value'));

        $this->applyQueryFilters($query, $filters);

        return $query->groupBy('clients.name')
            ->orderByDesc('value')
            ->get();
    }

    public function getRecentDispatches(array $filters, int $limit = 5): Collection
    {
        $query = Dispatch::with(['vehicle', 'driver', 'client', 'tripLegs.originLocation', 'tripLegs.destinationLocation']);
        $this->applyFilters($query, $filters);

        return $query->latest()
            ->take($limit)
            ->get()
            ->map(function ($d) {
                $firstLeg = $d->tripLegs->firstWhere('trip_sequence', 1) ?? $d->tripLegs->first();

                return [
                    'id' => $d->id,
                    'dispatch_date' => $d->dispatch_date,
                    'vehicle' => $d->vehicle?->plate_number ?? 'N/A',
                    'driver' => $d->driver?->full_name ?? 'N/A',
                    'client' => $d->client?->name ?? 'N/A',
                    'origin' => $firstLeg?->originLocation?->name ?? '—',
                    'destination' => $firstLeg?->destinationLocation?->name ?? '—',
                    'status' => $d->currentStatus()?->value ?? 'pending',
                ];
            });
    }

    protected function applyFilters($query, array $filters)
    {
        if (! empty($filters['date_from'])) {
            $query->whereDate('dispatch_date', '>=', $filters['date_from']);
        }
        if (! empty($filters['date_to'])) {
            $query->whereDate('dispatch_date', '<=', $filters['date_to']);
        }
        if (! empty($filters['client_id'])) {
            $query->where('client_id', $filters['client_id']);
        }
        if (! empty($filters['origin_location_id']) || ! empty($filters['destination_location_id'])) {
            $query->whereHas('tripLegs', function ($q) use ($filters) {
                if (! empty($filters['origin_location_id'])) {
                    $q->where('origin_location_id', $filters['origin_location_id']);
                }
                if (! empty($filters['destination_location_id'])) {
                    $q->where('destination_location_id', $filters['destination_location_id']);
                }
            });
        }

        return $query;
    }

    protected function applyQueryFilters($query, array $filters)
    {
        if (! empty($filters['date_from'])) {
            $query->whereDate('dispatches.dispatch_date', '>=', $filters['date_from']);
        }
        if (! empty($filters['date_to'])) {
            $query->whereDate('dispatches.dispatch_date', '<=', $filters['date_to']);
        }
        if (! empty($filters['client_id'])) {
            $query->where('dispatches.client_id', $filters['client_id']);
        }
        if (! empty($filters['origin_location_id'])) {
            $query->whereExists(function ($q) use ($filters) {
                $q->select(DB::raw(1))
                    ->from('trip_legs as tl')
                    ->whereColumn('tl.dispatch_id', 'dispatches.id')
                    ->where('tl.origin_location_id', $filters['origin_location_id']);
            });
        }
        if (! empty($filters['destination_location_id'])) {
            $query->whereExists(function ($q) use ($filters) {
                $q->select(DB::raw(1))
                    ->from('trip_legs as tl')
                    ->whereColumn('tl.dispatch_id', 'dispatches.id')
                    ->where('tl.destination_location_id', $filters['destination_location_id']);
            });
        }
    }
}
