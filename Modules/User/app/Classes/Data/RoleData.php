<?php

namespace Modules\User\Classes\Data;

use Spatie\LaravelData\Attributes\DataCollectionOf;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;
use Spatie\TypeScriptTransformer\Attributes\TypeScriptType;

#[TypeScript]
class RoleData extends Data
{
    public function __construct(
        public int $id,
        public string $name,
        public string $slug,
        public ?string $description = null,

        /** @var DataCollection<PermissionData> */
        #[DataCollectionOf(PermissionData::class)]
        #[TypeScriptType('PermissionData[]')]
        public ?DataCollection $permissions = null,
    ) {}
}
