<?php

namespace Modules\DispatchOperation\Classes\Data\Request;

use Spatie\LaravelData\Data;

class EditDropData extends Data
{
    public function __construct(
        public int $locationId,
        public ?int $parcelCount = null,
        public ?string $arrivedTime = null,
        public ?string $departedTime = null,
    ) {}

    public function dropAttributes(): array
    {
        return array_filter([
            'location_id' => $this->locationId,
            'parcel_count' => $this->parcelCount,
            'arrived_time' => $this->arrivedTime,
            'departed_time' => $this->departedTime,
        ], fn ($value) => $value !== null);
    }
}
