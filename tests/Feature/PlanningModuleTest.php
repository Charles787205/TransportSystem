<?php

use Illuminate\Foundation\Testing\RefreshDatabase;
use Modules\Client\Models\BusinessUnit;
use Modules\Client\Models\Client;
use Modules\Client\Models\Destination;
use Modules\Planning\Classes\Data\Request\CreatePlanData;
use Modules\Planning\Classes\Data\Response\PaginatedPlanData;
use Modules\Planning\Models\Plan;
use Modules\Planning\Services\PlanService;
use Modules\User\Models\Permission;
use Modules\User\Models\Role;
use Modules\User\Models\User;

uses(RefreshDatabase::class);

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

    $bu = BusinessUnit::create([
        'client_id' => $client->id,
        'name' => 'BU 1',
        'touchpoint' => 'TP 1',
        'active' => true,
    ]);

    $dest = Destination::create([
        'client_id' => $client->id,
        'name' => 'Dest 1',
    ]);

    $planService = app(PlanService::class);

    $planData = CreatePlanData::from([
        'business_unit_id' => $bu->id,
        'destination_id' => $dest->id,
        'number_of_vehicles' => 10,
        'dispatch_date' => '2026-08-01',
    ]);

    $plan = $planService->createPlan($planData);

    expect($plan)->toBeInstanceOf(Plan::class)
        ->and($plan->business_unit_id)->toBe($bu->id)
        ->and($plan->destination_id)->toBe($dest->id);

    $paginated = $planService->getPaginatedPlan();

    expect($paginated)->toBeInstanceOf(PaginatedPlanData::class)
        ->and($paginated->total)->toBe(1);
});

it('allows authorized users to view planning index via HTTP', function () {
    $user = createPlanningAdminUser();

    $response = $this->actingAs($user)->get(route('planning.index'));
    $response->assertStatus(200);
});
