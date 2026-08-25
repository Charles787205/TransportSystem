<?php

namespace Modules\Client\Enums;

use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]
enum TouchpointType: string
{
    case FM = 'FM';
    case MFM = 'MFM';
    case MM = 'MM';
}
