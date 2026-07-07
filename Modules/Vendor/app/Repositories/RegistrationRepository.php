<?php

namespace Modules\Vendor\Repositories;
use Modules\Vendor\Models\Registration;

class RegistrationRepository
{
    public function createRegistration(array $attributes) {
        return Registration::create($attributes)->refresh();
    }
}
