<?php

namespace Modules\User\Policies;

use Modules\Planning\Models\Plan;
use Modules\User\Models\User;

class PlanPolicy
{
    public function viewAny(User $user): bool
    {
        return $user->hasPermission('planning', 'view');
    }

    public function view(User $user, Plan $plan): bool
    {
        return $user->hasPermission('planning', 'view');
    }

    public function create(User $user): bool
    {
        return $user->hasPermission('planning', 'create');
    }

    public function update(User $user, Plan $plan): bool
    {
        return $user->hasPermission('planning', 'edit');
    }

    public function delete(User $user, Plan $plan): bool
    {
        return $user->hasPermission('planning', 'delete');
    }
}
