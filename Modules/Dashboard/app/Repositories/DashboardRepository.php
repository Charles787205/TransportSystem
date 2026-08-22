<?php

namespace Modules\Dashboard\Repositories;

use Illuminate\Support\Facades\DB;
use Modules\Client\Classes\Data\Response\ClientData;
use Modules\Client\Classes\Data\Response\LocationData;
use Modules\Client\Models\Client;
use Modules\Client\Models\Location;
use Modules\Dashboard\Classes\Data\Request\DashboardFilterData;
use Modules\Dashboard\Classes\Data\Response\ClientDispatchItemData;
use Modules\Dashboard\Classes\Data\Response\DashboardMetricsData;
use Modules\Dashboard\Classes\Data\Response\RecentDispatchItemData;
use Modules\Dashboard\Classes\Data\Response\StatusBreakdownItemData;
use Modules\Dashboard\Classes\Data\Response\TopDestinationItemData;
use Modules\DispatchOperation\Models\Dispatch;
use Modules\Planning\Models\Plan;
use Modules\Vendor\Models\Driver;
use Modules\Vendor\Models\Vehicle;
use Modules\Vendor\Models\Vendor;
use Spatie\LaravelData\DataCollection;

class DashboardRepository
{
    public function getMetrics(DashboardFilterData $filters): DashboardMetricsData
    {
        return new DashboardMetricsData(
            plans: Plan::count(),
            dispatches: $this->applyFilters(Dispatch::query(), $filters)->count(),
            vendors: Vendor::count(),
            drivers: Driver::count(),
            vehicles: Vehicle::count(),
            clients: Client::count(),
        );
    }

    /**
     * @return DataCollection<int, StatusBreakdownItemData>
     */
    public function getStatusBreakdown(DashboardFilterData $filters): DataCollection
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

        $items = [];
        foreach ($statusCounts as $key => $val) {
            $items[] = new StatusBreakdownItemData(name: ucfirst($key), value: $val);
        }

        return StatusBreakdownItemData::collect($items, DataCollection::class);
    }

    /**
     * @return DataCollection<int, TopDestinationItemData>
     */
    public function getTopDestinations(DashboardFilterData $filters, int $limit = 5): DataCollection
    {
        $query = DB::table('trip_legs')
            ->join('dispatches', 'trip_legs.dispatch_id', '=', 'dispatches.id')
            ->join('locations', 'trip_legs.destination_location_id', '=', 'locations.id')
            ->select('locations.name as destination', DB::raw('count(trip_legs.id) as count'));

        $this->applyQueryFilters($query, $filters);

        $results = $query->groupBy('locations.name')
            ->orderByDesc('count')
            ->limit($limit)
            ->get()
            ->map(fn ($row) => new TopDestinationItemData(destination: $row->destination, count: (int) $row->count));

        return TopDestinationItemData::collect($results, DataCollection::class);
    }

    /**
     * @return DataCollection<int, ClientDispatchItemData>
     */
    public function getDispatchesByClient(DashboardFilterData $filters): DataCollection
    {
        $query = DB::table('dispatches')
            ->join('clients', 'dispatches.client_id', '=', 'clients.id')
            ->select('clients.name as name', DB::raw('count(dispatches.id) as value'));

        $this->applyQueryFilters($query, $filters);

        $results = $query->groupBy('clients.name')
            ->orderByDesc('value')
            ->get()
            ->map(fn ($row) => new ClientDispatchItemData(name: $row->name, value: (int) $row->value));

        return ClientDispatchItemData::collect($results, DataCollection::class);
    }

    /**
     * @return DataCollection<int, RecentDispatchItemData>
     */
    public function getRecentDispatches(DashboardFilterData $filters, int $limit = 5): DataCollection
    {
        $query = Dispatch::with(['vehicle', 'driver', 'client', 'tripLegs.originLocation', 'tripLegs.destinationLocation']);
        $this->applyFilters($query, $filters);

        $results = $query->latest()
            ->take($limit)
            ->get()
            ->map(function ($d) {
                $firstLeg = $d->tripLegs->firstWhere('trip_sequence', 1) ?? $d->tripLegs->first();

                return new RecentDispatchItemData(
                    id: $d->id,
                    dispatchDate: $d->dispatch_date,
                    vehicle: $d->vehicle?->plate_number ?? 'N/A',
                    driver: $d->driver?->full_name ?? 'N/A',
                    client: $d->client?->name ?? 'N/A',
                    origin: $firstLeg?->originLocation?->name ?? '—',
                    destination: $firstLeg?->destinationLocation?->name ?? '—',
                    status: $d->currentStatus()?->value ?? 'pending',
                );
            });

        return RecentDispatchItemData::collect($results, DataCollection::class);
    }

    /**
     * @return DataCollection<int, LocationData>
     */
    public function getLocations(): DataCollection
    {
        return LocationData::collect(Location::orderBy('name')->get(), DataCollection::class);
    }

    /**
     * @return DataCollection<int, ClientData>
     */
    public function getClients(): DataCollection
    {
        return ClientData::collect(Client::orderBy('name')->get(), DataCollection::class);
    }

    protected function applyFilters($query, DashboardFilterData $filters)
    {
        if (! empty($filters->dateFrom)) {
            $query->whereDate('dispatch_date', '>=', $filters->dateFrom);
        }
        if (! empty($filters->dateTo)) {
            $query->whereDate('dispatch_date', '<=', $filters->dateTo);
        }
        if (! empty($filters->clientId)) {
            $query->where('client_id', $filters->clientId);
        }
        if (! empty($filters->originLocationId) || ! empty($filters->destinationLocationId)) {
            $query->whereHas('tripLegs', function ($q) use ($filters) {
                if (! empty($filters->originLocationId)) {
                    $q->where('origin_location_id', $filters->originLocationId);
                }
                if (! empty($filters->destinationLocationId)) {
                    $q->where('destination_location_id', $filters->destinationLocationId);
                }
            });
        }

        return $query;
    }

    protected function applyQueryFilters($query, DashboardFilterData $filters)
    {
        if (! empty($filters->dateFrom)) {
            $query->whereDate('dispatches.dispatch_date', '>=', $filters->dateFrom);
        }
        if (! empty($filters->dateTo)) {
            $query->whereDate('dispatches.dispatch_date', '<=', $filters->dateTo);
        }
        if (! empty($filters->clientId)) {
            $query->where('dispatches.client_id', $filters->clientId);
        }
        if (! empty($filters->originLocationId)) {
            $query->whereExists(function ($q) use ($filters) {
                $q->select(DB::raw(1))
                    ->from('trip_legs as tl')
                    ->whereColumn('tl.dispatch_id', 'dispatches.id')
                    ->where('tl.origin_location_id', $filters->originLocationId);
            });
        }
        if (! empty($filters->destinationLocationId)) {
            $query->whereExists(function ($q) use ($filters) {
                $q->select(DB::raw(1))
                    ->from('trip_legs as tl')
                    ->whereColumn('tl.dispatch_id', 'dispatches.id')
                    ->where('tl.destination_location_id', $filters->destinationLocationId);
            });
        }
    }
}
