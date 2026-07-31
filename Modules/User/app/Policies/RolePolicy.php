<?php

namespace Modules\User\Policies;

use Modules\User\Models\Role;
use Modules\User\Models\User;

class RolePolicy
{
    public function viewAny(User $user): bool
    {
        return $user->hasPermission('roles', 'view');
    }

    public function view(User $user, Role $role): bool
    {
        return $user->hasPermission('roles', 'view');
    }

    public function create(User $user): bool
    {
        return $user->hasPermission('roles', 'create');
    }

    public function update(User $user, Role $role): bool
    {
        return $user->hasPermission('roles', 'edit');
    }

    public function delete(User $user, Role $role): bool
    {
        return $user->hasPermission('roles', 'delete');
    }
}
