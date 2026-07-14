<?php

namespace Modules\Planning\Classes\Data;

use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]
class PlanData extends Data
{
    public function __construct(
        public int $id,
        public int $businessUnitId,
        public int $destinationId,
        public int $numberOfVehicles,
        public string $dispatchDate,
        public string $createdAt,
        public string $updatedAt
    ) {}
}
