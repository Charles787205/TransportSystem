<?php

namespace Modules\Auth\Actions\Fortify;

use Illuminate\Support\Facades\Hash;
use Laravel\Fortify\Contracts\CreatesNewUsers;
use Modules\User\Models\User;

class CreateNewUser implements CreatesNewUsers
{
    public function create(array $input): User
    {
        return User::create([
            'name' => $input['name'],
            'email' => $input['email'],
            'password' => Hash::make($input['password']),
        ]);
    }
}
