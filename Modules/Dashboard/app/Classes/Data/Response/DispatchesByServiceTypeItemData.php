<?php

namespace Modules\Dashboard\Classes\Data\Response;

use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]
class DispatchesByServiceTypeItemData extends Data
{
    public function __construct(
        public string $serviceType,
        public int $dispatched,
    ) {}
}
