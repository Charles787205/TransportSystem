<?php

namespace Modules\DispatchOperation\Classes\Data;

use Spatie\LaravelData\DataCollection;
use Spatie\LaravelData\Attributes\DataCollectionOf;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;
use Spatie\TypeScriptTransformer\Attributes\TypeScriptType;
use Modules\Core\Classes\Data\PaginatedData;
use Modules\Core\Classes\Data\PaginatedLink;
use Modules\DispatchOperation\Classes\Data\DispatchData;

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