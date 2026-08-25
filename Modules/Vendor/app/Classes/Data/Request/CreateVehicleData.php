<?php

namespace Modules\Vendor\Classes\Data\Request;

use Spatie\LaravelData\Data;

class CreateVehicleData extends Data
{
    public function __construct(
        public readonly int $vendorId,
        public readonly string $plateNumber,
        public readonly string $type,
        public readonly string $engineNumber,
        public readonly string $chassisNumber,
        public readonly string $yearModel,
        public readonly string $ownersName,
        public readonly string $registeredAddress,
        public readonly string $make,
        public readonly CreateInsuranceData $insurance,
        public readonly CreateRegistrationData $registration,
    ) {}

    public function vehicleAttributes()
    {
        return [
            'vendor_id' => $this->vendorId,
            'plate_number' => strtoupper($this->plateNumber),
            'type' => $this->type,
            'make' => $this->make,
            'engine_number' => $this->engineNumber,
            'chassis_number' => $this->chassisNumber,
            'owners_name' => $this->ownersName,
            'registered_address' => $this->registeredAddress,
            'year_model' => $this->yearModel,
        ];
    }
}
