<?php

use Illuminate\Foundation\Testing\RefreshDatabase;
use Modules\DispatchOperation\Models\Drop;
use Modules\DispatchOperation\Services\DropService;
use Modules\User\Models\Permission;
use Modules\User\Models\Role;
use Modules\User\Models\User;
use Tests\TestCase;

use function Pest\Laravel\actingAs;
use function Pest\Laravel\delete;
use function Pest\Laravel\post;
use function Pest\Laravel\put;

uses(TestCase::class, RefreshDatabase::class);

if (! function_exists('makeUserWithDispatchPermissions')) {
    function makeUserWithDispatchPermissions(array $permissions = []): User
    {
        static $counter = 0;
        $counter++;

        $role = Role::create([
            'name' => "Role {$counter}",
            'slug' => "role-{$counter}",
            'description' => 'Test role',
        ]);

        $permission = Permission::firstOrCreate(
            ['slug' => 'dispatch-operations'],
            ['name' => 'Dispatch Operations']
        );

        $role->permissions()->attach($permission->id, array_merge(
            ['view' => false, 'create' => false, 'edit' => false, 'delete' => false],
            $permissions
        ));

        return User::factory()->create(['role_id' => $role->id]);
    }
}

// ── store (drops.store) ───────────────────────────────────────────────────────

test('store: user with create permission can create a drop', function () {
    $user = makeUserWithDispatchPermissions(['create' => true]);

    $mockService = Mockery::mock(DropService::class);
    $mockService->shouldReceive('createDrop')->once()->andReturn(new Drop);
    app()->instance(DropService::class, $mockService);

    $payload = [
        'trip_leg_id' => 1,
        'location_id' => 2,
        'parcel_count' => 5,
    ];

    actingAs($user)
        ->from('/dispatchoperations/1')
        ->post(route('drops.store'), $payload)
        ->assertRedirect('/dispatchoperations/1')
        ->assertSessionHas('success', 'Drop added successfully.');
});

test('store: user without create permission is forbidden', function () {
    $user = makeUserWithDispatchPermissions(['create' => false]);

    $payload = [
        'trip_leg_id' => 1,
        'location_id' => 2,
        'parcel_count' => 5,
    ];

    actingAs($user)
        ->post(route('drops.store'), $payload)
        ->assertForbidden();
});

test('store: unauthenticated user is redirected to login', function () {
    post(route('drops.store'), ['trip_leg_id' => 1, 'location_id' => 2])
        ->assertRedirect(route('login'));
});

// ── update (drops.update) ─────────────────────────────────────────────────────

test('update: user with edit permission can update a drop', function () {
    $user = makeUserWithDispatchPermissions(['edit' => true]);

    $mockService = Mockery::mock(DropService::class);
    $mockService->shouldReceive('updateDrop')->once()->andReturn(new Drop);
    app()->instance(DropService::class, $mockService);

    $payload = [
        'location_id' => 3,
        'parcel_count' => 8,
    ];

    actingAs($user)
        ->from('/dispatchoperations/1')
        ->put(route('drops.update', ['drop' => 1]), $payload)
        ->assertRedirect('/dispatchoperations/1')
        ->assertSessionHas('success', 'Drop updated successfully.');
});

test('update: user without edit permission is forbidden', function () {
    $user = makeUserWithDispatchPermissions(['edit' => false]);

    $payload = [
        'location_id' => 3,
        'parcel_count' => 8,
    ];

    actingAs($user)
        ->put(route('drops.update', ['drop' => 1]), $payload)
        ->assertForbidden();
});

test('update: unauthenticated user is redirected to login', function () {
    put(route('drops.update', ['drop' => 1]), ['location_id' => 3])
        ->assertRedirect(route('login'));
});

// ── destroy (drops.destroy) ───────────────────────────────────────────────────

test('destroy: user with delete permission can delete a drop', function () {
    $user = makeUserWithDispatchPermissions(['delete' => true]);

    $mockService = Mockery::mock(DropService::class);
    $mockService->shouldReceive('deleteDrop')->once()->with(1)->andReturn(true);
    app()->instance(DropService::class, $mockService);

    actingAs($user)
        ->from('/dispatchoperations/1')
        ->delete(route('drops.destroy', ['drop' => 1]))
        ->assertRedirect('/dispatchoperations/1')
        ->assertSessionHas('success', 'Drop deleted successfully.');
});

test('destroy: user without delete permission is forbidden', function () {
    $user = makeUserWithDispatchPermissions(['delete' => false]);

    actingAs($user)
        ->delete(route('drops.destroy', ['drop' => 1]))
        ->assertForbidden();
});

test('destroy: unauthenticated user is redirected to login', function () {
    delete(route('drops.destroy', ['drop' => 1]))
        ->assertRedirect(route('login'));
});
