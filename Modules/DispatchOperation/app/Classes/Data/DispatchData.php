<?php

namespace Modules\DispatchOperation\Classes\Data;

use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;
use Spatie\LaravelData\Attributes\DataCollectionOf;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]
class DispatchData extends Data
{
    public function __construct(
        public int $id,
        public int $vehicleId,
        public int $driverid,
        public int $businessUnitid,
        public int $destinationId,
        public string $serviceType,
        public string $dispatchDate,
        public string $assignedCallTime,
        public int $linehaulTripNo,
        public float $odometerStart,
        public float $odometerEnd,
        public string $updatedAt,
        public string $createdAt,
    ) {}
}
