<?php

namespace Modules\Dashboard\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Modules\Client\Models\Client;
use Modules\DispatchOperation\Models\Dispatch;
use Modules\Planning\Models\Plan;
use Modules\Vendor\Models\Driver;
use Modules\Vendor\Models\Vehicle;
use Modules\Vendor\Models\Vendor;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $plansCount = Plan::count();
        $dispatchesCount = Dispatch::count();
        $vendorsCount = Vendor::count();
        $driversCount = Driver::count();
        $vehiclesCount = Vehicle::count();
        $clientsCount = Client::count();

        // 1. Status Breakdown
        $dispatches = Dispatch::with(['tripLegs'])->get();
        $statuses = $dispatches->map(function ($d) {
            return $d->currentStatus()?->value ?? 'pending';
        });
        $statusBreakdown = collect([
            'pending' => 0,
            'in transit' => 0,
            'delivered' => 0,
            'cancelled' => 0,
        ]);
        foreach ($statuses as $status) {
            if (str_contains($status, 'transit') || str_contains($status, 'loading') || str_contains($status, 'unloading') || str_contains($status, 'waiting')) {
                $statusBreakdown['in transit'] = $statusBreakdown['in transit'] + 1;
            } elseif ($status === 'delivered') {
                $statusBreakdown['delivered'] = $statusBreakdown['delivered'] + 1;
            } elseif ($status === 'cancelled' || $status === 'foul trip') {
                $statusBreakdown['cancelled'] = $statusBreakdown['cancelled'] + 1;
            } else {
                $statusBreakdown['pending'] = $statusBreakdown['pending'] + 1;
            }
        }
        $statusBreakdownData = [];
        foreach ($statusBreakdown as $key => $val) {
            $statusBreakdownData[] = ['name' => ucfirst($key), 'value' => $val];
        }

        // 2. Recent Dispatches
        $recentDispatches = Dispatch::with(['vehicle', 'driver', 'client'])
            ->latest()
            ->take(5)
            ->get()
            ->map(function ($d) {
                return [
                    'id' => $d->id,
                    'dispatch_date' => $d->dispatch_date,
                    'vehicle' => $d->vehicle?->plate_number ?? 'N/A',
                    'driver' => $d->driver?->full_name ?? 'N/A',
                    'client' => $d->client?->name ?? 'N/A',
                    'status' => $d->currentStatus()?->value ?? 'pending',
                ];
            });

        return Inertia::render(
            'dashboard',
            [
                'metrics' => [
                    'plans' => $plansCount,
                    'dispatches' => $dispatchesCount,
                    'vendors' => $vendorsCount,
                    'drivers' => $driversCount,
                    'vehicles' => $vehiclesCount,
                    'clients' => $clientsCount,
                ],
                'statusBreakdown' => $statusBreakdownData,
                'recentDispatches' => $recentDispatches,
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('dashboard::create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request) {}

    /**
     * Show the specified resource.
     */
    public function show($id)
    {
        return view('dashboard::show');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        return view('dashboard::edit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id) {}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id) {}
}
