<?php

namespace Modules\DispatchOperation\Classes\Data;

use Spatie\LaravelData\Attributes\MapOutputName;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\Mappers\SnakeCaseMapper;
use Spatie\LaravelData\Optional;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()] 

class EditTripLegData extends Data
{
    public function __construct(
        public int|Optional|null $tripSequence,
        public int|Optional|null $totalParcel,
        public float|Optional|null $odometerStart,
        public float|Optional|null $odometerEnd,
        public string|Optional|null $departureTime,
        public string|Optional|null $endTime,
        public string|Optional|null $arrivedTime,
        public string|Optional|null $status,
    ) {}


    public function toModelAttributes() {
        return array_filter([
            'trip_sequence' => $this->tripSequence,
            'total_parcel' => $this->totalParcel,
            'odometer_start' => $this->odometerStart,
            'odometer_end' => $this->odometerEnd,
            'departure_time' => $this->departureTime,
            'end_time' => $this->endTime,
            'arrived_time' => $this->arrivedTime,
            'status' => $this->status,
        ], fn ($value) => ! $value instanceof Optional);
    }

}
