<?php

namespace Modules\DispatchOperation\Classes\Data;

use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;
use Spatie\LaravelData\Attributes\DataCollectionOf;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;
use Spatie\TypeScriptTransformer\Attributes\TypeScriptType;
use Modules\Core\Classes\Data\SelectOptionData;

#[TypeScript()]
class DispatchFormOptionsData extends Data
{
    public function __construct(
        #[TypeScriptType('SelectOptionData[]')]
        #[DataCollectionOf(SelectOptionData::class)]
        public DataCollection $vehicles,

        #[TypeScriptType('SelectOptionData[]')]
        #[DataCollectionOf(SelectOptionData::class)]
        public DataCollection $drivers,

        #[TypeScriptType('SelectOptionData[]')]
        #[DataCollectionOf(SelectOptionData::class)]
        public DataCollection $businessUnits,

        #[TypeScriptType('SelectOptionData[]')]
        #[DataCollectionOf(SelectOptionData::class)]
        public DataCollection $destinations,
    ) {}
}