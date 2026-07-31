<?php

namespace Modules\User\Classes\Data;

use Illuminate\Support\Str;
use Spatie\LaravelData\Attributes\Validation\Max;
use Spatie\LaravelData\Attributes\Validation\Required;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]
class CreateRoleData extends Data
{
    public function __construct(
        #[Required(), Max(25)]
        public string $name,
        #[Required(), Max(50)]
        public string $description,
    ) {}

    public function toModelAttributes(): array
    {
        return [
            'name' => $this->name,
            'description' => $this->description,
            'slug' => Str::limit(Str::slug($this->name), 25, ''),
        ];
    }
}
