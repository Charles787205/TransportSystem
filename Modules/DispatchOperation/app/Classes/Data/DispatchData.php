<?php

namespace Modules\DispatchOperation\Classes\Data;

use Modules\Client\Classes\Data\BusinessUnitData;
use Modules\Client\Classes\Data\DestinationData;
use Modules\DispatchOperation\Enums\ServiceType;
use Modules\Vendor\Classes\Data\DriverData;
use Modules\Vendor\Classes\Data\VehicleData;
use Spatie\LaravelData\Attributes\DataCollectionOf;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;
use Spatie\TypeScriptTransformer\Attributes\TypeScriptType;

#[TypeScript()]
class DispatchData extends Data
{
    public function __construct(
        public int $id,
        public int $vehicleId,
        public int $driverId,
        public int $businessUnitId,
        public int $destinationId,
        public ServiceType $serviceType,
        public string $dispatchDate,
        public string $assignedCallTime,
     
        public ?float $odometerStart,
        public ?float $odometerEnd,
        public string $updatedAt,
        public string $createdAt,
        public ?DriverData $driver,
        public ?BusinessUnitData $businessUnit,
        public ?DestinationData $destination,
        public ?VehicleData $vehicle,
   
        #[TypeScriptType('TripLegData[]')]
        #[DataCollectionOf(TripLegData::class)]
        public ?DataCollection $tripLegs
    ) {}
}
