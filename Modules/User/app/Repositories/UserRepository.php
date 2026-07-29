<?php

namespace Modules\User\Repositories;
use Modules\User\Models\User;

class UserRepository
{
    
    public function getUsers(array $with = [], array $where=[]){
        return User::with($with)->where($where)->get();
    }

    public function createUser(array $userDetails){
        $user = User::create($userDetails);
        return $user->refresh();
    }

    public function getPaginatedUsers(array $with = [], array $where = [], int $pageSize=20){
        return User::with($with)->where($where)->paginate(perPage: $pageSize);
    }

    public function getUser(int $id, array $with = []){
        return User::with($with)->findOrFail($id);
    }
}
