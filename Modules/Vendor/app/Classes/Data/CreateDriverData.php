<?php

namespace Modules\Vendor\Classes\Data;

use Modules\Vendor\Enums\GenderEnum;
use Spatie\LaravelData\Attributes\MapName;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\Attributes\Validation\Exists;
use Spatie\LaravelData\Attributes\Validation\Enum;
use Spatie\LaravelData\Attributes\Validation\Max;
use Spatie\LaravelData\Attributes\Validation\Digits;
use Spatie\LaravelData\Attributes\Validation\Required;
use Spatie\LaravelData\Attributes\Validation\Date;

class CreateDriverData extends Data
{
    public function __construct(
        #[Required]
        #[Exists('vendors', 'id')]
        public int $vendorId,

        #[Required]
        public string $driverIdNumber,
        
        #[Required]
        public string $fullName,

        #[Required]
        #[Enum(GenderEnum::class)]
        public string $gender,

        #[Required]
        #[Date]
        public string $birthday,

        #[Required]
        #[Digits(11)]

        public string $phoneNumber,

        #[Required]
        public string $address,

        #[Required]

        #[Date]
         public string $licenseExpiry,

        #[Required]

        #[Max(11)]
        public string $licenseNumber,

        #[Required]

        public string $emergencyContactFullName,

        #[Required]
        #[Digits(11)]
        public string $emergencyContactPhoneNumber,

    ) {}


    public function driverAttributes(){
        return [
            'vendor_id' => $this->vendorId,
            'driver_id_number' => $this->driverIdNumber,
            'full_name' => $this->fullName,
            'gender' => $this->gender,
            'birthday' => $this->birthday,
            'phone_number' => $this->phoneNumber,
            'address' => $this->address,
            'license_expiry' => $this->licenseExpiry,
            'license_number' => $this->licenseNumber,
        ];
    }

    public function emergencyContactAttributes(){
        return [
           'emergency_contact_full_name' => $this->emergencyContactFullName
        ];
    }
}
