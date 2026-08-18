<?php

namespace Modules\DispatchOperation\Classes\Data\Response;

use Modules\Client\Classes\Data\Response\LocationData;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]
class DropData extends Data
{
    public function __construct(
        public int $id,
        public int $tripLegId,
        public int $locationId,
        public int $dropSequence,
        public ?int $parcelCount = null,
        public ?int $boxCount = null,
        public ?int $looseItemsCount = null,
        public ?float $weightKg = null,
        public ?string $arrivedTime = null,
        public ?string $departedTime = null,
        public ?LocationData $location = null,
        public string $updatedAt = '',
        public string $createdAt = '',
    ) {}
}
