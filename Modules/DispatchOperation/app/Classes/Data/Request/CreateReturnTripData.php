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
        public string $tripType = 'return',
        public ?int $totalParcel = null,
        public ?int $boxCount = null,
        public ?int $looseItemsCount = null,
        public ?float $weightKg = null,
        public ?string $departedAt = null,
        public ?string $arrivedAt = null,
        public ?string $receivedBy = null,
    ) {}

    public function returnTripAttributes(): array
    {
        return [
            'dispatch_id' => $this->dispatchId,
            'origin_location_id' => $this->originLocationId,
            'destination_location_id' => $this->destinationLocationId,
            'odometer_start' => $this->odometerStart,
            'odometer_end' => $this->odometerEnd,
            'trip_type' => $this->tripType,
            'total_parcel' => $this->totalParcel,
            'box_count' => $this->boxCount,
            'loose_items_count' => $this->looseItemsCount,
            'weight_kg' => $this->weightKg,
            'departed_at' => $this->departedAt,
            'arrived_at' => $this->arrivedAt,
            'received_by' => $this->receivedBy,
        ];
    }
}
