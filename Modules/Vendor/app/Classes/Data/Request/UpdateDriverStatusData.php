<?php

namespace Modules\Vendor\Classes\Data\Request;

use Modules\Vendor\Enums\DriverStatusEnum;
use Spatie\LaravelData\Attributes\Validation\Enum as EnumAttribute;
use Spatie\LaravelData\Attributes\Validation\Required;
use Spatie\LaravelData\Data;

class UpdateDriverStatusData extends Data
{
    public function __construct(
        #[Required]
        #[EnumAttribute(DriverStatusEnum::class)]
        public string $status
    ) {}
}
