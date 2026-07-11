<?php

namespace Modules\Client\Repositories;
use Modules\Client\Models\Client;

class ClientRepository
{
    
    public function createClient(array $data){
        return Client::create($data);
    }
    public function getClients()
    {
        return Client::where('active', true)
            ->orderBy('name')
            ->paginate(15);
    }

}
