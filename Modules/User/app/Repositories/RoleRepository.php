<?php

namespace Modules\User\Repositories;
use Modules\User\Models\Role;

class RoleRepository
{
    public function getRoles(array $with = [], array $where = []){
        return Role::with($with)->where($where)->get();
    }
}
