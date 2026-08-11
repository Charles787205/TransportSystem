<?php

namespace Modules\Vendor\Classes\Data\Response;

use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]
class VendorVehicleData extends Data
{
    public function __construct(

        public readonly string $plateNumber,
        public readonly string $type,
        public readonly string $make,

        public readonly string $isActive
    ) {}
}
