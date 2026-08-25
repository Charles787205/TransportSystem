<?php

namespace Modules\Vendor\Classes\Data\Response;

use Spatie\LaravelData\Attributes\MapInputName;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]
class EmergencyContactData extends Data
{
    public function __construct(
        public readonly int $id,
        #[MapInputName('full_name')]
        public readonly string $fullName,
        #[MapInputName('phone_number')]
        public readonly string $phoneNumber,
    ) {}
}
