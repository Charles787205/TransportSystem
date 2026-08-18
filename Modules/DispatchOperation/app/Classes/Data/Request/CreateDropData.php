<?php

namespace Modules\DispatchOperation\Classes\Data\Request;

use Spatie\LaravelData\Data;

class CreateDropData extends Data
{
    public function __construct(
        public int $tripLegId,
        public int $locationId,
        public ?int $parcelCount = null,
        public ?int $boxCount = null,
        public ?int $looseItemsCount = null,
        public ?float $weightKg = null,
        public ?string $arrivedTime = null,
        public ?string $departedTime = null,
    ) {}

    public function dropAttributes(): array
    {
        return array_filter([
            'trip_leg_id' => $this->tripLegId,
            'location_id' => $this->locationId,
            'parcel_count' => $this->parcelCount,
            'box_count' => $this->boxCount,
            'loose_items_count' => $this->looseItemsCount,
            'weight_kg' => $this->weightKg,
            'arrived_time' => $this->arrivedTime,
            'departed_time' => $this->departedTime,
        ], fn ($value) => $value !== null);
    }
}
