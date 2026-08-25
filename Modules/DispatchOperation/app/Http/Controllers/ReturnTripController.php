<?php

namespace Modules\DispatchOperation\Http\Controllers;

use App\Http\Controllers\Controller;
use Modules\DispatchOperation\Classes\Data\Request\CreateReturnTripData;
use Modules\DispatchOperation\Models\ReturnTrip;

class ReturnTripController extends Controller
{
    public function store(CreateReturnTripData $data)
    {
        ReturnTrip::create($data->returnTripAttributes());

        return back()->with('success', 'Return trip created successfully.');
    }
}
