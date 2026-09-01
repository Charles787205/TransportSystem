<?php

namespace Modules\User\Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Modules\User\Models\Role;

class RoleFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     */
    protected $model = Role::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [];
    }
}
