<?php

namespace Modules\Vendor\Classes\Data\Response;

use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]
class RegistrationData extends Data
{
    public function __construct(
        public readonly int $id,
        public readonly int $vehicleId,
        public readonly string $crNumber,
        public readonly string $orNumber,
        public readonly string $orDate,
        public readonly string $ltfrbDate,
        public readonly string $caseNumber,
    ) {}
}
