<?php

namespace Modules\DispatchOperation\Http\Controllers;

use Illuminate\Routing\Controller;
use Modules\Client\Models\Client;
use Modules\Client\Models\Location;
use Modules\Core\Classes\Data\Response\SelectOptionData;
use Modules\DispatchOperation\Classes\Data\Response\DispatchFormOptionsData;
use Modules\DispatchOperation\Classes\Data\Response\LocationOptionData;
use Modules\DispatchOperation\Classes\Data\Response\ResourceStatusOptionData;
use Modules\Vendor\Models\Driver;
use Modules\Vendor\Models\Vehicle;

class DispatchFormOptionsController extends Controller
{
    public function index()
    {
        $terminalStatuses = ['delivered', 'cancelled', 'foul trip'];

        $vehicles = Vehicle::with(['dispatches.tripLegs' => function ($q) {
            $q->latest();
        }])->get(['id', 'plate_number as label', 'vendor_id'])->map(function ($v) use ($terminalStatuses) {
            $latestTripLeg = $v->dispatches
                ->flatMap->tripLegs
                ->sortByDesc('created_at')
                ->first();

            $status = $latestTripLeg?->status?->value;
            $isAvailable = ! $status || in_array($status, $terminalStatuses, true);

            return new ResourceStatusOptionData(
                id: $v->id,
                label: $v->label,
                isAvailable: $isAvailable,
                activeStatus: $isAvailable ? null : $status,
                vendorId: $v->vendor_id
            );
        });

        $drivers = Driver::with(['dispatches.tripLegs' => function ($q) {
            $q->latest();
        }])->get(['id', 'full_name as label', 'vendor_id'])->map(function ($d) use ($terminalStatuses) {
            $latestTripLeg = $d->dispatches
                ->flatMap->tripLegs
                ->sortByDesc('created_at')
                ->first();

            $status = $latestTripLeg?->status?->value;
            $isAvailable = ! $status || in_array($status, $terminalStatuses, true);

            return new ResourceStatusOptionData(
                id: $d->id,
                label: $d->label,
                isAvailable: $isAvailable,
                activeStatus: $isAvailable ? null : $status,
                vendorId: $d->vendor_id
            );
        });

        return DispatchFormOptionsData::from([
            'vehicles' => $vehicles,
            'drivers' => $drivers,
            'clients' => Client::query()->get(['id', 'name as label'])
                ->map(fn ($c) => new SelectOptionData($c->id, $c->label)),
            'locations' => Location::query()->get(['id', 'name as label', 'client_id'])
                ->map(fn ($l) => new LocationOptionData($l->id, $l->label, $l->client_id)),
        ]);
    }
}
