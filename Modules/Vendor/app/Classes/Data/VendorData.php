<?php

namespace Modules\Vendor\Classes\Data;

use Spatie\LaravelData\Attributes\MapInputName;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\Attributes\MapName;
class VendorData extends Data
{
    public function __construct(
        public readonly int $id,
        public readonly string $name,
        public readonly string $email,
        #[MapName('phone_number')]
        public readonly string $phoneNumber,
        #[MapName('is_active')]
        public readonly bool $isActive,
    ) {}

    
}
