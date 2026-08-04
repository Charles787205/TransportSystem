<?php

namespace Modules\User\Database\Seeders;

use Illuminate\Database\Seeder;
use Modules\User\Models\Permission;
use Modules\User\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = [
            [
                'name' => 'Administrator',
                'slug' => 'admin',
                'description' => 'System Administrator',
            ],
        ];

        foreach ($roles as $role) {
            $roleModel = Role::updateOrCreate(['slug' => $role['slug']], $role);
            if ($roleModel->slug === 'admin') {
                $permissions = Permission::all();
                $syncData = [];
                foreach ($permissions as $permission) {
                    $syncData[$permission->id] = [
                        'view' => true,
                        'create' => true,
                        'edit' => true,
                        'delete' => true,
                    ];
                }
                $roleModel->permissions()->sync($syncData);
            }
        }
    }
}
