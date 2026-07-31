<?php

namespace Modules\User\Database\Seeders;

use Illuminate\Database\Seeder;
use Modules\User\Models\Permission;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $permissions = [
            ['name' => 'Users', 'slug' => 'users'],
            ['name' => 'Roles', 'slug' => 'roles'],
            ['name' => 'Clients', 'slug' => 'clients'],
            ['name' => 'Planning', 'slug' => 'planning'],
            ['name' => 'Dispatch Operations', 'slug' => 'dispatch-operations'],
            ['name' => 'Vendors', 'slug' => 'vendors'],
        ];

        foreach ($permissions as $permission) {
            Permission::firstOrCreate($permission);
        }
    }
}
