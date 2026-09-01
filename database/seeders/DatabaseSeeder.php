<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Modules\User\Database\Seeders\PermissionSeeder;
use Modules\User\Database\Seeders\RoleSeeder;
use Modules\User\Models\Role;
use Modules\User\Models\User;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // 1. Seed Permissions
        $this->call(PermissionSeeder::class);

        // 2. Seed Roles (which syncs all permissions to the admin role)
        $this->call(RoleSeeder::class);

        // 3. Find the admin role
        $adminRole = Role::where('slug', 'admin')->first();

        // 4. Create root user with admin role
        User::factory()->create([
            'name' => 'root',
            'email' => 'root@gmail.com',
            'role_id' => $adminRole?->id,
        ]);

    }
}
