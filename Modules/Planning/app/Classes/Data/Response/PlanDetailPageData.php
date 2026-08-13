<?php

namespace Modules\Planning\Classes\Data\Response;

use Modules\DispatchOperation\Classes\Data\Response\DispatchData;
use Modules\DispatchOperation\Classes\Data\Response\TripLegData;
use Spatie\LaravelData\Attributes\DataCollectionOf;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;
use Spatie\TypeScriptTransformer\Attributes\TypeScriptType;

#[TypeScript]
class PlanDetailPageData extends Data
{
    public function __construct(
        public PlanData $plan,
        #[TypeScriptType('TripLegData[]')]
        #[DataCollectionOf(TripLegData::class)]
        public DataCollection $tripLegs,
        #[TypeScriptType('DispatchData[]')]
        #[DataCollectionOf(DispatchData::class)]
        public DataCollection $dispatches,
    ) {}
}
