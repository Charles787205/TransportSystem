<?php

namespace Modules\DispatchOperation\Http\Controllers;

use App\Http\Controllers\Controller;
use Modules\DispatchOperation\Classes\Data\Request\CreateDropData;
use Modules\DispatchOperation\Classes\Data\Request\EditDropData;
use Modules\DispatchOperation\Models\Drop;
use Modules\DispatchOperation\Models\TripLeg;

class DropController extends Controller
{
    public function store(CreateDropData $data)
    {
        $tripLeg = TripLeg::findOrFail($data->tripLegId);

        if ($data->locationId === $tripLeg->origin_location_id || $data->locationId === $tripLeg->destination_location_id) {
            return back()->withErrors([
                'location_id' => 'Drop location cannot be the trip origin or destination location.',
            ]);
        }

        $nextSequence = $tripLeg->drops()->count() + 1;

        $attributes = $data->dropAttributes();
        $attributes['drop_sequence'] = $nextSequence;

        Drop::create($attributes);

        return back()->with('success', 'Drop added successfully.');
    }

    public function update(EditDropData $data, int $id)
    {
        $drop = Drop::with('tripLeg')->findOrFail($id);
        $tripLeg = $drop->tripLeg;

        if ($tripLeg && ($data->locationId === $tripLeg->origin_location_id || $data->locationId === $tripLeg->destination_location_id)) {
            return back()->withErrors([
                'location_id' => 'Drop location cannot be the trip origin or destination location.',
            ]);
        }

        $drop->update($data->dropAttributes());

        return back()->with('success', 'Drop updated successfully.');
    }

    public function destroy(int $id)
    {
        $drop = Drop::findOrFail($id);
        $drop->delete();

        return back()->with('success', 'Drop deleted successfully.');
    }
}
