<?php

use Illuminate\Foundation\Testing\RefreshDatabase;
use Modules\User\Classes\Data\Request\CreateRoleData;
use Modules\User\Classes\Data\Request\CreateUserData;
use Modules\User\Classes\Data\Response\RoleData;
use Modules\User\Classes\Data\Response\UserData;
use Modules\User\Models\Permission;
use Modules\User\Models\Role;
use Modules\User\Models\User;
use Modules\User\Services\RolePermissionService;
use Modules\User\Services\UserService;

uses(RefreshDatabase::class);

function createUserAdminUser(): User
{
    $role = Role::create(['name' => 'Admin', 'slug' => 'admin', 'description' => 'Admin Role']);
    $perm = Permission::create(['name' => 'Users', 'slug' => 'users']);
    $role->permissions()->attach($perm->id, [
        'view' => true,
        'create' => true,
        'edit' => true,
        'delete' => true,
    ]);

    return User::factory()->create(['role_id' => $role->id]);
}

it('creates user and role via services', function () {
    $roleService = app(RolePermissionService::class);
    $userService = app(UserService::class);

    $roleData = CreateRoleData::from([
        'name' => 'Dispatcher',
        'slug' => 'dispatcher',
        'description' => 'Handles dispatches',
    ]);

    $role = $roleService->createRole($roleData);

    expect($role)->toBeInstanceOf(RoleData::class)
        ->and($role->name)->toBe('Dispatcher');

    $userData = CreateUserData::from([
        'name' => 'Alice Operations',
        'email' => 'alice@test.com',
        'role_id' => $role->id,
    ]);

    $result = $userService->createUser($userData);

    expect($result)->toHaveKeys(['user', 'plainPassword'])
        ->and($result['user'])->toBeInstanceOf(UserData::class)
        ->and($result['user']->name)->toBe('Alice Operations');
});

it('allows authorized users to view users index via HTTP', function () {
    $user = createUserAdminUser();

    $response = $this->actingAs($user)->get(route('user.index'));
    $response->assertStatus(200);
});
