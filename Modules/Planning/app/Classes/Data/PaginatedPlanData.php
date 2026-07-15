<?php

namespace Modules\Planning\Classes\Data;

use Modules\Core\Classes\Data\PaginatedLink;
use Spatie\TypeScriptTransformer\Attributes\TypeScriptType;
use Spatie\LaravelData\Attributes\DataCollectionOf;
use Modules\Planning\Classes\Data\PlanWithBUandDestination;
use Spatie\LaravelData\Attributes\MapName;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;
use Spatie\LaravelData\Attributes\MapInputName;
#[TypeScript()]
class PaginatedPlanData extends Data
{
    public function __construct(
        #[TypeScriptType("PlanWithBUandDestination[]")]
        #[DataCollectionOf(PlanWithBUandDestination::class)]
        #[MapInputName('data')]
        public DataCollection $plans,
        public int $currentPage,
        public int $lastPage,
        public ?int $from,
        public ?int $to,
        public int $total,
        #[TypeScriptType(("PaginatedLink[]"))]
        #[DataCollectionOf(PaginatedLink::class)]
        public DataCollection $links,
    ) {}
}
