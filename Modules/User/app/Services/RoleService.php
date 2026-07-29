<?php

namespace Modules\User\Services;

use Modules\User\Classes\Data\RoleData;
use Modules\User\Repositories\RoleRepository;

class RoleService
{
    public function __construct(
        private RoleRepository $roleRepo
    )
    {}

    public function getRoles(){
        $roles = $this->roleRepo->getRoles(with: ['permissions']);
        return $roles->map(fn ($role) => RoleData::from($role));
    }
}
