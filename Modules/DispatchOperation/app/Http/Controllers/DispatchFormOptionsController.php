<?php

namespace Modules\DispatchOperation\Http\Controllers;

use Illuminate\Routing\Controller;
use Modules\Client\Models\Client;
use Modules\Client\Models\Location;
use Modules\Core\Classes\Data\Response\SelectOptionData;
use Modules\DispatchOperation\Classes\Data\Response\DispatchFormOptionsData;
use Modules\Vendor\Models\Driver;
use Modules\Vendor\Models\Vehicle;

class DispatchFormOptionsController extends Controller
{
    public function index()
    {
        return DispatchFormOptionsData::from([
            'vehicles' => Vehicle::query()->get(['id', 'plate_number as label'])
                ->map(fn ($v) => new SelectOptionData($v->id, $v->label)),
            'drivers' => Driver::query()->get(['id', 'full_name as label'])
                ->map(fn ($d) => new SelectOptionData($d->id, $d->label)),
            'clients' => Client::query()->get(['id', 'name as label'])
                ->map(fn ($c) => new SelectOptionData($c->id, $c->label)),
            'locations' => Location::query()->get(['id', 'name as label'])
                ->map(fn ($l) => new SelectOptionData($l->id, $l->label)),
        ]);
    }
}
