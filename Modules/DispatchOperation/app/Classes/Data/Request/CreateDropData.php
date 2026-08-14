<?php

namespace Modules\DispatchOperation\Classes\Data\Request;

use Spatie\LaravelData\Data;

class CreateDropData extends Data
{
    public function __construct(
        public int $tripLegId,
        public int $locationId,
        public ?int $parcelCount = null,
        public ?string $arrivedTime = null,
        public ?string $departedTime = null,
    ) {}

    public function dropAttributes(): array
    {
        return [
            'trip_leg_id' => $this->tripLegId,
            'location_id' => $this->locationId,
            'parcel_count' => $this->parcelCount,
            'arrived_time' => $this->arrivedTime,
            'departed_time' => $this->departedTime,
        ];
    }
}
