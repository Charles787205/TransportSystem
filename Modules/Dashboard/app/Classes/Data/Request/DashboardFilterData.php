<?php

namespace Modules\Dashboard\Classes\Data\Request;

use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]
class DashboardFilterData extends Data
{
    public function __construct(
        public ?string $datePreset = 'today',
        public ?string $dateFrom = null,
        public ?string $dateTo = null,
        public ?string $originLocationId = null,
        public ?string $destinationLocationId = null,
        public ?string $clientId = null,
    ) {}
}
