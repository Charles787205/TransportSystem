<?php

namespace Modules\Vendor\Classes\Data\Response;

use Spatie\LaravelData\Attributes\MapInputName;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]
class DriverData extends Data
{
    public function __construct(
        public readonly int $id,
        #[MapInputName('driver_id_number')]
        public readonly ?string $driverIdNumber,
        #[MapInputName('full_name')]
        public readonly string $fullName,
        public readonly ?string $birthday,
        public readonly string $gender,
        #[MapInputName('phone_number')]
        public readonly string $phoneNumber,
        public readonly ?string $address,
        #[MapInputName('license_number')]
        public readonly ?string $licenseNumber,
        #[MapInputName('license_expiry_date')]
        public readonly ?string $licenseExpiryDate,
        public readonly string $status,
        #[MapInputName('vendor_id')]
        public readonly ?int $vendorId,
        public readonly ?EmergencyContactData $emergencyContact,
        public readonly ?DriverAssignedVehicleData $vehicle
    ) {}
}
