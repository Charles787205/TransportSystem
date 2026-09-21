<?php

namespace Modules\Planning\Classes\Data\Response;

use Modules\Client\Classes\Data\Response\ClientData;
use Modules\Client\Classes\Data\Response\LocationData;
use Modules\DispatchOperation\Classes\Data\Response\DispatchData;
use Spatie\LaravelData\Attributes\DataCollectionOf;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;
use Spatie\TypeScriptTransformer\Attributes\TypeScriptType;

#[TypeScript()]
class PlanData extends Data
{
    public function __construct(
        public int $id,
        public int $clientId,
        public int $originId,
        public string $dispatchDate,
        public int $numberOfVehicles,
        public int $dispatchedCount = 0,
        public ?ClientData $client = null,
        public ?LocationData $origin = null,
        #[TypeScriptType('DispatchData[]')]
        #[DataCollectionOf(DispatchData::class)]
        public ?array $dispatches = null,
    ) {}
}
