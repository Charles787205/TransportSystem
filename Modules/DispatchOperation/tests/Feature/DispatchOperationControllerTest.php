<?php

use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Modules\Client\Classes\Data\Response\ClientData;
use Modules\Client\Classes\Data\Response\LocationData;
use Modules\Client\Services\ClientService;
use Modules\DispatchOperation\Classes\Data\Response\DispatchData;
use Modules\DispatchOperation\Classes\Data\Response\TripLegData;
use Modules\DispatchOperation\Enums\ServiceType;
use Modules\DispatchOperation\Models\Dispatch;
use Modules\DispatchOperation\Services\DispatchService;
use Modules\User\Models\Permission;
use Modules\User\Models\Role;
use Modules\User\Models\User;
use Spatie\LaravelData\DataCollection;
use Tests\TestCase;

use function Pest\Laravel\actingAs;
use function Pest\Laravel\get;

uses(TestCase::class, RefreshDatabase::class);

/**
 * Create a user with a role that has the specified dispatch-operations permissions.
 *
 * @param  array{view?: bool, create?: bool, edit?: bool, delete?: bool}  $permissions
 */
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

// ── index ─────────────────────────────────────────────────────────────────────

test('index: user with view permission sees dispatch list', function () {
    $user = makeUserWithDispatchPermissions(['view' => true]);

    actingAs($user)
        ->get(route('dispatchoperation.index'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('dispatchoperations/index')
            ->has('dispatches')
            ->has('metrics')
            ->has('filters')
        );
});

test('index: user without view permission is forbidden', function () {
    $user = makeUserWithDispatchPermissions(['view' => false]);

    actingAs($user)
        ->get(route('dispatchoperation.index'))
        ->assertForbidden();
});

test('index: unauthenticated user is redirected to login', function () {
    get(route('dispatchoperation.index'))
        ->assertRedirect(route('login'));
});

// ── create ────────────────────────────────────────────────────────────────────

test('create: user with create permission sees the create view', function () {
    $user = makeUserWithDispatchPermissions(['create' => true]);

    actingAs($user)
        ->get(route('dispatchoperation.create'))
        ->assertOk()
        ->assertViewIs('dispatchoperation::create');
});

test('create: user without create permission is forbidden', function () {
    $user = makeUserWithDispatchPermissions(['create' => false]);

    actingAs($user)
        ->get(route('dispatchoperation.create'))
        ->assertForbidden();
});

// ── store ─────────────────────────────────────────────────────────────────────

test('store: user with create permission can create a dispatch', function () {
    $user = makeUserWithDispatchPermissions(['create' => true]);

    $payload = [
        'client_id' => 1,
        'vehicle_id' => 1,
        'driver_id' => 1,
        'service_type' => 'oncall',
        'dispatch_date' => now()->format('Y-m-d'),
    ];

    $mockService = Mockery::mock(DispatchService::class);
    $mockService->shouldReceive('createDispatch')->once();
    app()->instance(DispatchService::class, $mockService);

    actingAs($user)
        ->post(route('dispatchoperation.store'), $payload)
        ->assertRedirect()
        ->assertSessionHas('success', 'Dispatch Created');
});

test('store: user without create permission is forbidden', function () {
    $user = makeUserWithDispatchPermissions(['create' => false]);

    // Pass valid payload shape so DTO validation doesn't fire before the Gate check
    $payload = [
        'client_id' => 1,
        'vehicle_id' => 1,
        'driver_id' => 1,
        'service_type' => 'oncall',
        'dispatch_date' => now()->format('Y-m-d'),
    ];

    actingAs($user)
        ->post(route('dispatchoperation.store'), $payload)
        ->assertForbidden();
});

// ── show ──────────────────────────────────────────────────────────────────────

test('show: user with view permission can see a dispatch', function () {
    $user = makeUserWithDispatchPermissions(['view' => true]);

    $dispatchModel = new Dispatch(['client_id' => 1]);
    $dispatchDetails = new DispatchData(
        id: 1,
        clientId: 1,
        vehicleId: 1,
        driverId: 1,
        serviceType: ServiceType::ONCALL,
        touchpoint: null,
        dispatchDate: '2023-01-01',
        assignedCallTime: '08:00',
        odometerStart: 0,
        odometerEnd: 0,
        updatedAt: '2023-01-01',
        createdAt: '2023-01-01',
        driver: null,
        client: new ClientData(
            id: 1,
            email: 'test@client.com',
            name: 'Test Client',
            phoneNumber: '123',
            active: '1'
        ),
        vehicle: null,
        tripLegs: new DataCollection(TripLegData::class, [])
    );
    $locations = new DataCollection(LocationData::class, []);

    $mockService = Mockery::mock(DispatchService::class);
    $mockService->shouldReceive('getDispatchModel')->with(1)->andReturn($dispatchModel);
    $mockService->shouldReceive('getDispatchDetails')->with(1)->andReturn($dispatchDetails);
    app()->instance(DispatchService::class, $mockService);

    $mockClientService = Mockery::mock(ClientService::class);
    $mockClientService->shouldReceive('getClientLocations')->with(1)->andReturn($locations);
    app()->instance(ClientService::class, $mockClientService);

    actingAs($user)
        ->get(route('dispatchoperation.show', 1))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('dispatchoperations/show')
            ->has('dispatch')
            ->has('locations')
        );
});

