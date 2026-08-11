<?php

namespace Modules\Core\Classes\Data\Response;

use Illuminate\Pagination\LengthAwarePaginator;
use Spatie\LaravelData\Attributes\DataCollectionOf;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;
use Spatie\TypeScriptTransformer\Attributes\TypeScriptType;

class PaginatedData extends Data
{
    public function __construct(
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

    public static function fromPaginator(LengthAwarePaginator $paginator, string $dataClass): self
    {
        return new self(
            data: $dataClass::collect($paginator->items(), DataCollection::class),
            currentPage: $paginator->currentPage(),
            lastPage: $paginator->lastPage(),
            from: $paginator->firstItem(),
            to: $paginator->lastItem(),
            total: $paginator->total(),
            links: PaginatedLink::collect($paginator->linkCollection()->toArray(), DataCollection::class),
        );
    }
}
