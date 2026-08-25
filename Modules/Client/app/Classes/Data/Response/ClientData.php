<?php

namespace Modules\Client\Classes\Data\Response;

use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]
class ClientData extends Data
{
    public function __construct(
        public int $id,
        public string $email,
        public string $name,
        public string $phoneNumber,
        public string $active,
        public ?array $allowedCargoUnits = null,
        public string $createdAt = '',
        public string $updatedAt = '',
    ) {}
}
