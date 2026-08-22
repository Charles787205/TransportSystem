<?php

namespace Modules\Dashboard\Classes\Data\Response;

use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]
class TopDestinationItemData extends Data
{
    public function __construct(
        public string $destination,
        public int $count,
    ) {}
}
