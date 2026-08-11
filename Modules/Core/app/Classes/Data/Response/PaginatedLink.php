<?php

namespace Modules\Core\Classes\Data\Response;

use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class PaginatedLink extends Data
{
    public function __construct(
        public ?string $url,
        public ?string $label,
        public ?string $active,
    ) {}
}
