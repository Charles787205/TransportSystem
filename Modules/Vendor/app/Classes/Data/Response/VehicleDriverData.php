<?php

namespace Modules\Vendor\Classes\Data\Response;

use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]
class VehicleDriverData extends Data
{
    public function __construct(
        public int $id,
        public string $fullName,
        public string $driverIdNumber,
        public string $status
    ) {}
}
