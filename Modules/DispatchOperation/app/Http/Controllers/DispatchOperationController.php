<?php

namespace Modules\DispatchOperation\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Modules\DispatchOperation\Classes\Data\CreateDispatchData;
use Modules\DispatchOperation\Classes\Data\EditTripLegData;
use Modules\DispatchOperation\Enums\TripStatus;
use Modules\DispatchOperation\Models\Dispatch;
use Modules\DispatchOperation\Services\DispatchService;

class DispatchOperationController extends Controller
{
    public function __construct(
        private DispatchService $dispatchService
    ) {}

    public function index(Request $request)
    {
        Gate::authorize('viewAny', Dispatch::class);

        $filters = $request->only(['search', 'date_filter', 'start_date', 'end_date']);

        // Default to today if no date filter is provided
        if (! isset($filters['date_filter'])) {
            $filters['date_filter'] = 'today';
        }

        $dispatchData = $this->dispatchService->getPaginatedDispatches($filters);
        $metrics = $this->dispatchService->getDispatchMetrics($filters);

        return Inertia::render(
            'dispatchoperations/index',
            [
                'dispatches' => $dispatchData,
                'metrics' => $metrics,
                'filters' => $filters,
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        Gate::authorize('create', Dispatch::class);

        return view('dispatchoperation::create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateDispatchData $data)
    {
        Gate::authorize('create', Dispatch::class);

        try {
            $this->dispatchService->createDispatch($data);

            return back()->with('success', 'Dispatch Created');
        } catch (\Exception $e) {
            Log::info($e->getMessage());

            return back()->with('error', 'Error: '.$e->getMessage());
        }
    }

    /**
     * Show the specified resource.
     */
    public function show($id)
    {
        $dispatchModel = Dispatch::findOrFail($id);
        Gate::authorize('view', $dispatchModel);

        $dispatch = $this->dispatchService->getDispatchDetails($id);

        return Inertia::render(
            'dispatchoperations/show',
            [
                'dispatch' => $dispatch,
                'tripStatuses' => Inertia::defer(fn () => collect(TripStatus::cases())->map(fn ($status) => [
                    'value' => $status->value,
                    'label' => str($status->value)->headline(),
                ])->values()),
            ]
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $dispatchModel = Dispatch::findOrFail($id);
        Gate::authorize('update', $dispatchModel);

        return view('dispatchoperation::edit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(EditTripLegData $request, $id)
    {
        $dispatchModel = Dispatch::findOrFail($id);
        Gate::authorize('update', $dispatchModel);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $dispatchModel = Dispatch::findOrFail($id);
        Gate::authorize('delete', $dispatchModel);
    }
}
