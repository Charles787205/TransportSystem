<?php

namespace Modules\Vendor\Classes\Data\Response;

use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]
class VehicleDriverHistory extends Data
{
    public function __construct(
        public readonly string $changedAt,
        public readonly string $changedBy,
        public readonly string $oldDriver,
        public readonly string $newDriver,
    ) {}
}
