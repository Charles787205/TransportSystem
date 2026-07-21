<?php

namespace Modules\DispatchOperation\Classes\Data;

use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]
class CreateTripLegData extends Data
{
    public function __construct(
        public int $dispatchId,
        public int $tripSequence,
        public int $totalParcel,
        public float $odometerStart,
        public float $odometerEnd,
        public string $departureTime,
        public string $endTime,
        public string $arrivedTime,
        ) {}
}
