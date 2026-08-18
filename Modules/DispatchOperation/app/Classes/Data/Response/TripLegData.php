<?php

namespace Modules\DispatchOperation\Classes\Data\Response;

use Modules\Client\Classes\Data\Response\LocationData;
use Modules\DispatchOperation\Enums\TripStatus;
use Spatie\LaravelData\Attributes\DataCollectionOf;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;
use Spatie\TypeScriptTransformer\Attributes\TypeScriptType;

#[TypeScript()]
class TripLegData extends Data
{
    public function __construct(
        public int $id,
        public int $dispatchId,
        public int $tripSequence,
        public ?int $originLocationId,
        public ?int $destinationLocationId,
        public ?int $totalParcel,
        public ?float $odometerStart,
        public ?float $odometerEnd,
        public ?string $departureTime,
        public ?string $endTime,
        public ?string $arrivedTime,
        public string $linehaulTripNo,
        #[TypeScriptType('TripStatus')]
        public ?TripStatus $status,
        public ?LocationData $originLocation = null,
        public ?LocationData $destinationLocation = null,
        #[TypeScriptType('DropData[]')]
        #[DataCollectionOf(DropData::class)]
        public ?DataCollection $drops = null,
        #[TypeScriptType('TripLegCargoData[]')]
        #[DataCollectionOf(TripLegCargoData::class)]
        public ?DataCollection $cargoes = null,
        public string $updatedAt = '',
        public string $createdAt = '',
    ) {}
}
