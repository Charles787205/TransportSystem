<?php

namespace Modules\DispatchOperation\Repositories;
use Modules\DispatchOperation\Models\Dispatch;
class DispatchRepository
{
    public function handle() {}

    public function createDispatch(array $data){
        return Dispatch::create($data)->refresh();
    }

    public function getDispatch(int $id, array $where=[]){
        return Dispatch::where($where)->findOrFail($id);
    }
    public function getPaginatedDispatches(int $pageSize=20, array $where=[], array $with=[]){
        return Dispatch::with($with)->where($where)->paginate($pageSize);
    }
}
