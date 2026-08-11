<?php

namespace Modules\Planning\Classes\Data\Request;

use Spatie\LaravelData\Data;

class CreatePlanData extends Data
{
    public function __construct(

        public int $businessUnitId,
        public int $destinationId,
        public int $numberOfVehicles,
        public string $dispatchDate,
    ) {}

    public function planAttributes()
    {
        return [
            'business_unit_id' => $this->businessUnitId,
            'number_of_vehicles' => $this->numberOfVehicles,
            'dispatch_date' => $this->dispatchDate,
            'destination_id' => $this->destinationId,
        ];
    }
}
