<?php

namespace Modules\DispatchOperation\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Modules\DispatchOperation\Classes\Data\Request\CreateTripRemarkData;
use Modules\DispatchOperation\Models\TripRemark;

class TripRemarkController extends Controller
{
    public function store(CreateTripRemarkData $request)
    {
        TripRemark::create([
            'trip_leg_id' => $request->tripLegId,
            'remark' => $request->remark,
            'location_id' => $request->locationId,
            'user_id' => Auth::id(),
        ]);

        return back()->with('success', 'Trip remark added successfully.');
    }
}
