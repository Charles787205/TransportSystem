<?php

namespace Modules\DispatchOperation\Classes\Data;

use Spatie\LaravelData\Attributes\MapOutputName;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\Mappers\SnakeCaseMapper;

#[MapOutputName(SnakeCaseMapper::class)]
class CreateTripLegData extends Data
{
    public function __construct(
        public int $dispatchId,
        public string $linehaulTripNo,
    ) {}

    public function toModelAttributes() {
        return [
            'dispatch_id' => $this->dispatchId,
            'linehaul_trip_no' => $this->linehaulTripNo
        ];
    }
}
