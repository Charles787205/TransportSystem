<?php

namespace Modules\Client\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Modules\Client\Classes\Data\Request\CreateBusinessUnitData;
use Modules\Client\Models\Client;
use Modules\Client\Services\ClientService;

class ClientBusinessUnitController extends Controller
{
    public function __construct(
        private ClientService $clientService
    ) {}

    public function index(Client $client)
    {

        $businessUnits = $this->clientService->getPaginatedBusinessUnits($client->id);

        return Inertia::render(
            'client/business-clients/index',
            [
                'clientId' => $client->id,
                'businessUnits' => $businessUnits,

            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        return Inertia::render(
            'client/business-clients/create',
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateBusinessUnitData $data)
    {
        $this->clientService->createBusinessUnit($data);

        return back()->with('success', 'Business Unit Created');
    }

    /**
     * Show the specified resource.
     */
    public function show($id)
    {
        return view('client::show');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        return view('client::edit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id) {}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id) {}
}
