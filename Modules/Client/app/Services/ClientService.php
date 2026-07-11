<?php

namespace Modules\Client\Services;

use Illuminate\Support\Collection;
use Modules\Client\Classes\Data\ClientData;
use Modules\Client\Classes\Data\CreateClientData;
use Modules\Client\Repositories\ClientRepository;

class ClientService
{
    public function __construct(
        private ClientRepository $clientRepo
    ){}

    /**
     * @return Collection<int, ClientData>
     */
    public function getClients()
    {
        $clients = $this->clientRepo->getClients();
        return $clients->map(fn ($c) => ClientData::from($c->toArray()));
    }
    public function createClient(CreateClientData $data){
        $client = $this->clientRepo->createClient($data->toArray());
        return $client;
    }
}
