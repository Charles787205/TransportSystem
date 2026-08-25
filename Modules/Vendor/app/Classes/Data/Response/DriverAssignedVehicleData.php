<?php

namespace Modules\Vendor\Classes\Data\Response;

use Spatie\LaravelData\Attributes\MapInputName;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]
class DriverAssignedVehicleData extends Data
{
    public function __construct(
        public readonly int $id,
        #[MapInputName('plate_number')]
        public readonly string $plateNumber,
        public readonly string $make,
        #[MapInputName('year_model')]
        public readonly ?string $yearModel,
        #[MapInputName('is_active')]
        public readonly bool $isActive
    ) {}
}
