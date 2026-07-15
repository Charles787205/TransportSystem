<?php

namespace Modules\Planning\Classes\Data;

use Spatie\LaravelData\Data;

class PlanIndexFilterData extends Data
{
    public function __construct(
        public ?int $destinationId = null,
        public ?int $businessUnitId = null,
    ) {}

    public function filterAttributes(): array
    {
        return array_filter([
            'destination_id' => $this->destinationId,
            'business_unit_id' => $this->businessUnitId,
        ], fn ($value) => $value !== null);
    }
}