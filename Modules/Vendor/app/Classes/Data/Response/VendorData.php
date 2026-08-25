<?php

namespace Modules\Vendor\Classes\Data\Response;

use Spatie\LaravelData\Attributes\MapName;
use Spatie\LaravelData\Data;

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
