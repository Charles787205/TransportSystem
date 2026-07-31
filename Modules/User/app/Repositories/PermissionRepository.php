<?php

namespace Modules\User\Repositories;

use Modules\User\Models\Permission;

class PermissionRepository
{
    public function getPermissions()
    {
        return Permission::get();
    }
}
