<?php

namespace Modules\DispatchOperation\Classes\Data\Request;

use Modules\Client\Enums\TouchpointType;
use Modules\DispatchOperation\Enums\ServiceType;
use Spatie\LaravelData\Data;

class CreateDispatchData extends Data
{
    public function __construct(
        public int $clientId,
        public int $vehicleId,
        public int $driverId,
        public ServiceType $serviceType,
        public ?TouchpointType $touchpoint = null,
        public string $dispatchDate = '',
        public string $assignedCallTime = '',
        public string $linehaulTripNo = '',
        public ?int $originLocationId = null,
        public ?int $destinationLocationId = null,
    ) {}

    public function dispatchAttributes(): array
    {
        return [
            'client_id' => $this->clientId,
            'vehicle_id' => $this->vehicleId,
            'driver_id' => $this->driverId,
            'service_type' => $this->serviceType,
            'touchpoint' => $this->touchpoint?->value ?? $this->touchpoint,
            'dispatch_date' => $this->dispatchDate,
            'assigned_call_time' => $this->assignedCallTime,
        ];
    }

    public function initialTripLegAttributes(): array
    {
        return [
            'origin_location_id' => $this->originLocationId,
            'destination_location_id' => $this->destinationLocationId,
            'linehaul_trip_no' => $this->linehaulTripNo,
            'trip_sequence' => 1,
        ];
    }
}
