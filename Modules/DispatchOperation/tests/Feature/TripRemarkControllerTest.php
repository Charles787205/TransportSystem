<?php

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Modules\DispatchOperation\Models\TripRemark;
use Modules\DispatchOperation\Services\TripRemarkService;
use Modules\User\Models\Permission;
use Modules\User\Models\Role;
use Modules\User\Models\User;
use Tests\TestCase;

use function Pest\Laravel\actingAs;
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

function createDummyTripLegForRemarks(): int
{
    DB::table('vendors')->insertOrIgnore(['id' => 1, 'name' => 'Test Vendor', 'email' => 'test@vendor.com', 'phone_number' => '12345', 'created_at' => now(), 'updated_at' => now()]);
    DB::table('drivers')->insertOrIgnore(['id' => 1, 'vendor_id' => 1, 'full_name' => 'John Doe', 'gender' => 'Male', 'phone_number' => '12345', 'status' => 'active', 'created_at' => now(), 'updated_at' => now()]);
    DB::table('vehicles')->insertOrIgnore([
        'id' => 1, 'vendor_id' => 1, 'driver_id' => 1, 'plate_number' => 'ABC-123', 'type' => 'Type1', 'make' => 'Make1', 'engine_number' => 'E1', 'chassis_number' => 'C1', 'year_model' => '2020', 'owners_name' => 'Owner', 'registered_address' => 'Address', 'is_active' => 1, 'created_at' => now(), 'updated_at' => now(),
    ]);
    DB::table('clients')->insertOrIgnore(['id' => 1, 'name' => 'Test Client', 'email' => 'test@client.com', 'phone_number' => '54321', 'active' => 1, 'created_at' => now(), 'updated_at' => now()]);
    DB::table('dispatches')->insertOrIgnore([
        'id' => 1,
        'client_id' => 1,
        'vehicle_id' => 1,
        'driver_id' => 1,
        'service_type' => 'linehaul',
        'dispatch_date' => now()->toDateString(),
        'assigned_call_time' => '08:00:00',
        'is_reversed' => 0,
        'created_at' => now(),
        'updated_at' => now(),
    ]);
    DB::table('trip_legs')->insertOrIgnore([
        'id' => 1,
        'dispatch_id' => 1,
        'trip_sequence' => 1,
        'linehaul_trip_no' => 'LH-REMARK-TEST',
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    return 1;
}

// ── store (trip-remarks.store) ────────────────────────────────────────────────

test('store: user with create permission can create a trip remark', function () {
    $tripLegId = createDummyTripLegForRemarks();
    $user = makeUserWithDispatchPermissions(['create' => true]);

    $mockService = Mockery::mock(TripRemarkService::class);
    $mockService->shouldReceive('createRemark')->once()->andReturn(new TripRemark);
    app()->instance(TripRemarkService::class, $mockService);

    $payload = [
        'trip_leg_id' => $tripLegId,
        'remark' => 'Cargo inspected and verified.',
    ];

    actingAs($user)
        ->from('/dispatchoperations/1')
        ->post(route('trip-remarks.store'), $payload)
        ->assertRedirect('/dispatchoperations/1')
        ->assertSessionHas('success', 'Trip remark added successfully.');
});

test('store: user without create permission is forbidden', function () {
    $tripLegId = createDummyTripLegForRemarks();
    $user = makeUserWithDispatchPermissions(['create' => false]);

    $payload = [
        'trip_leg_id' => $tripLegId,
        'remark' => 'Cargo inspected and verified.',
    ];

    actingAs($user)
        ->post(route('trip-remarks.store'), $payload)
        ->assertForbidden();
});

test('store: unauthenticated user is redirected to login', function () {
    $tripLegId = createDummyTripLegForRemarks();

    post(route('trip-remarks.store'), [
        'trip_leg_id' => $tripLegId,
        'remark' => 'Cargo inspected and verified.',
    ])->assertRedirect(route('login'));
});
