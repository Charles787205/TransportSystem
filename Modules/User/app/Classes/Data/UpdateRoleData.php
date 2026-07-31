<?php

namespace Modules\User\Classes\Data;

use Illuminate\Support\Str;
use Spatie\LaravelData\Attributes\Validation\Max;
use Spatie\LaravelData\Attributes\Validation\Nullable;
use Spatie\LaravelData\Attributes\Validation\Required;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]
class UpdateRoleData extends Data
{
    public function __construct(
        #[Required(), Max(25)]
        public string $name,
        #[Nullable(), Max(50)]
        public ?string $description = null,
        /** @var array<int, array{id: int, view: bool, create: bool, edit: bool, delete: bool}>|null */
        public ?array $permissions = [],
    ) {}

    public function toModelAttributes(): array
    {
        return [
            'name' => $this->name,
            'description' => $this->description ?? '',
            'slug' => Str::limit(Str::slug($this->name), 25, ''),
        ];
    }
}