test('show: user without view permission is forbidden', function () {
    $user = makeUserWithDispatchPermissions(['view' => false]);

    $dispatchModel = new Dispatch;

    $mockService = Mockery::mock(DispatchService::class);
    $mockService->shouldReceive('getDispatchModel')->with(1)->andReturn($dispatchModel);
    app()->instance(DispatchService::class, $mockService);

    actingAs($user)
        ->get(route('dispatchoperation.show', 1))
        ->assertForbidden();
});

// ── edit ──────────────────────────────────────────────────────────────────────

test('edit: user with edit permission can see the edit view', function () {
    $user = makeUserWithDispatchPermissions(['edit' => true]);

    $dispatchModel = new Dispatch;

    $mockService = Mockery::mock(DispatchService::class);
    $mockService->shouldReceive('getDispatchModel')->with(1)->andReturn($dispatchModel);
    app()->instance(DispatchService::class, $mockService);

    actingAs($user)
        ->get(route('dispatchoperation.edit', 1))
        ->assertOk()
        ->assertViewIs('dispatchoperation::edit');
});

test('edit: user without edit permission is forbidden', function () {
    $user = makeUserWithDispatchPermissions(['edit' => false]);

    $dispatchModel = new Dispatch;

    $mockService = Mockery::mock(DispatchService::class);
    $mockService->shouldReceive('getDispatchModel')->with(1)->andReturn($dispatchModel);
    app()->instance(DispatchService::class, $mockService);

    actingAs($user)
        ->get(route('dispatchoperation.edit', 1))
        ->assertForbidden();
});

// ── update ────────────────────────────────────────────────────────────────────

test('update: user with edit permission can update a dispatch', function () {
    $user = makeUserWithDispatchPermissions(['edit' => true]);

    $dispatchModel = new Dispatch;

    $mockService = Mockery::mock(DispatchService::class);
    $mockService->shouldReceive('getDispatchModel')->with(1)->andReturn($dispatchModel);
    app()->instance(DispatchService::class, $mockService);

    actingAs($user)
        ->put(route('dispatchoperation.update', 1), [])
        ->assertOk();
});

test('update: user without edit permission is forbidden', function () {
    $user = makeUserWithDispatchPermissions(['edit' => false]);

    $dispatchModel = new Dispatch;

    $mockService = Mockery::mock(DispatchService::class);
    $mockService->shouldReceive('getDispatchModel')->with(1)->andReturn($dispatchModel);
    app()->instance(DispatchService::class, $mockService);

    actingAs($user)
        ->put(route('dispatchoperation.update', 1), [])
        ->assertForbidden();
});

// ── destroy ───────────────────────────────────────────────────────────────────

test('destroy: user with delete permission can delete a dispatch', function () {
    $user = makeUserWithDispatchPermissions(['delete' => true]);

    $dispatchModel = new Dispatch;

    $mockService = Mockery::mock(DispatchService::class);
    $mockService->shouldReceive('getDispatchModel')->with(1)->andReturn($dispatchModel);
    app()->instance(DispatchService::class, $mockService);

    actingAs($user)
        ->delete(route('dispatchoperation.destroy', 1))
        ->assertOk();
});

test('destroy: user without delete permission is forbidden', function () {
    $user = makeUserWithDispatchPermissions(['delete' => false]);

    $dispatchModel = new Dispatch;

    $mockService = Mockery::mock(DispatchService::class);
    $mockService->shouldReceive('getDispatchModel')->with(1)->andReturn($dispatchModel);
    app()->instance(DispatchService::class, $mockService);

    actingAs($user)
        ->delete(route('dispatchoperation.destroy', 1))
        ->assertForbidden();
});
