<?php

namespace Modules\Planning\Classes\Data;

use Spatie\LaravelData\Data;

class CreatePlanData extends Data
{
    public function __construct(
        public int $id,
        public int $businessUnitId,
        public int $destinationId,
        public int $numberOfVehicles,
        public string $dispatchDate,
    ) {}
}
