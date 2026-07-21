<?php

namespace Modules\Core\Classes\Data;

use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]
class SelectOptionData extends Data
{
    public function __construct(
        public int $id,
        public string $label,
    ) {}
}