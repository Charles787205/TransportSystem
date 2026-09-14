<?php

namespace Modules\DispatchOperation\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Modules\DispatchOperation\Classes\Data\Request\CreateTripRemarkData;
use Modules\DispatchOperation\Models\Dispatch;
use Modules\DispatchOperation\Services\TripRemarkService;

class TripRemarkController extends Controller
{
    public function __construct(
        private TripRemarkService $tripRemarkService
    ) {}

    public function store(CreateTripRemarkData $request)
    {
        Gate::authorize('create', Dispatch::class);

        $this->tripRemarkService->createRemark($request, (int) Auth::id());

        return back()->with('success', 'Trip remark added successfully.');
    }
}
