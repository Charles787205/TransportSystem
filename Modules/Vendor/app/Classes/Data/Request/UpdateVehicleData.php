<?php

namespace Modules\Vendor\Classes\Data\Request;

use Spatie\LaravelData\Data;

class UpdateVehicleData extends Data
{
    public function __construct(
        public readonly string $plateNumber,
        public readonly string $make,
        public readonly string $engineNumber,
        public readonly string $chassisNumber,
        public readonly string $yearModel,
        public readonly string $ownersName,
        public readonly string $registeredAddress,
    ) {}

    public function vehicleAttributes(): array
    {
        return [
            'plate_number' => $this->plateNumber,
            'make' => $this->make,
            'engine_number' => $this->engineNumber,
            'chassis_number' => $this->chassisNumber,
            'year_model' => $this->yearModel,
            'owners_name' => $this->ownersName,
            'registered_address' => $this->registeredAddress,
        ];
    }
}
