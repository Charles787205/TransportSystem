<?php

namespace Modules\Vendor\Classes\Data\Request;

use Spatie\LaravelData\Attributes\Validation\BooleanType;
use Spatie\LaravelData\Attributes\Validation\Required;
use Spatie\LaravelData\Data;

class UpdateVehicleStatusData extends Data
{
    public function __construct(
        #[Required]
        #[BooleanType]
        public readonly bool $isActive,
    ) {}
}
