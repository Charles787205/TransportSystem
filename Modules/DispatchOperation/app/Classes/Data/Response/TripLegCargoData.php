<?php

namespace Modules\DispatchOperation\Classes\Data\Response;

use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]
class TripLegCargoData extends Data
{
    public function __construct(
        public int $id,
        public int $tripLegId,
        public string $cargoType,
        public float $quantity,
        public ?string $remarks = null,
    ) {}
}
