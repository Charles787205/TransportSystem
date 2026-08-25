<?php

namespace Modules\Dashboard\Classes\Data\Response;

use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]
class StatusBreakdownItemData extends Data
{
    public function __construct(
        public string $name,
        public int $value,
    ) {}
}
