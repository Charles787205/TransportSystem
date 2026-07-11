<?php

namespace Modules\Client\Classes\Data;

use Spatie\LaravelData\Attributes\Validation\Email;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]
class CreateClientData extends Data
{
    public function __construct(
        #[Email()]
        public string $email,
        public string $name,
        public string $phoneNumber
    ) {}
}
