<?php

use Illuminate\Foundation\Testing\RefreshDatabase;
use Modules\DispatchOperation\Models\ReturnTrip;
use Modules\DispatchOperation\Services\ReturnTripService;
use Modules\User\Models\Permission;
use Modules\User\Models\Role;
use Modules\User\Models\User;
use Tests\TestCase;

use function Pest\Laravel\actingAs;
use function Pest\Laravel\delete;
use function Pest\Laravel\post;

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

// ── store (return-trips.store) ────────────────────────────────────────────────

test('store: user with create permission can create a return trip', function () {
    $user = makeUserWithDispatchPermissions(['create' => true]);

    $mockService = Mockery::mock(ReturnTripService::class);
    $mockService->shouldReceive('createReturnTrip')->once()->andReturn(new ReturnTrip);
    app()->instance(ReturnTripService::class, $mockService);

    $payload = [
        'dispatch_id' => 1,
        'origin_location_id' => 1,
        'destination_location_id' => 2,
    ];

    actingAs($user)
        ->from('/dispatchoperations/1')
        ->post(route('return-trips.store'), $payload)
        ->assertRedirect('/dispatchoperations/1')
        ->assertSessionHas('success', 'Return trip created successfully.');
});

test('store: user without create permission is forbidden', function () {
    $user = makeUserWithDispatchPermissions(['create' => false]);

    $payload = [
        'dispatch_id' => 1,
        'origin_location_id' => 1,
        'destination_location_id' => 2,
    ];

    actingAs($user)
        ->post(route('return-trips.store'), $payload)
        ->assertForbidden();
});

test('store: unauthenticated user is redirected to login', function () {
    post(route('return-trips.store'), [
        'dispatch_id' => 1,
        'origin_location_id' => 1,
        'destination_location_id' => 2,
    ])->assertRedirect(route('login'));
});

// ── destroy (return-trips.destroy) ────────────────────────────────────────────

test('destroy: user with delete permission can delete a return trip', function () {
    $user = makeUserWithDispatchPermissions(['delete' => true]);

    $mockService = Mockery::mock(ReturnTripService::class);
    $mockService->shouldReceive('deleteReturnTrip')->once()->with(1)->andReturn(true);
    app()->instance(ReturnTripService::class, $mockService);

    actingAs($user)
        ->from('/dispatchoperations/1')
        ->delete(route('return-trips.destroy', ['returnTrip' => 1]))
        ->assertRedirect('/dispatchoperations/1')
        ->assertSessionHas('success', 'Return trip deleted successfully.');
});

test('destroy: user without delete permission is forbidden', function () {
    $user = makeUserWithDispatchPermissions(['delete' => false]);

    actingAs($user)
        ->delete(route('return-trips.destroy', ['returnTrip' => 1]))
        ->assertForbidden();
});

test('destroy: unauthenticated user is redirected to login', function () {
    delete(route('return-trips.destroy', ['returnTrip' => 1]))
        ->assertRedirect(route('login'));
});
