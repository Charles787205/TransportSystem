<?php

namespace Modules\Client\Classes\Data\Response;

use Modules\Client\Enums\LocationType;
use Modules\Client\Enums\TouchpointType;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]
class LocationData extends Data
{
    public function __construct(
        public int $id,
        public int $clientId,
        public string $name,
        public ?TouchpointType $touchpoint,
        public ?LocationType $type,
        public ?string $address,
        public bool $active,
        public string $createdAt,
        public string $updatedAt,
    ) {}
}
