<?php

use Illuminate\Foundation\Testing\RefreshDatabase;
use Modules\DispatchOperation\Models\TripLeg;
use Modules\DispatchOperation\Services\TripLegService;
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

// ── store (triplegs.store) ───────────────────────────────────────────────────

test('store: user with create permission can create a trip leg', function () {
    $user = makeUserWithDispatchPermissions(['create' => true]);

    $mockService = Mockery::mock(TripLegService::class);
    $mockService->shouldReceive('addTripLeg')->once()->andReturn(new TripLeg);
    app()->instance(TripLegService::class, $mockService);

    $payload = [
        'dispatch_id' => 1,
        'linehaul_trip_no' => 'LH-100',
    ];

    actingAs($user)
        ->from('/dispatchoperations/1')
        ->post(route('triplegs.store'), $payload)
        ->assertRedirect('/dispatchoperations/1')
        ->assertSessionHas('success', 'Trip leg added');
});

test('store: user without create permission is forbidden', function () {
    $user = makeUserWithDispatchPermissions(['create' => false]);

    $payload = [
        'dispatch_id' => 1,
        'linehaul_trip_no' => 'LH-100',
    ];

    actingAs($user)
        ->post(route('triplegs.store'), $payload)
        ->assertForbidden();
});

test('store: unauthenticated user is redirected to login', function () {
    post(route('triplegs.store'), ['dispatch_id' => 1])
        ->assertRedirect(route('login'));
});

// ── update (triplegs.update) ─────────────────────────────────────────────────

test('update: user with edit permission can update a trip leg', function () {
    $user = makeUserWithDispatchPermissions(['edit' => true]);

    $mockService = Mockery::mock(TripLegService::class);
    $mockService->shouldReceive('editTripLeg')->once()->andReturn(new TripLeg);
    app()->instance(TripLegService::class, $mockService);

    $payload = [
        'total_parcel' => 42,
    ];

    actingAs($user)
        ->from('/dispatchoperations/1')
        ->put(route('triplegs.update', ['tripleg' => 1]), $payload)
        ->assertRedirect('/dispatchoperations/1')
        ->assertSessionHas('success', 'Trip data updated');
});

test('update: user without edit permission is forbidden', function () {
    $user = makeUserWithDispatchPermissions(['edit' => false]);

    $payload = [
        'total_parcel' => 42,
    ];

    actingAs($user)
        ->put(route('triplegs.update', ['tripleg' => 1]), $payload)
        ->assertForbidden();
});

test('update: unauthenticated user is redirected to login', function () {
    put(route('triplegs.update', ['tripleg' => 1]), ['total_parcel' => 42])
        ->assertRedirect(route('login'));
});

// ── destroy (triplegs.destroy) ───────────────────────────────────────────────

test('destroy: user with delete permission can delete a trip leg', function () {
    $user = makeUserWithDispatchPermissions(['delete' => true]);

    $mockService = Mockery::mock(TripLegService::class);
    $mockService->shouldReceive('deleteTripLeg')->once()->with(1)->andReturn(true);
    app()->instance(TripLegService::class, $mockService);

    actingAs($user)
        ->from('/dispatchoperations/1')
        ->delete(route('triplegs.destroy', ['tripleg' => 1]))
        ->assertRedirect('/dispatchoperations/1')
        ->assertSessionHas('success', 'Trip leg deleted');
});

test('destroy: user without delete permission is forbidden', function () {
    $user = makeUserWithDispatchPermissions(['delete' => false]);

    actingAs($user)
        ->delete(route('triplegs.destroy', ['tripleg' => 1]))
        ->assertForbidden();
});

test('destroy: unauthenticated user is redirected to login', function () {
    delete(route('triplegs.destroy', ['tripleg' => 1]))
        ->assertRedirect(route('login'));
});
