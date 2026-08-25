<?php

namespace Modules\Vendor\Classes\Data\Response;

use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]

class DriverData extends Data
{
    public function __construct(

        public readonly string $fullName,
        public readonly ?string $birthday,

        public readonly string $phoneNumber,

        public readonly string $status,

        public readonly ?int $vendorId

    ) {}
}
