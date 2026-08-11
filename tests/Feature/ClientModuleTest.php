<?php

use Illuminate\Foundation\Testing\RefreshDatabase;
use Modules\Client\Classes\Data\Request\CreateBusinessUnitData;
use Modules\Client\Classes\Data\Request\CreateClientData;
use Modules\Client\Classes\Data\Request\CreateDestinationData;
use Modules\Client\Classes\Data\Response\ClientData;
use Modules\Client\Classes\Data\Response\DestinationData;
use Modules\Client\Services\ClientService;
use Modules\User\Models\Permission;
use Modules\User\Models\Role;
use Modules\User\Models\User;

uses(RefreshDatabase::class);

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

it('creates client, business unit, and destination via ClientService', function () {
    $service = app(ClientService::class);

    $clientData = CreateClientData::from([
        'name' => 'Logistics Corp',
        'email' => 'contact@logistics.com',
        'phone_number' => '123-456-7890',
        'touchpoint' => 'Main Office',
        'active' => true,
    ]);

    $client = $service->createClient($clientData);

    expect($client)->toBeInstanceOf(ClientData::class)
        ->and($client->name)->toBe('Logistics Corp')
        ->and($client->email)->toBe('contact@logistics.com');

    $buData = CreateBusinessUnitData::from([
        'client_id' => $client->id,
        'name' => 'North Hub Unit',
        'touchpoint' => 'Building A',
        'active' => true,
    ]);

    $service->createBusinessUnit($buData);

    $this->assertDatabaseHas('business_units', [
        'client_id' => $client->id,
        'name' => 'North Hub Unit',
    ]);

    $destData = CreateDestinationData::from([
        'client_id' => $client->id,
        'name' => 'Metro Warehouse',
    ]);

    $dest = $service->createDestination($destData);

    expect($dest)->toBeInstanceOf(DestinationData::class)
        ->and($dest->name)->toBe('Metro Warehouse')
        ->and($dest->clientId)->toBe($client->id);
});

it('allows authorized users to view clients via HTTP', function () {
    $user = createClientAdminUser();

    $response = $this->actingAs($user)->get(route('client.index'));
    $response->assertStatus(200);
});
