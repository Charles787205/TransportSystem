<?php

namespace Modules\Vendor\Classes\Data;

use Spatie\LaravelData\Attributes\MapName;
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
