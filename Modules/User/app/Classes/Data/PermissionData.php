<?php

namespace Modules\User\Classes\Data;

use Modules\User\Models\Permission;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class PermissionData extends Data
{
    public function __construct(
        public int $id,
        public string $name,
        public string $slug,
        public bool $view,
        public bool $create,
        public bool $edit,
        public bool $delete,
    ) {}

    public static function fromModel(Permission $permission): self
    {
        return new self(
            id: $permission->id,
            name: $permission->name,
            slug: $permission->slug,
            view: (bool) $permission->pivot->view,
            create: (bool) $permission->pivot->create,
            edit: (bool) $permission->pivot->edit,
            delete: (bool) $permission->pivot->delete,
        );
    }
}