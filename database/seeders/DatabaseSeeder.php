<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Modules\Client\Database\Seeders\ClientDatabaseSeeder;
use Modules\DispatchOperation\Database\Seeders\DispatchOperationDatabaseSeeder;
use Modules\Planning\Database\Seeders\PlanningDatabaseSeeder;
use Modules\User\Database\Seeders\PermissionSeeder;
use Modules\User\Database\Seeders\RoleSeeder;
use Modules\User\Models\Role;
use Modules\User\Models\User;
use Modules\Vendor\Database\Seeders\VendorDatabaseSeeder;

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

        // 5. Seed Client Module
        $this->call(ClientDatabaseSeeder::class);

        // 6. Seed Vendor Module
        $this->call(VendorDatabaseSeeder::class);

        // 7. Seed Planning Module
        $this->call(PlanningDatabaseSeeder::class);

        // 8. Seed DispatchOperation Module
        $this->call(DispatchOperationDatabaseSeeder::class);
    }
}
