<?php

namespace Modules\Vendor\Classes\Data;
use Modules\Vendor\Models\Vendor;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;
use Spatie\LaravelData\Attributes\MapInputName;
use Spatie\LaravelData\Attributes\DataCollectionOf;
use Modules\Vendor\Classes\Data\DriverData;
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