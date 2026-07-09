<?php

namespace Modules\Vendor\Classes\Data;

use Spatie\LaravelData\Attributes\DataCollectionOf;
use Spatie\LaravelData\Attributes\MapName;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]
class VehicleData extends Data
{
    public function __construct(
        public readonly int $id,
        public readonly int $vendorId,
        public readonly ?int $driverId,
        public readonly string $plateNumber,
        public readonly string $make,
        public readonly string $engineNumber,
        public readonly string $chassisNumber,
        public readonly string $yearModel,
        public readonly string $ownersName,
        public readonly string $registeredAddress,
        public readonly bool $isActive,
        /** @var InsuranceData[] */
        #[DataCollectionOf(InsuranceData::class)]
        public readonly ?array $insurances,
        #[DataCollectionOf(RegistrationData::class)]
        public readonly ?array $registrations,
        public ?DriverData $driver
    ) {}
}
