<?php

namespace Modules\Planning\Classes\Data;
use Modules\Client\Classes\Data\BusinessUnitData;
use Modules\Client\Classes\Data\DestinationData;
use Spatie\TypeScriptTransformer\Attributes\TypeScriptType;

class PlanWithBUandDestination
{
    public function __construct(
        public int $id,
        #[TypeScriptType('BusinessUnitData')]
        public BusinessUnitData $businessUnit,
        public DestinationData $destination,
        public string $dispatchData,
    ) {}
}
