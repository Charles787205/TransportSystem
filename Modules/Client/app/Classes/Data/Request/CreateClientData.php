<?php

namespace Modules\Client\Classes\Data\Request;

use Spatie\LaravelData\Attributes\Validation\Email;
use Spatie\LaravelData\Data;

class CreateClientData extends Data
{
    public function __construct(
        #[Email()]
        public string $email,
        public string $name,
        public string $phoneNumber
    ) {}

    public function clientAttributes()
    {
        return [
            'email' => $this->email,
            'name' => $this->name,
            'phone_number' => $this->phoneNumber,
        ];
    }
}
