<?php

namespace Modules\DispatchOperation\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Modules\DispatchOperation\Classes\Data\CreateDispatchData;
use Modules\DispatchOperation\Classes\Data\EditTripLegData;
use Modules\DispatchOperation\Services\DispatchService;
use Modules\DispatchOperation\Enums\TripStatus;

class DispatchOperationController extends Controller
{
    public function __construct(
        private DispatchService $dispatchService
    ) {}

    public function index()
    {

        $dispatchData = $this->dispatchService->getPaginatedDispatches();

        return Inertia::render(
            'dispatchoperations/index',
            ['dispatches' => $dispatchData]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('dispatchoperation::create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateDispatchData $data)
    {
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
        $dispatch = $this->dispatchService->getDispatchDetails($id);

        return Inertia::render(
            'dispatchoperations/show',
            [
                'dispatch' => $dispatch,
                'tripStatuses' => Inertia::defer(fn () =>
                    collect(TripStatus::cases())->map(fn ($status) => [
                        'value' => $status->value,
                        'label' => str($status->value)->headline(),
                    ])->values())
            ]
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        return view('dispatchoperation::edit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(EditTripLegData $request, $id) {}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id) {}
}
