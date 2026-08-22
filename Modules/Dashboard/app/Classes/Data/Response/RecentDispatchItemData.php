<?php

namespace Modules\Dashboard\Classes\Data\Response;

use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]
class RecentDispatchItemData extends Data
{
    public function __construct(
        public int $id,
        public string $dispatchDate,
        public string $vehicle,
        public string $driver,
        public string $client,
        public string $origin,
        public string $destination,
        public string $status,
    ) {}
}
