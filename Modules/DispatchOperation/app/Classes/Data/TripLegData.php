<?php

namespace Modules\DispatchOperation\Classes\Data;

use Modules\DispatchOperation\Enums\TripStatus;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;
use Spatie\TypeScriptTransformer\Attributes\TypeScriptType;

#[TypeScript()]
class TripLegData extends Data
{
    public function __construct(
        public int $id,
        public int $dispatchId,
        public int $tripSequence,
        public ?int $totalParcel,
        public ?float $odometerStart,
        public ?float $odometerEnd,
        public ?string $departureTime,
        public ?string $endTime,
        public ?string $arrivedTime,
        public string $linehaulTripNo,
        #[TypeScriptType('TripStatus')]
        public ?TripStatus $status,
        public string $updatedAt,
        public string $createdAt,
    ) {}
}
