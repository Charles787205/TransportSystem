<?php

namespace Modules\User\Policies;

use Modules\User\Models\User;
use Modules\Vendor\Models\Vendor;

class VendorPolicy
{
    public function viewAny(User $user): bool
    {
        return $user->hasPermission('vendors', 'view');
    }

    public function view(User $user, Vendor $vendor): bool
    {
        return $user->hasPermission('vendors', 'view');
    }

    public function create(User $user): bool
    {
        return $user->hasPermission('vendors', 'create');
    }

    public function update(User $user, Vendor $vendor): bool
    {
        return $user->hasPermission('vendors', 'edit');
    }

    public function delete(User $user, Vendor $vendor): bool
    {
        return $user->hasPermission('vendors', 'delete');
    }
}
