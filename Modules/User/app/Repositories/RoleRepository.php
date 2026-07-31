<?php

namespace Modules\User\Repositories;

use Modules\User\Models\Role;

class RoleRepository
{
    public function getRoles(array $with = [], array $where = [])
    {
        return Role::with($with)->where($where)->get();
    }

    public function getRoleById(int $id, array $with = ['permissions']): Role
    {
        return Role::with($with)->findOrFail($id);
    }

    public function createRole(array $data)
    {
        return Role::create($data)->refresh();
    }

    public function updateRole(Role $role, array $data, ?array $permissions = null): Role
    {
        $role->update($data);

        if ($permissions !== null) {
            $syncData = [];
            foreach ($permissions as $perm) {
                if (isset($perm['id'])) {
                    $syncData[$perm['id']] = [
                        'view' => (bool) ($perm['view'] ?? false),
                        'create' => (bool) ($perm['create'] ?? false),
                        'edit' => (bool) ($perm['edit'] ?? false),
                        'delete' => (bool) ($perm['delete'] ?? false),
                    ];
                }
            }
            $role->permissions()->sync($syncData);
        }

        return $role->fresh(['permissions']);
    }
}
