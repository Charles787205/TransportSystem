<?php

namespace Modules\Vendor\Classes\Data;

use Modules\Vendor\Models\Vendor;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;
use Spatie\LaravelData\Attributes\MapInputName;
use Spatie\LaravelData\Attributes\DataCollectionOf;
use Modules\Vendor\Classes\Data\VendorVehicleData;
use Modules\Vendor\Classes\Data\DriverData;
#[TypeScript]
class VendorWithDriversAndVehiclesData extends Data
{
    public function __construct(
        public readonly int $id,
        public readonly string $name,
        public readonly string $email,
        #[MapInputName('phone_number')]
        public readonly string $phoneNumber,
        #[MapInputName('is_active')]
        public readonly bool $isActive,
        #[DataCollectionOf(VendorVehicleData::class)]
        public readonly array $vehicles,
        #[DataCollectionOf(DriverData::class)]
        public readonly array $drivers,
        
    ) {}

  
}