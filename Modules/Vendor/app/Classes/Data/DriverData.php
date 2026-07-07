<?php

namespace Modules\Vendor\Classes\Data;
use Spatie\LaravelData\Attributes\MapInputName;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]

class DriverData extends Data
{
    public function __construct(
        #[MapInputName('full_name')]
        public readonly string $fullName,
        public readonly string $birthday,
        public readonly string $gender,
        #[MapInputName('phone_number')]
        public readonly string $phoneNumber,
        public readonly string $address,
        #[MapInputName('status')]
        public readonly string $status,
        #[MapInputName('license_expiry_date')]
        public readonly string $licenseExpiry,
        #[MapInputName('driver_id_number')]
        public readonly ?string $driverIdNumber,
        #[MapInputName('license_number')]
        public readonly ?string $licenseNumber,
        #[MapInputName('vendor_id')]
        public readonly ?int $vendorId

    ) {}
}
