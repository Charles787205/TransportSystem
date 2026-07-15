<?php

namespace Modules\Planning\Classes\Data;
use Modules\Client\Classes\Data\BusinessUnitData;
use Modules\Client\Classes\Data\DestinationData;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;
use Spatie\TypeScriptTransformer\Attributes\TypeScriptType;

#[TypeScript()]
class PlanWithBUandDestination extends Data
{
    public function __construct(
        public int $id,
        #[TypeScriptType('BusinessUnitData')]
        public BusinessUnitData $businessUnit,
        #[TypeScriptType('DestinationData')]
        public DestinationData $destination,
        public string $dispatchDate,
    ) {}
}
