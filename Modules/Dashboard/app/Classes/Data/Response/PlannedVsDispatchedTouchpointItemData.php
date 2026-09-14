<?php

namespace Modules\Dashboard\Classes\Data\Response;

use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]
class PlannedVsDispatchedTouchpointItemData extends Data
{
    public function __construct(
        public string $touchpoint,
        public int $planned,
        public int $dispatched,
    ) {}
}
