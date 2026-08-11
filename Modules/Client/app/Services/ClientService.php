<?php

namespace Modules\Client\Services;

use Illuminate\Support\Collection;
use Modules\Client\Classes\Data\Request\CreateBusinessUnitData;
use Modules\Client\Classes\Data\Request\CreateClientData;
use Modules\Client\Classes\Data\Request\CreateDestinationData;
use Modules\Client\Classes\Data\Response\ClientData;
use Modules\Client\Classes\Data\Response\DestinationData;
use Modules\Client\Classes\Data\Response\PaginatedBusinessUnitData;
use Modules\Client\Classes\Data\Response\PaginatedDestinationData;
use Modules\Client\Repositories\BusinessUnitRepository;
use Modules\Client\Repositories\ClientRepository;
use Modules\Client\Repositories\DestinationRepository;

class ClientService
{
    public function __construct(
        private ClientRepository $clientRepo,
        private BusinessUnitRepository $businessUnitRepo,
        private DestinationRepository $destinationRepo
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

    public function createBusinessUnit(CreateBusinessUnitData $data)
    {
        $this->businessUnitRepo->createBusinessunit($data->businessUnitAttributes());
    }

    public function getPaginatedBusinessUnits(int $clientId, int $pageSize = 10, int $page = 1)
    {
        $businessUnits = $this->businessUnitRepo->getPaginatedBusinessUnits($clientId, $pageSize, $page);

        return PaginatedBusinessUnitData::from($businessUnits);
    }

    public function createDestination(CreateDestinationData $data)
    {
        $destination = $this->destinationRepo->createDestination($data->destinationAttributes());

        return DestinationData::from($destination);
    }

    public function getPaginatedClientsDestination(int $clientId)
    {
        $filter = ['client_id' => $clientId];
        $destinations = $this->destinationRepo->getPaginatedDestinations(where: $filter);

        return PaginatedDestinationData::from($destinations);
    }
}
