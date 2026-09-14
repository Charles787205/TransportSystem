<?php

use Illuminate\Foundation\Testing\RefreshDatabase;
use Modules\Core\Classes\Data\Response\SelectOptionData;
use Modules\DispatchOperation\Classes\Data\Response\DispatchFormOptionsData;
use Modules\DispatchOperation\Classes\Data\Response\LocationOptionData;
use Modules\DispatchOperation\Classes\Data\Response\ResourceStatusOptionData;
use Modules\DispatchOperation\Services\DispatchService;
use Modules\User\Models\Permission;
use Modules\User\Models\Role;
use Modules\User\Models\User;
use Spatie\LaravelData\DataCollection;
use Tests\TestCase;

use function Pest\Laravel\actingAs;
use function Pest\Laravel\get;

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

// ── index (dispatch-operations.form-options) ─────────────────────────────────

test('index: user with view permission can access dispatch form options', function () {
    $user = makeUserWithDispatchPermissions(['view' => true]);

    $mockOptions = new DispatchFormOptionsData(
        vehicles: new DataCollection(ResourceStatusOptionData::class, []),
        drivers: new DataCollection(ResourceStatusOptionData::class, []),
        clients: new DataCollection(SelectOptionData::class, []),
        locations: new DataCollection(LocationOptionData::class, []),
    );

    $mockService = Mockery::mock(DispatchService::class);
    $mockService->shouldReceive('getDispatchFormOptions')
        ->once()
        ->andReturn($mockOptions);
    app()->instance(DispatchService::class, $mockService);

    actingAs($user)
        ->get(route('dispatch-operations.form-options'))
        ->assertOk()
        ->assertJsonStructure(['vehicles', 'drivers', 'clients', 'locations']);
});

test('index: user without view permission is forbidden from accessing dispatch form options', function () {
    $user = makeUserWithDispatchPermissions(['view' => false]);

    actingAs($user)
        ->get(route('dispatch-operations.form-options'))
        ->assertForbidden();
});

test('index: unauthenticated user is redirected to login', function () {
    get(route('dispatch-operations.form-options'))
        ->assertRedirect(route('login'));
});
