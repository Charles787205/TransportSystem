<?php

namespace Modules\Client\Classes\Data;

use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]
class CreateBusinessUnitData extends Data
{
    public function __construct(
        public string $clientId,
        public string $name,
        public string $touchpoint,
    ) {}
}
