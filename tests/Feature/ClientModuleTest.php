<?php

use Modules\Client\Classes\Data\Request\CreateClientData;
use Modules\Client\Models\Location;
use Modules\Client\Services\ClientService;
use Modules\User\Models\Permission;
use Modules\User\Models\Role;
use Modules\User\Models\User;

function createClientAdminUser(): User
{
    $role = Role::create(['name' => 'Admin', 'slug' => 'admin', 'description' => 'Admin Role']);
    $perm = Permission::create(['name' => 'Clients', 'slug' => 'clients']);
    $role->permissions()->attach($perm->id, [
        'view' => true,
        'create' => true,
        'edit' => true,
        'delete' => true,
    ]);

    return User::factory()->create(['role_id' => $role->id]);
}

it('creates client and location via ClientService', function () {
    $service = app(ClientService::class);

    $clientData = CreateClientData::from([
        'name' => 'Logistics Corp',
        'email' => 'contact@logistics.com',
        'phone_number' => '123-456-7890',
        'touchpoint' => 'Main Office',
        'active' => true,
    ]);

    $client = $service->createClient($clientData);

    $location = Location::create([
        'client_id' => $client->id,
        'name' => 'North Hub Depot',
        'touchpoint' => 'FM',
        'type' => 'BU',
        'address' => '100 North Rd',
    ]);

    $this->assertDatabaseHas('locations', [
        'client_id' => $client->id,
        'name' => 'North Hub Depot',
        'touchpoint' => 'FM',
    ]);
});

it('allows authorized users to view clients via HTTP', function () {
    $user = createClientAdminUser();

    $response = $this->actingAs($user)->get(route('client.index'));
    $response->assertStatus(200);
});
