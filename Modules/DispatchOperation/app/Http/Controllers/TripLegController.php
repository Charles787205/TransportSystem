<?php

namespace Modules\DispatchOperation\Http\Controllers;

use App\Http\Controllers\Controller;
use Modules\DispatchOperation\Classes\Data\Request\CreateTripLegData;
use Modules\DispatchOperation\Classes\Data\Request\EditTripLegData;
use Modules\DispatchOperation\Services\TripLegService;

class TripLegController extends Controller
{
    public function __construct(
        private TripLegService $tripLegService,
    ) {}

    public function store(CreateTripLegData $request)
    {

        $this->tripLegService->addTripLeg($request);

        return back()->with('success', 'Trip leg added');

    }

    public function update(EditTripLegData $request, int $id)
    {

        $this->tripLegService->editTripLeg($request, $id);

        return back()->with(['success', 'Trip data updated']);

    }

    public function destroy($id)
    {
        $this->tripLegService->deleteTripLeg((int) $id);

        return back()->with('success', 'Trip leg deleted');
    }
}
