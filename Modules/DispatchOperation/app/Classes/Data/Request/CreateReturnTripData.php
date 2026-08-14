<?php

namespace Modules\DispatchOperation\Classes\Data\Request;

use Spatie\LaravelData\Data;

class CreateReturnTripData extends Data
{
    public function __construct(
        public int $dispatchId,
        public int $originLocationId,
        public int $destinationLocationId,
        public ?float $odometerStart = null,
        public ?float $odometerEnd = null,
        public ?int $totalParcel = null,
    ) {}

    public function returnTripAttributes(): array
    {
        return [
            'dispatch_id' => $this->dispatchId,
            'origin_location_id' => $this->originLocationId,
            'destination_location_id' => $this->destinationLocationId,
            'odometer_start' => $this->odometerStart,
            'odometer_end' => $this->odometerEnd,
            'total_parcel' => $this->totalParcel,
        ];
    }
}
