<?php

namespace Modules\DispatchOperation\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Gate;
use Modules\DispatchOperation\Classes\Data\Request\CreateReturnTripData;
use Modules\DispatchOperation\Models\Dispatch;
use Modules\DispatchOperation\Services\ReturnTripService;

class ReturnTripController extends Controller
{
    public function __construct(
        private ReturnTripService $returnTripService
    ) {}

    public function store(CreateReturnTripData $data)
    {
        Gate::authorize('create', Dispatch::class);

        $this->returnTripService->createReturnTrip($data);

        return back()->with('success', 'Return trip created successfully.');
    }

    public function destroy(int $id)
    {
        Gate::authorize('delete', Dispatch::class);

        $this->returnTripService->deleteReturnTrip($id);

        return back()->with('success', 'Return trip deleted successfully.');
    }
}
