<?php

namespace Modules\User\Services;

use Modules\User\Classes\Data\CreateRoleData;
use Modules\User\Classes\Data\RoleData;
use Modules\User\Classes\Data\UpdateRoleData;
use Modules\User\Repositories\PermissionRepository;
use Modules\User\Repositories\RoleRepository;

class RolePermissionService
{
    public function __construct(
        private RoleRepository $roleRepo,
        private PermissionRepository $permissionRepo
    ) {}

    public function getRoles()
    {
        $roles = $this->roleRepo->getRoles(with: ['permissions']);

        return $roles->map(fn ($role) => RoleData::from($role));
    }

    public function createRole(CreateRoleData $data)
    {
        $role = $this->roleRepo->createRole($data->toModelAttributes());

        return RoleData::from($role);
    }

    public function getRoleById(int $id): RoleData
    {
        $role = $this->roleRepo->getRoleById($id, with: ['permissions']);

        return RoleData::from($role);
    }

    public function updateRole(int $id, UpdateRoleData $data): RoleData
    {
        $role = $this->roleRepo->getRoleById($id, with: ['permissions']);
        $updatedRole = $this->roleRepo->updateRole(
            $role,
            $data->toModelAttributes(),
            $data->permissions
        );

        return RoleData::from($updatedRole);
    }

    public function getPermissions()
    {
        $permissions = $this->permissionRepo->getPermissions();

        return $permissions;
    }
}
