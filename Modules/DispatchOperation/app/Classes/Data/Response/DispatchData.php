<?php

namespace Modules\DispatchOperation\Classes\Data\Response;

use Modules\Client\Classes\Data\Response\ClientData;
use Modules\DispatchOperation\Enums\ServiceType;
use Modules\Vendor\Classes\Data\Response\DriverData;
use Modules\Vendor\Classes\Data\Response\VehicleData;
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
        public int $clientId,
        public int $vehicleId,
        public int $driverId,
        public ServiceType $serviceType,
        public string $dispatchDate,
        public string $assignedCallTime,

        public ?float $odometerStart,
        public ?float $odometerEnd,
        public string $updatedAt,
        public string $createdAt,
        public ?DriverData $driver,
        public ?ClientData $client,
        public ?VehicleData $vehicle,

        #[TypeScriptType('TripLegData[]')]
        #[DataCollectionOf(TripLegData::class)]
        public ?DataCollection $tripLegs,

        #[TypeScriptType('ReturnTripData[]')]
        #[DataCollectionOf(ReturnTripData::class)]
        public ?DataCollection $returnTrips = null,
    ) {}
}
