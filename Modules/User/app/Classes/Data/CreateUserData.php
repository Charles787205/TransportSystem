<?php

namespace Modules\User\Classes\Data;

use Spatie\LaravelData\Data;

class CreateUserData extends Data
{
    public function __construct(
        public string $name,
        public string $email,
    ) {}
}
