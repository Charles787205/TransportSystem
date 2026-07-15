<?php

namespace Modules\Client\Classes\Data;

use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class DestinationData extends Data
{
    public function __construct(
       public int $id,
       public int $clientId,
       public string $name,
       
    ) {}
}
