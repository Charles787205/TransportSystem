<?php

namespace Modules\Planning\Classes\Data\Request;

use Spatie\LaravelData\Data;

class PlanIndexFilterData extends Data
{
    public function __construct(
        public ?int $clientId = null,
        public ?int $originId = null,
        public ?int $destinationId = null,
        public ?string $dispatchDate = null,
        public ?string $search = null,
    ) {}

    public function filterAttributes(): array
    {
        return array_filter([
            'client_id' => $this->clientId,
            'origin_id' => $this->originId,
            'destination_id' => $this->destinationId,
            'dispatch_date' => $this->dispatchDate,
        ], fn ($value) => $value !== null);
    }
}
