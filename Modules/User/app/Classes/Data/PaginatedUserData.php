<?php

namespace Modules\User\Classes\Data;
use Modules\User\Classes\Data\UserData;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;
use Spatie\TypeScriptTransformer\Attributes\TypeScriptType;
use Spatie\LaravelData\DataCollection;
use Spatie\LaravelData\Attributes\DataCollectionOf;
use Modules\Core\Classes\Data\PaginatedLink;

#[TypeScript()]
class PaginatedUserData
{
    public function __construct(
        #[TypeScriptType('UserData[]')]
        #[DataCollectionOf(UserData::class)]
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
