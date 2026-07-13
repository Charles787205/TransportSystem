<?php

namespace Modules\Client\Classes\Data;

use Modules\Core\Classes\Data\PaginatedLink;
use Modules\Client\Classes\Data\BusinessUnitData;
use Spatie\LaravelData\Attributes\DataCollectionOf;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;
use Spatie\TypeScriptTransformer\Attributes\TypeScriptType;

#[TypeScript()]
class PaginatedBusinessUnitData extends Data
{
    public function __construct(
        #[TypeScriptType("BusinessUnitData[]")]
        #[DataCollectionOf(BusinessUnitData::class)]
        public DataCollection $data,
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