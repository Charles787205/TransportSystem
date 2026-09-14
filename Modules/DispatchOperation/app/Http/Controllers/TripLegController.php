<?php

namespace Modules\DispatchOperation\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Gate;
use Modules\DispatchOperation\Classes\Data\Request\CreateTripLegData;
use Modules\DispatchOperation\Classes\Data\Request\EditTripLegData;
use Modules\DispatchOperation\Models\Dispatch;
use Modules\DispatchOperation\Services\TripLegService;

class TripLegController extends Controller
{
    public function __construct(
        private TripLegService $tripLegService,
    ) {}

    public function store(CreateTripLegData $request)
    {
        Gate::authorize('create', Dispatch::class);

        $this->tripLegService->addTripLeg($request);

        return back()->with('success', 'Trip leg added');
    }

    public function update(EditTripLegData $request, int $id)
    {
        Gate::authorize('update', Dispatch::class);

        $this->tripLegService->editTripLeg($request, $id);

        return back()->with('success', 'Trip data updated');
    }

    public function destroy($id)
    {
        Gate::authorize('delete', Dispatch::class);

        $this->tripLegService->deleteTripLeg((int) $id);

        return back()->with('success', 'Trip leg deleted');
    }
}
