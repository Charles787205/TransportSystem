<?php

namespace Modules\DispatchOperation\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Modules\Client\Services\ClientService;
use Modules\DispatchOperation\Classes\Data\Request\CreateDispatchData;
use Modules\DispatchOperation\Classes\Data\Request\EditTripLegData;
use Modules\DispatchOperation\Enums\TripStatus;
use Modules\DispatchOperation\Models\Dispatch;
use Modules\DispatchOperation\Services\DispatchService;

class DispatchOperationController extends Controller
{
    public function __construct(
        private DispatchService $dispatchService,
        private ClientService $clientService
    ) {}

    public function index(Request $request)
    {
        Gate::authorize('viewAny', Dispatch::class);

        $filters = $request->only(['search', 'date_filter', 'start_date', 'end_date']);

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
        $dispatchModel = $this->dispatchService->getDispatchModel((int) $id);
        Gate::authorize('view', $dispatchModel);

        $dispatch = $this->dispatchService->getDispatchDetails((int) $id);
        $locations = $this->clientService->getClientLocations($dispatchModel->client_id);

        return Inertia::render(
            'dispatchoperations/show',
            [
                'dispatch' => $dispatch,
                'locations' => $locations,
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
        $dispatchModel = $this->dispatchService->getDispatchModel((int) $id);
        Gate::authorize('update', $dispatchModel);

        return view('dispatchoperation::edit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(EditTripLegData $request, $id)
    {
        $dispatchModel = $this->dispatchService->getDispatchModel((int) $id);
        Gate::authorize('update', $dispatchModel);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $dispatchModel = $this->dispatchService->getDispatchModel((int) $id);
        Gate::authorize('delete', $dispatchModel);
    }
}
