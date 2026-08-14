<?php

namespace Modules\DispatchOperation\Classes\Data\Response;

use Modules\Client\Classes\Data\Response\LocationData;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]
class ReturnTripData extends Data
{
    public function __construct(
        public int $id,
        public int $dispatchId,
        public ?int $originLocationId,
        public ?int $destinationLocationId,
        public ?float $odometerStart,
        public ?float $odometerEnd,
        public ?int $totalParcel,
        public ?LocationData $originLocation = null,
        public ?LocationData $destinationLocation = null,
        public string $updatedAt = '',
        public string $createdAt = '',
    ) {}
}
