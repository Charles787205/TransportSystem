<?php

namespace Modules\Client\Http\Controllers;

use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Modules\Client\Classes\Data\CreateDestinationData;
use Modules\Client\Models\Client;
use Modules\Client\Services\ClientService;
use Illuminate\Support\Facades\Log;
class ClientDestinationController extends Controller
{
    

    public function __construct(
        private ClientService $clientService
    )
    {}
    public function index(Client $client)
    {
        $destinations = $this->clientService->getPaginatedClientsDestination($client->id);
        return Inertia::render(
            'client/destinations/index',
            [
                'clientId' => $client->id,
                'destinations' => $destinations
            ]
        );
    }


    public function store(CreateDestinationData $request) {
        try{
            $destination = $this->clientService->createDestination($request);
            return back()->with('success', 'Destination created');
        }
        catch (Exception $e)
        {
            Log::error($e->getMessage());
            return back()->with('error', 'Error occured');
        }
        
    }


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
