<?php

namespace Modules\DispatchOperation\Enums;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]
enum ServiceType: string
{
    case ONCALL = 'oncall';
    case WETLEASE = 'wetlease';
}