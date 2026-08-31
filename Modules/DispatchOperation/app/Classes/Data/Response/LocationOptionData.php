<?php

namespace Modules\DispatchOperation\Classes\Data\Response;

use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]
class LocationOptionData extends Data
{
    public function __construct(
        public int $id,
        public string $label,
        public int $clientId,
        public ?string $touchpoint = null,
    ) {}
}
