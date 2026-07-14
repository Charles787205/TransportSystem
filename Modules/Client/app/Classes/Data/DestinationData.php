<?php

namespace Modules\Client\Classes\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class DestinationData
{
    public function __construct(
       public int $id,
       public int $clientId,
       public string $name,
       
    ) {}
}
