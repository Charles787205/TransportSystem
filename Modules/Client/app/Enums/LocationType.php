<?php

namespace Modules\Client\Enums;

use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]
enum LocationType: string
{
    case BU = 'BU';
    case HUB = 'Hub';
}
