<?php

namespace Modules\Planning\Classes\Data\Response;

use Modules\Core\Classes\Data\Response\PaginatedLink;
use Spatie\LaravelData\Attributes\DataCollectionOf;
use Spatie\LaravelData\Attributes\MapInputName;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;
use Spatie\TypeScriptTransformer\Attributes\TypeScriptType;

#[TypeScript()]
class PaginatedPlanData extends Data
{
    public function __construct(
        #[TypeScriptType('PlanData[]')]
        #[DataCollectionOf(PlanData::class)]
        #[MapInputName('data')]
        public DataCollection $plans,
        public int $currentPage,
        public int $lastPage,
        public ?int $from,
        public ?int $to,
        public int $total,
        #[TypeScriptType(('PaginatedLink[]'))]
        #[DataCollectionOf(PaginatedLink::class)]
        public DataCollection $links,
    ) {}
}
