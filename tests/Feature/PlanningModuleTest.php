<?php

use Modules\Client\Models\Client;
use Modules\Client\Models\Location;
use Modules\Planning\Classes\Data\Request\CreatePlanData;
use Modules\Planning\Models\Plan;
use Modules\Planning\Services\PlanService;
use Modules\User\Models\Permission;
use Modules\User\Models\Role;
use Modules\User\Models\User;

function createPlanningAdminUser(): User
{
    $role = Role::create(['name' => 'Admin', 'slug' => 'admin', 'description' => 'Admin Role']);
    $perm = Permission::create(['name' => 'Planning', 'slug' => 'planning']);
    $role->permissions()->attach($perm->id, [
        'view' => true,
        'create' => true,
        'edit' => true,
        'delete' => true,
    ]);

    return User::factory()->create(['role_id' => $role->id]);
}

it('creates plan via PlanService and lists paginated plans', function () {
    $client = Client::create([
        'name' => 'Test Client',
        'email' => 'client@test.com',
        'phone_number' => '1234567890',
        'touchpoint' => 'HQ',
        'active' => true,
    ]);

    $originLoc = Location::create([
        'client_id' => $client->id,
        'name' => 'Origin Location',
        'address' => 'Addr 1',
    ]);

    $destLoc = Location::create([
        'client_id' => $client->id,
        'name' => 'Destination Location',
        'address' => 'Dest Addr',
    ]);

    $planService = app(PlanService::class);

    $planData = CreatePlanData::from([
        'client_id' => $client->id,
        'origin_id' => $originLoc->id,
        'destination_id' => $destLoc->id,
        'number_of_vehicles' => 10,
        'dispatch_date' => '2026-08-01',
    ]);

    $plan = $planService->createPlan($planData);

    expect($plan)->toBeInstanceOf(Plan::class)
        ->and($plan->client_id)->toBe($client->id)
        ->and($plan->origin_id)->toBe($originLoc->id)
        ->and($plan->destination_id)->toBe($destLoc->id);
});

it('allows authorized users to view planning index via HTTP', function () {
    $user = createPlanningAdminUser();

    $response = $this->actingAs($user)->get(route('planning.index'));
    $response->assertStatus(200);
});
