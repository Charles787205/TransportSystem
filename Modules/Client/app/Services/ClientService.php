<?php

namespace Modules\Client\Services;

use Illuminate\Support\Collection;
use Modules\Client\Classes\Data\Request\CreateClientData;
use Modules\Client\Classes\Data\Response\ClientData;
use Modules\Client\Repositories\ClientRepository;

class ClientService
{
    public function __construct(
        private ClientRepository $clientRepo,
    ) {}

    /**
     * @return Collection<int, ClientData>
     */
    public function getClients()
    {
        $clients = $this->clientRepo->getClients();

        return $clients->map(fn ($c) => ClientData::from($c->toArray()));
    }

    public function createClient(CreateClientData $data): ClientData
    {
        $client = $this->clientRepo->createClient($data->clientAttributes());

        return ClientData::from($client->refresh());
    }

    public function getClient(int $id): ClientData
    {
        $client = $this->clientRepo->getClient($id);

        return ClientData::from($client);
    }
}
