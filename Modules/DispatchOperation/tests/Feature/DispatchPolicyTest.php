<?php

use Illuminate\Foundation\Testing\RefreshDatabase;
use Modules\DispatchOperation\Models\Dispatch;
use Modules\User\Models\Permission;
use Modules\User\Models\Role;
use Modules\User\Models\User;
use Modules\User\Policies\DispatchPolicy;
use Tests\TestCase;

uses(TestCase::class, RefreshDatabase::class);

/**
 * Helper to create a user with a role that has the given dispatch-operations permissions.
 */
function makeDispatchUser(array $permissions = []): User
{
    $role = Role::create(['name' => 'Test Role', 'slug' => 'test-role', 'description' => 'Test']);
    $permission = Permission::create(['name' => 'Dispatch Operations', 'slug' => 'dispatch-operations']);
    $role->permissions()->attach($permission->id, array_merge(
        ['view' => false, 'create' => false, 'edit' => false, 'delete' => false],
        $permissions
    ));

    return User::factory()->create(['role_id' => $role->id]);
}

// ── viewAny ──────────────────────────────────────────────────────────────────

test('DispatchPolicy viewAny allows users with view permission', function () {
    $user = makeDispatchUser(['view' => true]);
    $policy = new DispatchPolicy;

    expect($policy->viewAny($user))->toBeTrue();
});

test('DispatchPolicy viewAny denies users without view permission', function () {
    $user = makeDispatchUser(['view' => false]);
    $policy = new DispatchPolicy;

    expect($policy->viewAny($user))->toBeFalse();
});

// ── view ──────────────────────────────────────────────────────────────────────

test('DispatchPolicy view allows users with view permission', function () {
    $user = makeDispatchUser(['view' => true]);
    $dispatch = new Dispatch;
    $policy = new DispatchPolicy;

    expect($policy->view($user, $dispatch))->toBeTrue();
});

test('DispatchPolicy view denies users without view permission', function () {
    $user = makeDispatchUser(['view' => false]);
    $dispatch = new Dispatch;
    $policy = new DispatchPolicy;

    expect($policy->view($user, $dispatch))->toBeFalse();
});

// ── create ────────────────────────────────────────────────────────────────────

test('DispatchPolicy create allows users with create permission', function () {
    $user = makeDispatchUser(['create' => true]);
    $policy = new DispatchPolicy;

    expect($policy->create($user))->toBeTrue();
});

test('DispatchPolicy create denies users without create permission', function () {
    $user = makeDispatchUser(['create' => false]);
    $policy = new DispatchPolicy;

    expect($policy->create($user))->toBeFalse();
});

// ── update ────────────────────────────────────────────────────────────────────

test('DispatchPolicy update allows users with edit permission', function () {
    $user = makeDispatchUser(['edit' => true]);
    $dispatch = new Dispatch;
    $policy = new DispatchPolicy;

    expect($policy->update($user, $dispatch))->toBeTrue();
});

test('DispatchPolicy update denies users without edit permission', function () {
    $user = makeDispatchUser(['edit' => false]);
    $dispatch = new Dispatch;
    $policy = new DispatchPolicy;

    expect($policy->update($user, $dispatch))->toBeFalse();
});

// ── delete ────────────────────────────────────────────────────────────────────

test('DispatchPolicy delete allows users with delete permission', function () {
    $user = makeDispatchUser(['delete' => true]);
    $dispatch = new Dispatch;
    $policy = new DispatchPolicy;

    expect($policy->delete($user, $dispatch))->toBeTrue();
});

test('DispatchPolicy delete denies users without delete permission', function () {
    $user = makeDispatchUser(['delete' => false]);
    $dispatch = new Dispatch;
    $policy = new DispatchPolicy;

    expect($policy->delete($user, $dispatch))->toBeFalse();
});

// ── no role ───────────────────────────────────────────────────────────────────

test('DispatchPolicy denies all actions when user has no role', function () {
    $user = User::factory()->create(['role_id' => null]);
    $dispatch = new Dispatch;
    $policy = new DispatchPolicy;

    expect($policy->viewAny($user))->toBeFalse();
    expect($policy->view($user, $dispatch))->toBeFalse();
    expect($policy->create($user))->toBeFalse();
    expect($policy->update($user, $dispatch))->toBeFalse();
    expect($policy->delete($user, $dispatch))->toBeFalse();
});
