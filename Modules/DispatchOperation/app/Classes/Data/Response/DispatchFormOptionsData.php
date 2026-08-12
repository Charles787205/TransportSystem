<?php

namespace Modules\DispatchOperation\Classes\Data\Response;

use Modules\Core\Classes\Data\Response\SelectOptionData;
use Spatie\LaravelData\Attributes\DataCollectionOf;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;
use Spatie\TypeScriptTransformer\Attributes\TypeScriptType;

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
        public DataCollection $clients,

        #[TypeScriptType('SelectOptionData[]')]
        #[DataCollectionOf(SelectOptionData::class)]
        public DataCollection $locations,
    ) {}
}
