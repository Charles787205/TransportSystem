<?php

namespace Modules\Vendor\Classes\Data\Response;

use Modules\Vendor\Enums\VehicleType;
use Spatie\LaravelData\Attributes\DataCollectionOf;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;
use Spatie\TypeScriptTransformer\Attributes\TypeScriptType;

#[TypeScript()]
class VehicleData extends Data
{
    public function __construct(
        public readonly int $id,
        public readonly int $vendorId,
        public readonly ?int $driverId,
        public readonly string $plateNumber,
        #[TypeScriptType('VehicleType | null')]
        public readonly ?VehicleType $type,
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
