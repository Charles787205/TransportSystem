<?php

namespace Modules\Vendor\Classes\Data;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]

class DriverData extends Data
{
    public function __construct(
        
        public readonly string $fullName,
        public readonly ?string $birthday,
        public readonly string $gender,
     
        public readonly string $phoneNumber,
        public readonly string $address,
      
        public readonly string $status,
       
        public readonly ?string $licenseExpiry,
       
        public readonly ?string $driverIdNumber,
   
        public readonly ?string $licenseNumber,
   
        public readonly ?int $vendorId

    ) {}
}
