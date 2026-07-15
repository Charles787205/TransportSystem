<?php

namespace Modules\Client\Classes\Data;

use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;
use Spatie\LaravelData\DataCollection;
use Spatie\TypeScriptTransformer\Attributes\TypeScriptType;
use Spatie\LaravelData\Attributes\DataCollectionOf;
use Modules\Core\Classes\Data\PaginatedLink;
use Modules\Client\Classes\Data\DestinationData;

#[TypeScript()]
class PaginatedDestinationData extends Data
{
    public function __construct(
        #[TypeScriptType(("DestinationData[]"))]
        #[DataCollectionOf(DestinationData::class)]
        public DataCollection $data,
        public int $currentPage,
        public int $lastPage,
        public ?int $from,
        public ?int $to,
        public int $total,
        #[TypeScriptType(("PaginatedLink[]"))]
        #[DataCollectionOf(PaginatedLink::class)]
        public DataCollection $links,
    ){}
}
