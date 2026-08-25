<?php

namespace Modules\Client\Http\Controllers;

use App\Http\Controllers\Controller;
use Modules\Client\Classes\Data\Request\CreateLocationData;
use Modules\Client\Services\ClientService;

class ClientLocationController extends Controller
{
    public function __construct(private ClientService $clientService) {}

    public function store(CreateLocationData $data)
    {
        $this->clientService->createLocation($data);

        return back()->with('success', 'Location created successfully');
    }
}
