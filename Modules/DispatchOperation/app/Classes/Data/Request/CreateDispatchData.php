<?php

namespace Modules\DispatchOperation\Classes\Data\Request;

use Modules\DispatchOperation\Enums\ServiceType;
use Spatie\LaravelData\Data;

class CreateDispatchData extends Data
{
    public function __construct(
        public int $vehicleId,
        public int $driverId,
        public int $businessUnitId,
        public int $destinationId,
        public ServiceType $serviceType,
        public string $dispatchDate,
        public string $assignedCallTime,
        public string $linehaulTripNo

    ) {}

    public function dispatchAttributes()
    {
        return [
            'vehicle_id' => $this->vehicleId,
            'driver_id' => $this->driverId,
            'business_unit_id' => $this->businessUnitId,
            'destination_id' => $this->destinationId,
            'service_type' => $this->serviceType,
            'dispatch_date' => $this->dispatchDate,
            'assigned_call_time' => $this->assignedCallTime,
        ];
    }
}
