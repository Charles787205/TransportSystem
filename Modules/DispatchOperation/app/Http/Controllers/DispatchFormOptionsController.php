<?php

namespace Modules\DispatchOperation\Http\Controllers;

use Illuminate\Routing\Controller;
use Modules\DispatchOperation\Classes\Data\DispatchFormOptionsData;
use Modules\Core\Classes\Data\SelectOptionData;

use Modules\Vendor\Models\Vehicle;
use Modules\Vendor\Models\Driver;
use Modules\Client\Models\BusinessUnit;
use Modules\Client\Models\Destination;


class DispatchFormOptionsController extends Controller
{
    public function index()
    {
        return DispatchFormOptionsData::from([
            'vehicles' => Vehicle::query()->get(['id', 'plate_number as label'])
                ->map(fn ($v) => new SelectOptionData($v->id, $v->label)),
            'drivers' => Driver::query()->get(['id', 'full_name as label'])
                ->map(fn ($d) => new SelectOptionData($d->id, $d->label)),
            'businessUnits' => BusinessUnit::query()->get(['id', 'name as label'])
                ->map(fn ($b) => new SelectOptionData($b->id, $b->label)),
            'destinations' => Destination::query()->get(['id', 'name as label'])
                ->map(fn ($d) => new SelectOptionData($d->id, $d->label)),
        ]);
    }
}