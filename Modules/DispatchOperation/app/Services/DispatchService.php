<?php

namespace Modules\DispatchOperation\Services;

use Modules\Core\Classes\Data\PaginatedData;
use Modules\DispatchOperation\Classes\Data\CreateDispatchData;
use Modules\DispatchOperation\Repositories\DispatchRepository;
use Modules\DispatchOperation\Classes\Data\DispatchData;

class DispatchService
{
    public function __construct(private DispatchRepository $dispatchRepo) {}

    public function getDispatch(int $id){
       $dispatch =  $this->dispatchRepo->getDispatch($id);
       return DispatchData::from($dispatch);
    }

    public function createDispatch(CreateDispatchData $data){
        $dispatch = $this->dispatchRepo->createDispatch($data->dispatchAttributes());
        return DispatchData::from($dispatch);
    }

    public function getPaginatedDispatches(){
        $dispatches = $this->dispatchRepo->getPaginatedDispatches(with: ['driver', 'destination' , 'businessUnit', 'vehicle']);
        return PaginatedData::fromPaginator($dispatches, DispatchData::class);
    }

}
