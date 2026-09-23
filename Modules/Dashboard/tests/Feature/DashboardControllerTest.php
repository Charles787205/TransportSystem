<?php

use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Modules\User\Models\User;
use Tests\TestCase;

uses(TestCase::class, RefreshDatabase::class);

use function Pest\Laravel\actingAs;
use function Pest\Laravel\get;

test('dashboard page is displayed with data', function () {
    $user = User::factory()->create();

    actingAs($user)
        ->get(route('dashboard'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('dashboard')
            ->has('metrics')
            ->has('filters')
        );
});

test('dashboard page redirects unauthenticated users', function () {
    get(route('dashboard'))
        ->assertRedirect(route('login'));
});
