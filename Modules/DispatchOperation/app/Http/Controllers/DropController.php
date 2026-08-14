<?php

namespace Modules\DispatchOperation\Http\Controllers;

use App\Http\Controllers\Controller;
use Modules\DispatchOperation\Classes\Data\Request\CreateDropData;
use Modules\DispatchOperation\Models\Drop;
use Modules\DispatchOperation\Models\TripLeg;

class DropController extends Controller
{
    public function store(CreateDropData $data)
    {
        $tripLeg = TripLeg::findOrFail($data->tripLegId);

        $nextSequence = $tripLeg->drops()->count() + 1;

        $attributes = $data->dropAttributes();
        $attributes['drop_sequence'] = $nextSequence;

        Drop::create($attributes);

        return back()->with('success', 'Drop added successfully.');
    }
}
