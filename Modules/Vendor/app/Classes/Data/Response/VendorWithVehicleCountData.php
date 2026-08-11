<?php

namespace Modules\Vendor\Classes\Data\Response;

use Spatie\LaravelData\Attributes\MapInputName;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class VendorWithVehicleCountData extends Data
{
    public function __construct(
        public readonly int $id,
        public readonly string $name,
        public readonly string $email,

        public readonly string $phoneNumber,

        public readonly bool $isActive,

        #[MapInputName('vehicles_count')]
        public readonly int $numberOfVehicles,

    ) {}
}
