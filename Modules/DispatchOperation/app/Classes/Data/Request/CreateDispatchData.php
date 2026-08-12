<?php

namespace Modules\DispatchOperation\Classes\Data\Request;

use Modules\DispatchOperation\Enums\ServiceType;
use Spatie\LaravelData\Data;

class CreateDispatchData extends Data
{
    public function __construct(
        public int $clientId,
        public int $vehicleId,
        public int $driverId,
        public ServiceType $serviceType,
        public string $dispatchDate,
        public string $assignedCallTime,
        public string $linehaulTripNo
    ) {}

    public function dispatchAttributes(): array
    {
        return [
            'client_id' => $this->clientId,
            'vehicle_id' => $this->vehicleId,
            'driver_id' => $this->driverId,
            'service_type' => $this->serviceType,
            'dispatch_date' => $this->dispatchDate,
            'assigned_call_time' => $this->assignedCallTime,
        ];
    }
}
