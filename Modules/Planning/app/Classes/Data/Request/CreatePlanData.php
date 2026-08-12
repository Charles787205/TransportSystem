<?php

namespace Modules\Planning\Classes\Data\Request;

use Spatie\LaravelData\Data;

class CreatePlanData extends Data
{
    public function __construct(
        public int $clientId,
        public int $originId,
        public int $destinationId,
        public int $numberOfVehicles,
        public string $dispatchDate,
    ) {}

    public function planAttributes()
    {
        return [
            'client_id' => $this->clientId,
            'origin_id' => $this->originId,
            'destination_id' => $this->destinationId,
            'number_of_vehicles' => $this->numberOfVehicles,
            'dispatch_date' => $this->dispatchDate,
        ];
    }
}
