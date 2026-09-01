<?php

namespace Modules\Vendor\Classes\DTO;

class VendorDTO
{
    public function __construct(
        public readonly string $name,
        public readonly string $email,
        public readonly string $phoneNumber,

    ) {}

    public static function fromArray(array $request): self
    {
        return new self(
            name: $request['name'],
            email: $request['email'],
            phoneNumber: $request['phoneNumber'],

        );
    }
}
