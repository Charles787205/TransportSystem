<?php

namespace Modules\Vendor\Classes\Data;

use Spatie\LaravelData\Data;

class CreateVendorData extends Data
{
    public function __construct(
        public readonly string $name,
        public readonly string $email,
        public readonly string $phoneNumber,
    ) {}
}