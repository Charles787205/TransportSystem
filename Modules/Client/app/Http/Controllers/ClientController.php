<?php

namespace Modules\Client\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Modules\Client\Classes\Data\CreateClientData;
use Modules\Client\Services\ClientService;

class ClientController extends Controller
{
    public function __construct(private ClientService $clientService){}
    public function index()
    {
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
        return Inertia::render(
            'client/create'
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateClientData $data) {
        $client = $this->clientService->createClient($data);
        return back()->with("success", $client->name ."Client Created");
    }

    /**
     * Show the specified resource.
     */
    public function show(Request $request, $id)
    {
        $page = max(1, (int) $request->input('page', 1));
        $client = $this->clientService->getClient($id);

        return Inertia::render(
            'client/show',
            [
                'client' => $client,
                'businessUnits' => $this->clientService->getPaginatedBusinessUnits($id, 10, $page),
            ]
        );
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
