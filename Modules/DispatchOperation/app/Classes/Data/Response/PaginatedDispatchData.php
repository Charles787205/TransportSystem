<?php

namespace Modules\DispatchOperation\Classes\Data\Response;

use Modules\Core\Classes\Data\Response\PaginatedData;
use Modules\Core\Classes\Data\Response\PaginatedLink;
use Spatie\LaravelData\Attributes\DataCollectionOf;
use Spatie\LaravelData\DataCollection;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;
use Spatie\TypeScriptTransformer\Attributes\TypeScriptType;

#[TypeScript()]
class PaginatedDispatchData extends PaginatedData
{
    public function __construct(
        #[TypeScriptType('DispatchData[]')]
        #[DataCollectionOf(DispatchData::class)]
        public DataCollection $data,
        public int $currentPage,
        public int $lastPage,
        public ?int $from,
        public ?int $to,
        public int $total,
        #[TypeScriptType('PaginatedLink[]')]
        #[DataCollectionOf(PaginatedLink::class)]
        public DataCollection $links,
    ) {}
}
