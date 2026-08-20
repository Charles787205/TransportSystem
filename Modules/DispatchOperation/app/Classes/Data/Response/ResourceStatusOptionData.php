<?php

namespace Modules\DispatchOperation\Classes\Data\Response;

use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]
class ResourceStatusOptionData extends Data
{
    public function __construct(
        public int $id,
        public string $label,
        public bool $isAvailable,
        public ?string $activeStatus = null,
        public ?int $vendorId = null,
    ) {}
}
