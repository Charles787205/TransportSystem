<?php

namespace Modules\Planning\Classes\Data\Response;

use Modules\Client\Classes\Data\Response\ClientData;
use Modules\Client\Classes\Data\Response\LocationData;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]
class PlanData extends Data
{
    public function __construct(
        public int $id,
        public int $clientId,
        public int $originId,
        public int $destinationId,
        public string $dispatchDate,
        public int $numberOfVehicles,
        public ?ClientData $client = null,
        public ?LocationData $origin = null,
        public ?LocationData $destination = null,
    ) {}
}
