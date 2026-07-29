<?php

namespace Modules\Planning\Classes\Data;

use Modules\DispatchOperation\Classes\Data\DispatchData;
use Spatie\LaravelData\Attributes\DataCollectionOf;
use Spatie\LaravelData\DataCollection;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;
use Spatie\TypeScriptTransformer\Attributes\TypeScriptType;
use Modules\Client\Classes\Data\BusinessUnitData;
use Modules\Client\Classes\Data\DestinationData;
use Modules\DispatchOperation\Classes\Data\TripLegData;
use Spatie\LaravelData\Data;

#[TypeScript]
class PlanDetailPageData extends Data
{   
    public function __construct(
    
        public PlanWithBUandDestinationData $plan,
        #[DataCollectionOf(TripLegData::class)]
        public DataCollection $tripLegs,
        #[TypeScriptType('DispatchData[]')]
        #[DataCollectionOf(DispatchData::class)]
        public DataCollection $dispatches,
    ) {}
}
