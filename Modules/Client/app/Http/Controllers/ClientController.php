<?php

namespace Modules\Client\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Modules\Client\Classes\Data\Request\CreateClientData;
use Modules\Client\Models\Client;
use Modules\Client\Services\ClientService;

class ClientController extends Controller
{
    public function __construct(private ClientService $clientService) {}

    public function index()
    {
        Gate::authorize('viewAny', Client::class);

        return Inertia::render(
            'client/index',
            ['clients' => $this->clientService->getClients()]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        Gate::authorize('create', Client::class);

        return Inertia::render(
            'client/create'
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateClientData $data)
    {
        Gate::authorize('create', Client::class);

        $client = $this->clientService->createClient($data);

        return back()->with('success', $client->name.'Client Created');
    }

    /**
     * Show the specified resource.
     */
    public function show(Client $client)
    {
        Gate::authorize('view', $client);

        $clientData = $this->clientService->getClient($client->id);
        $locations = $this->clientService->getPaginatedLocations($client->id);
        $plans = $this->clientService->getPaginatedPlans($client->id);
        $dispatches = $this->clientService->getRecentDispatches($client->id);

        return Inertia::render(
            'client/show',
            [
                'client' => $clientData,
                'locations' => $locations,
                'plans' => $plans,
                'dispatches' => $dispatches,
            ]
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $clientModel = Client::findOrFail($id);
        Gate::authorize('update', $clientModel);

        return view('client::edit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $clientModel = Client::findOrFail($id);
        Gate::authorize('update', $clientModel);
    }

    public function updateAllowedCargoUnits(Request $request, Client $client)
    {
        Gate::authorize('update', $client);

        $validated = $request->validate([
            'allowed_cargo_units' => ['nullable', 'array'],
            'allowed_cargo_units.*' => ['string', 'in:per_parcel,per_box,loose_items,by_weight'],
        ]);

        $client->update([
            'allowed_cargo_units' => $validated['allowed_cargo_units'] ?? [],
        ]);

        return back()->with('success', 'Cargo calculation configuration updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $clientModel = Client::findOrFail($id);
        Gate::authorize('delete', $clientModel);
    }
}
