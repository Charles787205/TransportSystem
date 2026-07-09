<?php

namespace Modules\Vendor\Classes\Data;

use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]
class InsuranceData extends Data
{
    public function __construct(
        public readonly int $id,
        public readonly int $vehicleId,
        public readonly string $providerName,
        public readonly string $policyNumber,
        public readonly string $startDate,
        public readonly string $endDate,
    ) {}
}
