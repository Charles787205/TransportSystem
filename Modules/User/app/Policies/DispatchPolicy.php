<?php

namespace Modules\User\Policies;

use Modules\DispatchOperation\Models\Dispatch;
use Modules\User\Models\User;

class DispatchPolicy
{
    public function viewAny(User $user): bool
    {
        return $user->hasPermission('dispatch-operations', 'view');
    }

    public function view(User $user, Dispatch $dispatch): bool
    {
        return $user->hasPermission('dispatch-operations', 'view');
    }

    public function create(User $user): bool
    {
        return $user->hasPermission('dispatch-operations', 'create');
    }

    public function update(User $user, Dispatch $dispatch): bool
    {
        return $user->hasPermission('dispatch-operations', 'edit');
    }

    public function delete(User $user, Dispatch $dispatch): bool
    {
        return $user->hasPermission('dispatch-operations', 'delete');
    }
}
