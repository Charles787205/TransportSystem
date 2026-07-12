<?php

namespace Modules\Client\Services;

use Illuminate\Support\Collection;
use Modules\Client\Classes\Data\ClientData;
use Modules\Client\Classes\Data\CreateBusinessUnitData;
use Modules\Client\Classes\Data\CreateClientData;
use Modules\Client\Repositories\BusinessUnitRepository;
use Modules\Client\Repositories\ClientRepository;

class ClientService
{
    public function __construct(
        private ClientRepository $clientRepo,
        private BusinessUnitRepository $businessUnitRepo
    ){}

    /**
     * @return Collection<int, ClientData>
     */
    public function getClients()
    {
        $clients = $this->clientRepo->getClients();
        return $clients->map(fn ($c) => ClientData::from($c->toArray()));
    }
    public function createClient(CreateClientData $data) : ClientData
    {
        $client = $this->clientRepo->createClient($data->clientAttributes());
        
        return ClientData::from($client);
    }
    public function getClient(int $id) : ClientData 
    {   
        $client = $this->clientRepo->getClient($id);
        return ClientData::from($client);
    }

    public function createBusinessUnit(CreateBusinessUnitData $data){
        $this->businessUnitRepo->createBusinessunit($data->toArray());
    }

    public function getBusinessUnits($clientId){
        
    }
}
