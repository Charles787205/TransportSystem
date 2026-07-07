<?php

namespace Modules\User\Database\Seeders;
use Modules\User\Models\Permission;
use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $permissions = [
            ['name' => "Users", 'slug' => 'users'],
            ['name' => 'Roles', 'slug' => 'roles'],    
        ];

        foreach ($permissions as $permission) {
            Permission::firstOrCreate($permission);
        }
    }
}
