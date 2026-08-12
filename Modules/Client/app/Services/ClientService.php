<?php

namespace Modules\Client\Services;

use Illuminate\Support\Collection;
use Modules\Client\Classes\Data\Request\CreateClientData;
use Modules\Client\Classes\Data\Request\CreateLocationData;
use Modules\Client\Classes\Data\Response\ClientData;
use Modules\Client\Classes\Data\Response\LocationData;
use Modules\Client\Classes\Data\Response\PaginatedLocationData;
use Modules\Client\Repositories\ClientRepository;
use Modules\Client\Repositories\LocationRepository;
use Modules\DispatchOperation\Classes\Data\Response\DispatchData;
use Modules\DispatchOperation\Repositories\DispatchRepository;
use Modules\Planning\Classes\Data\Response\PaginatedPlanData;
use Modules\Planning\Repositories\PlanRepository;

class ClientService
{
    public function __construct(
        private ClientRepository $clientRepo,
        private LocationRepository $locationRepo,
        private PlanRepository $planRepo,
        private DispatchRepository $dispatchRepo,
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

    public function createLocation(CreateLocationData $data): LocationData
    {
        $location = $this->locationRepo->createLocation($data->locationAttributes());

        return LocationData::from($location);
    }

    public function getPaginatedLocations(int $clientId, int $pageSize = 10, int $page = 1): PaginatedLocationData
    {
        $locations = $this->locationRepo->getPaginatedLocations($clientId, $pageSize, $page);

        return PaginatedLocationData::from($locations);
    }

    public function getPaginatedPlans(int $clientId, int $pageSize = 10): PaginatedPlanData
    {
        $plans = $this->planRepo->getPaginatedPlans(
            where: ['client_id' => $clientId],
            pageSize: $pageSize,
            with: ['client', 'origin', 'destination']
        );

        return PaginatedPlanData::from($plans);
    }

    public function getRecentDispatches(int $clientId, int $limit = 10)
    {
        $dispatches = $this->dispatchRepo->getDispatches(
            where: ['client_id' => $clientId],
            with: ['vehicle', 'driver', 'client', 'tripLegs']
        )->take($limit);

        return $dispatches->map(fn ($d) => DispatchData::from($d));
    }
}
