<?php

namespace Modules\Client\Classes\Data;

use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]
class CreateBusinessUnitData
{
    public function __construct(
        public string $clientId,
        public string $name,
        public string $touchpoint,
    ) {}
}
